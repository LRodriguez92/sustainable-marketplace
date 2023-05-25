const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');
const auth = require('../middleware/auth');

// Get all categories
router.get('', auth, categoryController.getAllCategories);

// Create a new category
router.post('', auth, categoryController.createCategory);

// Get a specific category
router.get('/:id', auth, categoryController.getCategoryById);

// Update a category
router.put('/:id', auth, categoryController.updateCategory);

// Delete a category
router.delete('/:id', auth, categoryController.deleteCategory);

module.exports = router;
