import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

// ===================== REGISTER =====================
export const register = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, password, role } = req.body;

    // Debug logs (helpful while testing)
    console.log("Body:", req.body);
    console.log("File:", req.file);

    // Validate required fields
    if (!fullName || !email || !phoneNumber || !password || !role) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Prepare user object
    const newUser = new User({
      fullName,
      email,
      phoneNumber,
      password: hashedPassword,
      role,
      profile: {},
    });

    // If file is uploaded, save it (right now we’ll just store buffer in DB)
    if (req.file) {
      newUser.profile.avatar = {
        data: req.file.buffer,
        contentType: req.file.mimetype,
      };
    }

    await newUser.save();

    return res
      .status(201)
      .json({ message: "User registered successfully", success: true });
  } catch (error) {
    console.error("Register Error:", error);
    res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};


// ===================== LOGIN =====================
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    if (!email || !password || !role) {
      return res
        .status(400)
        .json({ message: "All fields are required", success: false });
    }

    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password", success: false });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password", success: false });
    }

    if (role !== user.role) {
      return res.status(403).json({
        message: "Account doesn't exist with current role",
        success: false,
      });
    }

    const tokenData = { userId: user._id };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    const safeUser = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 86400000,
        httpOnly: true,
        sameSite: "Strict",
      })
      .json({
        message: `Welcome back ${user.fullName}`,
        user: safeUser,
        success: true,
      });
  } catch (error) {
    console.error("Login Error:", error);
    res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

// ===================== LOGOUT =====================
export const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .cookie("token", "", { maxAge: 0 })
      .json({ message: "Logout successful", success: true });
  } catch (error) {
    console.error("Logout Error:", error);
    res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};

// ===================== UPDATE PROFILE =====================
export const updateProfile = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, bio, skills } = req.body;
    let skillsArray;
    if(skills){
        skillsArray = skills.split(",");
    }

    const userId = req.userId;

    let user = await User.findById(userId);
    if (!user) {
      return res
        .status(400)
        .json({ message: "User not found", success: false });
    }

    if(fullName)user.fullName = fullName;
    if(email)user.email = email;
    if(phoneNumber)user.phoneNumber = phoneNumber;
    if(bio)user.profile.bio = bio;
    if(skills)user.profile.skills = skillsArray;

    await user.save();

    user = {
      _id: user._id,
      fullName: user.fullName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      profile: user.profile,
      role: user.role,
    }

    return res.status(200).json({
      message: "Profile updated successfully",
      user,
      success: true,
    });
  } catch (error) {
    console.error("UpdateProfile Error:", error);
    res
      .status(500)
      .json({ message: "Internal server error", success: false });
  }
};
