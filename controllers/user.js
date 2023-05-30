const User = require('../models/User');

// Get all users data
const getUsers = async (req, res) => {
  try {
    const users = await User.find().populate('wishlist').populate('orders');
    res.status(200).json(users);
  } catch (error) {
    console.error('Error getting users data:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

// Get user data
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate('wishlist').populate('orders');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error getting user data:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

// Update user data
const updateUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.findByIdAndUpdate(req.params.id, { username, email }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user data:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

// Make user a seller
const makeUserSeller = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.userId, { isSeller: true }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error making user a seller:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

module.exports = {
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  makeUserSeller
};
