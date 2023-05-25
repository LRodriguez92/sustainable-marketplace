const mongoose = require('mongoose');
const Category = require('../models/Category');
require('dotenv').config();

const data = [
  {
    name: 'Electronics',
    description: 'All kinds of electronics'
  },
  {
    name: 'Books',
    description: 'Books in various categories'
  },
  {
    name: 'Clothing',
    description: 'Men\'s and women\'s clothing'
  },
  {
    name: 'Home & Kitchen',
    description: 'Home appliances and kitchen tools'
  },
  // Add more categories as needed
];

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    Category.insertMany(data)
      .then(() => {
        console.log('Category data has been inserted');
        mongoose.connection.close();
      })
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log('Error connecting to MongoDB', error));
