import express from "express";
import multer from "multer";
import { register, updateProfile, login, logout } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();

// Configure multer (store file in memory for now)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// Routes
router.post("/register", upload.single("file"), register);
router.post("/login", login);
router.get("/logout", logout);
router.post("/profile/update", isAuthenticated, updateProfile);

export default router;
