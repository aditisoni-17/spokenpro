const express = require("express");

const app = express();

app.use(express.json());

const authRoutes = require("./routes/authRoutes");

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running successfully 🚀",
  });
});

app.use("/api/auth", authRoutes);

module.exports = app;
