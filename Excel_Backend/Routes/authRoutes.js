const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../Controller/authController");

// Use the imported functions directly
router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
