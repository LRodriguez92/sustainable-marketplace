const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cart');
const { auth } = require('../middleware/auth');

// Create a new cart, add to existing, or decrease quantity
router.post('', auth, cartController.createOrUpdateCart);

// Get the cart of a user
router.get('', auth, cartController.getCart);

// Remove an item from the cart
router.delete('/item', auth, cartController.removeItem);

// Empty the cart
router.delete('/', auth, cartController.emptyCart);

module.exports = router;
