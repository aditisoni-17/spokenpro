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
  try {
    // Step 1: Get product ID from URL
    const { id } = req.params;

    // Step 2: Get updated data from request body
    const { name, description, price, stock, category } = req.body;

    // Step 3: Find and update product
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      {
        name,
        description,
        price,
        stock,
        category,
      },
      {
        returnDocument: "after",
        runValidators: true,
      }
    );

    // Step 4: Check if product exists
    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Step 5: Return updated product
    res.status(200).json({
      success: true,
      message: "Product updated successfully",
      product: updatedProduct,
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

const deleteProduct = async (req, res) => {
  try {
    // Step 1: Get product ID from URL
    const { id } = req.params;

    // Step 2: Find and delete product
    const deletedProduct = await Product.findByIdAndDelete(id);

    // Step 3: Check if product exists
    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    // Step 4: Send success response
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
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

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
};