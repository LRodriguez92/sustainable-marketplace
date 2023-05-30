const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const users = [
    {
        username: 'user1',
        email: 'user1@example.com',
        password: bcrypt.hashSync('123456', 8),
        isSeller: false,
    },
    {
        username: 'user2',
        email: 'user2@example.com',
        password: bcrypt.hashSync('123456', 8),
        isSeller: true,
    },
    {
        username: 'user3',
        email: 'user3@example.com',
        password: bcrypt.hashSync('123456', 8),
        isSeller: false,
    },
    {
        username: 'user4',
        email: 'user4@example.com',
        password: bcrypt.hashSync('123456', 8),
        isSeller: false,
    },
    {
        username: 'user5',
        email: 'user5@example.com',
        password: bcrypt.hashSync('123456', 8),
        isSeller: true,
    },
    // add as many users as you want
];

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    User.insertMany(users)
      .then(() => {
        console.log('Users seeded successfully');
        mongoose.connection.close();
      })
      .catch((error) => {
        console.log('Error seeding users:', error);
      });
})
