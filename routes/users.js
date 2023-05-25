const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const { auth } = require('../middleware/auth');
console.log(userController);
console.log(auth);

// Get all users data
router.get('', auth, userController.getUsers);

// Get user data
router.get('/:id', auth, userController.getUser);

// Update user data
router.put('/:id', auth, userController.updateUser);

// Delete user
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;
