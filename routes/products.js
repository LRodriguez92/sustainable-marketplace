const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');
const { auth, isSeller } = require('../middleware/auth');

// Get all products
router.get('', auth, productController.getAllProducts);

// Create a new product
router.post('', auth, isSeller, productController.createProduct);

// Get a specific product
router.get('/:id', auth, productController.getProductById);

// Update a product
router.put('/:id', auth, productController.updateProduct);

// Delete a product
router.delete('/:id', auth, productController.deleteProduct);

module.exports = router;
