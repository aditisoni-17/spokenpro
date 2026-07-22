const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Import routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

// Root route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running successfully 🚀",
  });
});

// Register routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use(errorHandler);
module.exports = app;