# Scatch Mart Documentation

## Introduction
Scatch Mart is a full-stack e-commerce platform built using the MERN stack. It provides a seamless online shopping experience, allowing users to browse, add to cart, and purchase products. Admins can manage the product catalog and user database. The UI is responsive and user-friendly, ensuring accessibility across all devices.

## Features
- **User Authentication**
  - Secure login/signup using JWT
  - Authentication managed using React Context API and `useReducer`
  
- **Admin Dashboard**
  - Admin role verification
  - Add/delete products
  - View all users

- **Product Management**
  - Product list with image, description, price, and specs
  - Product detail pages with reviews and ratings

- **Shopping Cart**
  - Add/remove products
  - Dynamic updates with Context and `useReducer`

- **Deployment**
  - Frontend: Vercel
  - Backend: Render with secure environment variables

## Technologies Used
- **Frontend:** React.js, React Router, Axios, styled-components
- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Version Control:** Git & GitHub
- **Deployment:** Vercel (Frontend), Render (Backend)

## Project Structure
```
scatch-mart/
│── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── App.jsx
│   │   ├── index.jsx
│── .env (not committed)
│── package.json
│── README.md
```

## Installation & Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-repo/scatch-mart.git
   cd scatch-mart
   ```

2. **Install Dependencies**
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Configure Environment Variables**
   - Add `.env` files for backend and frontend
   - Example:
     ```env
     MONGO_URI=your_mongo_db_url
     JWT_SECRET=your_jwt_secret
     ```

4. **Run the Application**
   - Backend:
     ```bash
     npm run dev
     ```
   - Frontend:
     ```bash
     npm run dev
     ```

## Component Breakdown

### `Login.jsx` / `Register.jsx`
- Handles user authentication
- Sends JWT to frontend for session storage

### `ProductList.jsx`
- Displays all available products
- Dynamically updates with backend data

### `ProductDetail.jsx`
- Shows selected product info, ratings, and reviews

### `CartPage.jsx`
- Displays added products
- Uses custom cart context to manage state

### `AdminDashboard.jsx`
- Admin-only view
- Includes user list and product CRUD operations

## Responsiveness
- Built using styled-components
- Layout adapts using Flexbox/Grid and media queries
- Works across mobile, tablet, and desktop devices

## Future Enhancements
- Add payment gateway integration (Stripe, Razorpay)
- Add search and filtering features
- Improve UI animations with Framer Motion
- Add order history and user profile pages

## Conclusion
Scatch Mart is a modern and scalable e-commerce platform that demonstrates effective use of the MERN stack for both frontend and backend development. It offers core shopping features and admin management while being extensible for future improvements.

## Developed and Designed by Abhinav Mishra

