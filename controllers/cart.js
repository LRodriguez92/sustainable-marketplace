const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Create a new cart, add to existing, or decrease quantity
const createOrUpdateCart = async (req, res) => {
  const { productId, quantity, action } = req.body;
  
  try {
    let cart = await Cart.findOne({ user: req.userId });
    const product = await Product.findById(productId);
    
    if (!cart) {
      if (action === 'decrease' || quantity < 1) {
        return res.status(400).json({ message: 'Invalid operation' });
      }
      cart = new Cart({ user: req.userId, items: [{ product: productId, quantity }] });
      cart.total += product.price * quantity;
    } else {
      const index = cart.items.findIndex(item => item.product.toString() === productId);
      
      if (index === -1) {
        if (action === 'decrease' || quantity < 1) {
          return res.status(400).json({ message: 'Invalid operation' });
        }
        cart.items.push({ product: productId, quantity });
        cart.total += product.price * quantity;
      } else {
        if (action === 'decrease') {
          if (cart.items[index].quantity <= 1) {
            return res.status(400).json({ message: 'Invalid operation' });
          }
          cart.items[index].quantity -= quantity;
          cart.total -= product.price * quantity;
        } else {
          cart.items[index].quantity += quantity;
          cart.total += product.price * quantity;
        }
      }
    }
    
    await cart.save();
    
    res.status(200).json(cart);
  } catch (error) {
    console.error('Error managing cart:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

// Get the cart of a user
const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.userId }).populate('items.product');
    
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    res.status(200).json(cart);
  } catch (error) {
    console.error('Error getting cart:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

// Remove an item from the cart
const removeItem = async (req, res) => {
  const { itemId } = req.body;
  
  try {
    const cart = await Cart.findOne({ user: req.userId });
    const index = cart.items.findIndex(item => item._id.toString() === itemId);
    
    if (index === -1) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }
    
    const product = await Product.findById(cart.items[index].product);
    cart.total -= product.price * cart.items[index].quantity;
    
    cart.items.splice(index, 1);
    await cart.save();
    
    res.status(200).json(cart);
  } catch (error) {
    console.error('Error removing item from cart:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

// Empty the cart
const emptyCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ user: req.userId });
    
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
    
    cart.items = [];
    cart.total = 0;
    await cart.save();
    
    res.status(200).json(cart);
  } catch (error) {
    console.error('Error emptying cart:', error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

module.exports = {
  createOrUpdateCart,
  getCart,
  removeItem,
  emptyCart,
};
