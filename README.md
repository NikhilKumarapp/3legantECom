# 3legantECom Full Stack Website
Full-stack ecommerce app using MERM (MongoDB, Express, React, Node.js) with user authentication, product management, and cart functionality.

Features
### Backend:
- User Auth:
POST /register, POST /login (JWT)
Product (Admin):
GET /products, GET /products/:id, POST /products, PUT /products/:id, DELETE /products/:id
Cart:
GET /cart, POST /cart, DELETE /cart/:id
### Frontend:
- React Components: AuthForm, ProductList, ProductDetail, Cart
Redux: State management for user auth and cart
React Router: Page navigation

Setup
------------------------------------------------------------------------
1.Clone & Install:
```
git clone https://github.com/NikhilKumarapp/3legantECom.git
cd ECommerceFrontend
npm install
cd ECommerceBackend
npm install
```
2.Config .env (backend):
```
PORT=8080
JWT_SECRET_KEY = JWT_SECRET_KEY
SESSION_KEY = SESSION_KEY
```
3.Run:
```
Backend: npm start
Frontend: npm start
```
Tech Stack:
Backend: Node.js, Express, MongoDB, JWT
Frontend: React, Redux, React Router

