import jwt from "jsonwebtoken";

const isAuthenticated = (req, res, next) => {
    try {
        const token = req.cookies.token ;
        if(!token){
            return res.status(401).json({ message: "Unauthorized", success: false });
        }
        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        if(!decoded) {
            return res.status(401).json({ message: "Unauthorized", success: false });
        }
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(500).json({ message: "Internal server error", success: false });
    }
};

export default isAuthenticated;
