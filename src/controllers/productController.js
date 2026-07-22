const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    // Get data from request body
    const { name, description, price, stock, category } = req.body;

    // Validate input
    if (!name || !description || !price || stock === undefined || !category) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Create product
    const product = await Product.create({
      name,
      description,
      price,
      stock,
      category,
    });

    // Send response
    res.status(201).json({
      success: true,
      message: "Product created successfully",
      product,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getProducts = async (req, res) => {
  try {
    // Fetch all products
    const products = await Product.find();

    res.status(200).json({
      success: true,
      count: products.length,
      products,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const getProductById = async (req, res) => {
  try {
    // Get product ID from URL
    const { id } = req.params;

    // Find product
    const product = await Product.findById(id);

    // Check if product exists
    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Return product
    res.status(200).json({
      success: true,
      product,
    });

  } catch (error) {
    console.error(error);

    if (error.name === "CastError") {
    return res.status(400).json({
      success: false,
      message: "Invalid product ID",
    });
  }

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

const updateProduct = async (req, res) => {
  res.json({
    message: "Update Product API Working",
  });
};

const deleteProduct = async (req, res) => {
  res.json({
    message: "Delete Product API Working",
  });
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};