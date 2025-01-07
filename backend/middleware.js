const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: "No token provided or malformed token" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        req.userId = decoded.userId;  // Attach user ID
        req.user = decoded;           // Attach full payload 

        next();  // Proceed to next middleware or route handler
    } catch (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
};

module.exports = {
    authMiddleware
}