# 🎉 EventEase – Event Management Web App

**EventEase** is a full-stack event management platform that allows users to discover and book events, and provides admins with tools to manage event listings efficiently. The project focuses on role-based access, real-time updates, and a clean user experience.

---

## 🚀 Features Implemented

### 👤 User & Admin Authentication
- Secure login and signup with JWT
- Role-based access (User/Admin)

### 📅 Event Management
- Admins can add, update, delete events
- Users can view and book events

### 📄 Bookings Dashboard
- Users can view and cancel their bookings
- Admins can monitor event bookings
Filter bookings by **location** and **event date** and **category** for easier management and tracking

### 🔔 User Experience
- Toast notifications for actions (e.g., login, booking, deletion)
- Styled using **DaisyUI** for consistent and visually appealing UI components

---

## 🛠 Tech Stack Used

### Frontend
- React.js
- Tailwind CSS
- React Router
- Axios
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- Dotenv for environment variables
- Nodemon for development

---

## 📂 Project Structure

EventEase/
├── backend/ # Express API with MongoDB
├── frontend/ # React client


📁 Folder Structure

```bash
.
├── backend
│   ├── node_modules
│   ├── src
│   │   ├── controllers
│   │   ├── db
│   │   ├── middlewares
│   │   ├── models
│   │   ├── routes
│   │   ├── utils
│   │   └── index.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
└── frontend
    ├── public
    ├── src
    │   ├── api
    │   ├── assets
    │   ├── Components
    │   ├── pages
    │   ├── store
    │   ├── utils
    │   ├── App.jsx
    │   ├── index.css
    │   └── main.jsx
    ├── .env
    ├── .gitignore
    ├── index.html
    └── eslint.config.js

```

---

## ⚙️ Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
Install backend dependencies:


npm install

```

Create a .env file inside the backend/ folder and add the following:

```bash

PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
Start the backend server:

```bash
npm run dev
```

💻 Frontend Setup
Navigate to the frontend folder:

```bash
cd frontend
```
Install frontend dependencies:

```bash
npm install
```

Create a .env file inside the frontend/ folder and add the following:

```bash
VITE_BACKEND_URL=http://localhost:8000/api/v1
```

Start the frontend app:

```bash
npm run dev
```

## 📩 API Documentation

You can access the API documentation via the following Postman collections:

```bash
- ✅ [Auth APIs](https://www.postman.com/gauravsharma1711/workspace/eventease/collection/36921467-d2b6485d-4c74-4ecd-b976-d921b0304ced)
- ✅ [Booking APIs](https://www.postman.com/gauravsharma1711/workspace/eventease/collection/36921467-38fad699-fef1-4be4-b468-018b69cc059e)
- ✅ [Event APIs](https://www.postman.com/gauravsharma1711/workspace/eventease/collection/36921467-85b8fd8d-e9c9-40b1-b065-fd51245032c2)
```