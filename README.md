Scatch Mart Documentation
Introduction
Scatch Mart is a full-stack e-commerce platform built using the MERN stack. It allows users to browse and purchase products (bags), while admins can manage inventory and user data. The app features role-based access, a responsive interface, and API-driven interactions.

Features
User authentication and session handling using JWT

Admin role for managing products and viewing user data

Add to cart, remove from cart, and cart persistence

Dynamic product detail pages with images, pricing, and descriptions

Responsive design compatible with mobile and desktop

RESTful APIs and secure backend logic

Technologies Used
Frontend: React.js, Styled Components, Axios

Backend: Node.js, Express.js

Database: MongoDB with Mongoose

Authentication: JWT, bcrypt

Version Control: Git & GitHub

Hosting: Render (Backend), Netlify/Vercel (Frontend)

Project Structure
pgsql
Copy
Edit
scatch-mart/
│── client/ (React Frontend)
│   ├── src/
│   │   ├── components/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── CartPage.jsx
│   │   │   ├── AdminPanel.jsx
│   │   ├── context/
│   │   │   ├── AuthContext.jsx
│   │   │   ├── CartContext.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│── server/ (Node + Express Backend)
│   ├── models/
│   │   ├── Product.js
│   │   ├── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── .env
│   ├── server.js
│── README.md
Installation & Setup
1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/your-username/scatch-mart.git
cd scatch-mart
2. Install Dependencies
Frontend:

bash
Copy
Edit
cd client
npm install
Backend:

bash
Copy
Edit
cd ../server
npm install
3. Configure Environment Variables
Create a .env file in the backend (/server) and add:

ini
Copy
Edit
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
4. Run the Application
Backend:

bash
Copy
Edit
cd server
npm run dev
Frontend:

bash
Copy
Edit
cd client
npm run dev
Component Breakdown
1. ProductCard.jsx
Renders a single product with image, title, and price

Includes an “Add to Cart” button

Responsive styling with styled-components

2. CartPage.jsx
Shows all items added to the cart

Allows item removal and quantity changes

Uses global cart state via Context API

3. AdminPanel.jsx
Admin-only page to:

Add or delete products

View all registered users

Protected route with role check

4. AuthContext.jsx
Manages user login/logout and token

Stores user info in localStorage for session persistence

5. CartContext.jsx
Manages global cart state using useReducer

Handles dispatch for add/remove operations

Responsiveness
Layouts use Flexbox and Grid

Styled-components for dynamic styling

Media queries and conditional styles for mobile devices

Future Enhancements
Payment integration (Razorpay/Stripe)

Search and filter functionality for products

Product categories and tags

Ratings and reviews system

Order tracking and user history

Dark mode toggle

Conclusion
Scatch Mart is a scalable and modular e-commerce platform tailored for users and admins alike. Built using modern JavaScript frameworks and practices, it provides a foundation for real-world web applications with secure authentication, dynamic product rendering, and responsive design.

Developed and Designed by Abhinav Mishra
