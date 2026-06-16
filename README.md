# 🍕 Food Delivery Web App — MERN Stack

A full-stack food ordering platform built with the MERN stack. Users can browse the menu, add items to cart, place orders and pay via Stripe. Admins manage menu items and orders through a separate panel.

## Features

**User**
- JWT-based registration and login
- Browse menu with search and category filter
- Cart management with quantity controls
- Stripe payment integration (test mode)
- Order history and live status tracking

**Admin Panel**
- Add / update / delete food items with image upload
- View and manage all incoming orders
- Update order delivery status

## Tech Stack

| Layer     | Technology                                      |
| --------- | ----------------------------------------------- |
| Frontend  | React 18, React Router v6, Context API          |
| Backend   | Node.js, Express.js, REST API                   |
| Database  | MongoDB, Mongoose                               |
| Auth      | JWT (JSON Web Tokens)                           |
| Payments  | Stripe API                                      |
| Admin     | Separate React app on port 5174                 |

## Project Structure

```
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.jsx
└── admin/
    └── src/
```

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)
- Stripe account (for test keys)

### Backend

```bash
cd backend
npm install
```

Create `.env`:

```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

```bash
npm run server
# Runs on http://localhost:4000
```

### Frontend

```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

### Admin Panel

```bash
cd admin
npm install
npm run dev
# Runs on http://localhost:5174
```

## API Endpoints

| Method | Route                  | Description             |
| ------ | ---------------------- | ----------------------- |
| POST   | /api/user/register     | Register new user       |
| POST   | /api/user/login        | Login and get JWT       |
| GET    | /api/food/list         | Get all food items      |
| POST   | /api/cart/add          | Add item to cart        |
| POST   | /api/order/place       | Place an order          |
| GET    | /api/order/userorders  | Get user's orders       |

## Author

Yaswanth Kumar — [GitHub](https://github.com/YaswanthKumar) · [LinkedIn](https://linkedin.com/in/yaswanthkumar)
