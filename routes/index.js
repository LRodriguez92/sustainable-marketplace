const express = require('express');
const router = express.Router();

const authRoutes = require('./auth');
const userRoutes = require('./users');
const productRoutes = require('./products');
const categoryRoutes = require('./categories');
// const cartRoutes = require('./cart');
// const orderRoutes = require('./orders');
// const wishlistRoutes = require('./wishlist');
// const reviewRoutes = require('./reviews');

// Mount the routes
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/categories', categoryRoutes);
// router.use('/cart', cartRoutes);
// router.use('/orders', orderRoutes);
// router.use('/wishlist', wishlistRoutes);
// router.use('/reviews', reviewRoutes);

module.exports = router;
