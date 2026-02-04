
# House Rental / Property Listing Platform (MERN Stack)

This project is a modern full-stack House Rental / Property Listing Platform
built using React for frontend and Node.js + Express + MongoDB for backend.
Frontend and backend are completely decoupled and communicate via REST APIs.

---

## Backend Folder Structure

backend/
│
├── src/
│ ├── config/
│ │ ├── db.js
│ │ └── cloudinary.js
│ │
│ ├── models/
│ │ ├── User.js
│ │ └── Property.js
│ │
│ ├── controllers/
│ │ ├── authController.js
│ │ └── propertyController.js
│ │
│ ├── routes/
│ │ ├── authRoutes.js
│ │ └── propertyRoutes.js
│ │
│ ├── middlewares/
│ │ ├── authMiddleware.js
│ │ └── errorMiddleware.js
│ │
│ ├── utils/
│ │ └── generateToken.js
│ │
│ ├── app.js
│ └── server.js
│
├── .env
├── package.json
└── .gitignore

## Frontend Folder Structure

frontend/
│
├── src/
│ ├── api/
│ │ └── axios.js
│ │
│ ├── components/
│ │ ├── Navbar.jsx
│ │ └── PropertyCard.jsx
│ │
│ ├── pages/
│ │ ├── Home.jsx
│ │ ├── Login.jsx
│ │ ├── Register.jsx
│ │ ├── PropertyDetails.jsx
│ │ └── Dashboard.jsx
│ │
│ ├── context/
│ │ └── AuthContext.jsx
│ │
│ ├── routes/
│ │ └── PrivateRoute.jsx
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── package.json
└── tailwind.config.js


---
