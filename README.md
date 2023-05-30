# Sustainable Marketplace

Sustainable Marketplace is a Node.js web application that provides a platform for users to buy and sell sustainable goods. It provides features like user authentication, adding products to a shopping cart, placing orders, leaving reviews, and managing a wishlist. 

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- bcrypt.js for password hashing
- nodemailer for email notifications

## Installation

To install and run this application:

1. Clone the repository

    ```
    git clone git@github.com:LRodriguez92/sustainable-marketplace.git
    ```

2. Navigate into the repository's directory

    ```
    cd sustainable-marketplace
    ```

3. Install the required packages

    ```
    npm install
    ```

4. Create a .env file in the root directory based on the provided .env.example file:

    ```
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    EMAIL_USERNAME=your_email_username
    EMAIL_PASSWORD=your_email_password
    ```

5. Run the server

    ```
    node server.js
    ```

## Database Seeding

To seed the database with initial data, run the following commands:

1. Seed categories:

    ```
    node seeds/categories.js
    ```

2. Seed users:

    ```
    node seeds/users.js
    ```

3. Seed products:

    ```
    node seeds/products.js
    ```

## Routes

| Method | Endpoint                  | Description                       |
|--------|---------------------------|-----------------------------------|
| POST   | /auth/register            | Register a new user               |
| POST   | /auth/login               | Login a user                      |
| POST   | /auth/reset-password      | Reset a user's password           |
| POST   | /auth/change-password     | Change a user's password          |
| GET    | /users                    | Get all users                     |
| GET    | /users/:id                | Get a specific user               |
| PUT    | /users/:id                | Update a user                     |
| DELETE | /users/:id                | Delete a user                     |
| PUT    | /users/:id/seller         | Make a user a seller              |
| GET    | /products                 | Get all products                  |
| POST   | /products                 | Add a new product                 |
| GET    | /products/:id             | Get a specific product            |
| PUT    | /products/:id             | Update a product                  |
| DELETE | /products/:id             | Delete a product                  |
| GET    | /categories               | Get all categories                |
| POST   | /categories               | Create a new category             |
| GET    | /categories/:id           | Get a specific category           |
| PUT    | /categories/:id           | Update a category                 |
| DELETE | /categories/:id           | Delete a category                 |
| POST   | /cart                     | Add an item to the cart           |
| GET    | /cart                     | Get the user's cart               |
| DELETE | /cart/item                | Remove an item from the cart      |
| DELETE | /cart                     | Empty the cart                    |
| GET    | /orders                   | Get all orders                    |
| GET    | /orders/:id               | Get a specific order              |
| POST   | /orders                   | Create a new order                |
| PUT    | /orders/:id               | Update an order                   |
| DELETE | /orders/:id               | Delete an order                   |
| POST   | /reviews                  | Post a new review                 |
| GET    | /reviews/product/:productId | Get reviews for a product    
| DELETE | /reviews/:id              | Delete a review                   |
| GET    | /wishlist                 | Get the user's wishlist           |
| POST   | /wishlist/:productId      | Add an item to the wishlist       |
| DELETE | /wishlist/:productId      | Remove an item from the wishlist  |

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)