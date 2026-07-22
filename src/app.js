const express = require("express");

const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "API is running successfully 🚀"
    });
});

module.exports = app;