const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order');
const { auth, isSeller } = require('../middleware/auth');

// Get all orders
router.get('/', auth, orderController.getOrders);

// Get a specific order
router.get('/:id', auth, orderController.getOrder);

// Create a new order
router.post('/', auth, orderController.createOrder);

// Update an existing order
router.put('/:id', auth, isSeller, orderController.updateOrder);

// Delete an order
router.delete('/:id', auth, isSeller, orderController.deleteOrder);

module.exports = router;
