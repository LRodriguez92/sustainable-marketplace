const mongoose = require('mongoose');
const { Schema } = mongoose;

const sellerSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  storeName: {
    type: String,
    required: true,
    trim: true
  },
  storeDescription: {
    type: String,
    trim: true
  },
  businessAddress: {
    type: String,
    required: true,
    trim: true
  },
  // ... any other fields
});

module.exports = mongoose.model('Seller', sellerSchema);
