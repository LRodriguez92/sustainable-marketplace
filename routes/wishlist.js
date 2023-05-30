const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlist');
const { auth } = require('../middleware/auth');

// Get products in wishlist
router.get('/', auth, wishlistController.getWishlist);

// Add product to wishlist
router.post('/:productId', auth, wishlistController.addToWishlist);

// Remove product from wishlist
router.delete('/:productId', auth, wishlistController.removeFromWishlist);

module.exports = router;
