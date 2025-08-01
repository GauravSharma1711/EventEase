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

### 🔔 User Experience
- Toast notifications for actions (e.g., login, booking, deletion)


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



---

## ⚙️ Backend Setup

1. Navigate to the backend folder:

```bash
cd backend
Install backend dependencies:

bash
Copy
Edit
npm install
Create a .env file inside the backend/ folder and add the following:

env
Copy
Edit
PORT=8000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Start the backend server:

bash
Copy
Edit
npm run dev
💻 Frontend Setup
Navigate to the frontend folder:

bash
Copy
Edit
cd frontend
Install frontend dependencies:

bash
Copy
Edit
npm install
Create a .env file inside the frontend/ folder and add the following:

env
Copy
Edit
VITE_BACKEND_URL=http://localhost:8000/api/v1
Start the frontend app:

bash
Copy
Edit
npm run dev