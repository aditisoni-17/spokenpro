const express = require("express");

const app = express();

// Middleware
app.use(express.json());

// Routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");

// Error Middleware
const errorHandler = require("./middleware/errorMiddleware");

// Root Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running successfully 🚀",
  });
});

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

// Error Handler (Must be the last middleware)
app.use(errorHandler);

module.exports = app;