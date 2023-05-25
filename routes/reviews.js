const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/review');
const { auth } = require('../middleware/auth');

// Post a new review
router.post('', auth, reviewController.createReview);

// Get reviews for a specific product
router.get('/product/:productId', reviewController.getReviewsForProduct);

// Delete a review
router.delete('/:id', auth, reviewController.deleteReview);

module.exports = router;
