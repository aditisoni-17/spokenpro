const express = require("express");
const router = express.Router();

const { register, login } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", (req, res, next) => {
  console.log("➡️ Register route hit");
  next();
}, register);

router.post("/login", (req, res, next) => {
  console.log("➡️ Login route hit");
  next();
}, login);

router.get("/profile", authMiddleware, (req, res) => {
  console.log("➡️ Profile route hit");

  res.status(200).json({
    success: true,
    message: "Welcome to your profile!",
    user: req.user,
  });
});

module.exports = router;