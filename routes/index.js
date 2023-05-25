const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
// const productRoutes = require('./products');
// const cartRoutes = require('./cart');
// const orderRoutes = require('./orders');
// const wishlistRoutes = require('./wishlist');
// const userRoutes = require('./users');
// const reviewRoutes = require('./reviews');

// Mount the routes
router.use('/auth', authRoutes);
// router.use('/products', productRoutes);
// router.use('/cart', cartRoutes);
// router.use('/orders', orderRoutes);
// router.use('/wishlist', wishlistRoutes);
// router.use('/users', userRoutes);
// router.use('/reviews', reviewRoutes);

module.exports = router;
