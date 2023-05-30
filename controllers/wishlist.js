const Wishlist = require('../models/Wishlist');
const Product = require('../models/Product');

const addToWishlist = async (req, res) => {
  const { productId } = req.params;
  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const wishlist = await Wishlist.findOne({ user: req.userId });

  if (!wishlist) {
    const newWishlist = new Wishlist({ user: req.userId });
    newWishlist.products.push(productId);
    await newWishlist.save();
    return res.status(201).json(newWishlist);
  }

  if (wishlist.products.includes(productId)) {
    return res.status(400).json({ message: 'Product already in wishlist' });
  }

  wishlist.products.push(productId);
  await wishlist.save();
  return res.status(200).json(wishlist);
};

const removeFromWishlist = async (req, res) => {
  const { productId } = req.params;
  const wishlist = await Wishlist.findOne({ user: req.userId });

  if (!wishlist) {
    return res.status(404).json({ message: 'No wishlist found' });
  }

  const productIndex = wishlist.products.indexOf(productId);

  if (productIndex === -1) {
    return res.status(400).json({ message: 'Product not in wishlist' });
  }

  wishlist.products.splice(productIndex, 1);
  await wishlist.save();

  return res.status(200).json(wishlist);
};

const getWishlist = async (req, res) => {
  const wishlist = await Wishlist.findOne({ user: req.userId }).populate('products');

  if (!wishlist) {
    return res.status(404).json({ message: 'No wishlist found' });
  }

  return res.status(200).json(wishlist);
};

module.exports = {
  addToWishlist,
  removeFromWishlist,
  getWishlist
};
