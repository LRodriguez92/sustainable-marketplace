const express = require('express');
const router = express.Router();

// Import the auth controller
const authController = require('../controllers/auth');

// Routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/reset-password', authController.resetPassword);
router.post('/change-password', authController.changePassword);

module.exports = router;
