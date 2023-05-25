const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Add user ID to request object
    req.userId = decoded.userId;

    next();
  } catch (error) {
    console.error('Error in auth middleware:', error);
    res.status(401).json({ message: 'Not authenticated' });
  }
};

const User = require('../models/User');

const isSeller = async (req, res, next) => {
  try {
    // Fetch the user using the userId from the auth middleware
    const user = await User.findById(req.userId);
    
    // Check if user was found and is a seller
    if (!user || !user.isSeller) {
      return res.status(403).json({ message: 'User is not a seller' });
    }

    // If user is a seller, move to the next middleware
    next();
  } catch (error) {
    console.error('Error in isSeller middleware:', error);
    return res.status(500).json({ message: 'An error occurred' });
  }
};

module.exports = {
    auth,
    isSeller
};
