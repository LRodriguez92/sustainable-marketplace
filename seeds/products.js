const mongoose = require('mongoose');
const Product = require('../models/Product');
require('dotenv').config();

const products = [
  {
    name: 'Product 1',
    description: 'This is product 1',
    price: 10.0,
    quantity: 100,
    seller: '64760f13982c467a021200a9', // Replace with actual user ID
    category: '646faf2bc5b236e73ee48a55', // Replace with actual category ID
  },
  {
    name: 'Product 2',
    description: 'This is product 2',
    price: 20.0,
    quantity: 50,
    seller: '64760f13982c467a021200a9', // Replace with actual user ID
    category: '646faf2bc5b236e73ee48a53', // Replace with actual category ID
  },
  {
    name: 'Product 3',
    description: 'This is product 3',
    price: 30.0,
    quantity: 75,
    seller: '64760f13982c467a021200ac', // Replace with actual user ID
    category: '646faf2bc5b236e73ee48a52', // Replace with actual category ID
  },
  {
    name: 'Product 4',
    description: 'This is product 4',
    price: 40.0,
    quantity: 200,
    seller: '64760f13982c467a021200ac', // Replace with actual user ID
    category: '646faf2bc5b236e73ee48a54', // Replace with actual category ID
  },
  // Add as many products as you want
];

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  console.log('Connected to MongoDB');
  Product.insertMany(products)
    .then(() => {
      console.log('Products seeded successfully');
      mongoose.connection.close();
    })
    .catch((error) => {
      console.log('Error seeding products:', error);
    });
})
.catch((error) => {
  console.log('Error connecting to MongoDB:', error);
});
