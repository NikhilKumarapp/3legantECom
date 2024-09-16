# MERN Ecommerce Project
Overview
This project is a full-stack Ecommerce application built using the MERM stack (MongoDB, Express, React, Node.js) to provide a complete shopping experience. The application includes user authentication, product management, and shopping cart functionality.

The backend is a RESTful API created with Node.js and Express, and the frontend is developed using React with Redux for state management.

Features
Backend (Node.js + Express)
User Authentication:

POST /register: Register a new user.
POST /login: Authenticate a user and return a JWT.
Product Management (Admin Only):

GET /products: Retrieve a list of products.
GET /products/:id: Retrieve details of a specific product.
POST /products: Add a new product (admin only).
PUT /products/:id: Update an existing product (admin only).
DELETE /products/:id: Delete a product (admin only).
Shopping Cart:

GET /cart: Retrieve the user's shopping cart.
POST /cart: Add an item to the cart.
DELETE /cart/:id: Remove an item from the cart.
Database:

MongoDB is used to store user information, product data, and shopping cart details.
Proper schema design and relationships are implemented.
Authentication & Authorization:

JWT is used for user authentication.
Admin-only routes are protected using middleware.
Frontend (React + Redux)
User Authentication:

Users can register, log in, and log out.
Authentication state is managed using Redux.
Product Management:

A list of products is displayed on the home page.
Users can view detailed information about a specific product.
Admin users can add, update, and delete products.
Shopping Cart:

Users can add products to their cart.
The shopping cart displays all added items and allows users to remove them.
Routing:

React Router is used to handle navigation between different pages.

```
git clone https://github.com/NikhilKumarapp/3legantECom.git
cd ECommerceFrontend
npm install
cd ECommerceBackend
npm install
```

```
PORT=8080
JWT_SECRET_KEY = JWT_SECRET_KEY
SESSION_KEY = SESSION_KEY
```
