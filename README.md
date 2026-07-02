# 🏋️ Gym Backend API

A RESTful Backend API built using **NestJS**, **MongoDB**, and **Mongoose**.

This project is part of my **Backend End-to-End Mastery Program**, where I am learning to build scalable, secure, and production-ready backend applications using NestJS and MongoDB.

---

## 🚀 Tech Stack

- NestJS
- TypeScript
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Postman
- Git & GitHub

---

# ✨ Features

## 🏋️ Gym Management

- ✅ Create Gym
- ✅ Get All Gyms
- ✅ Get Gym By ID
- ✅ Update Gym
- ✅ Delete Gym

---

## 👤 User Management

- ✅ User Registration
- ✅ Find User by Email
- ✅ Find User by ID
- ✅ User Role Management (Admin/User)

---

## 🔐 Authentication & Authorization

- ✅ User Registration API
- ✅ User Login API
- ✅ JWT Authentication
- ✅ Password Hashing using bcrypt
- ✅ Protected Routes
- ✅ Role-Based Authorization

---

## 🛡️ Security

- ✅ Request Rate Limiting
- ✅ Global Exception Handling
- ✅ Input Validation
- ✅ Secure Password Storage

---

## 📊 Analytics

- ✅ MongoDB Aggregation Framework
- ✅ `$match` Stage
- ✅ `$group` Stage
- ✅ `$facet` Stage
- ✅ User Analytics Dashboard API
- ✅ Total Users Count
- ✅ Admin Users Count
- ✅ Normal Users Count
- ✅ Aggregation Query Optimization

---

## 🗄️ Database

- ✅ MongoDB Integration
- ✅ Mongoose Schemas
- ✅ User Schema
- ✅ Gym Schema

---

# ⚙️ Installation

## Clone the repository

```bash
git clone https://github.com/pragatibhandare05-ux/gym-backend.git
```

## Navigate into the project

```bash
cd gym-backend
```

## Install dependencies

```bash
npm install
```

## Start the development server

```bash
npm run start:dev
```

The server will run at:

```
http://localhost:3000
```

---

# 📌 API Endpoints

## 🔐 Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Login user |

---

## 👤 Users

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/users/analytics` | Get user analytics dashboard |

---

## 🏋️ Gym

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/gym` | Get all gyms |
| GET | `/gym/:id` | Get gym by ID |
| POST | `/gym` | Create a gym |
| PUT | `/gym/:id` | Update a gym |
| DELETE | `/gym/:id` | Delete a gym |

---

# 📂 Project Structure

```text
src/
│
├── auth/
│   ├── dto/
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   └── auth.module.ts
│
├── users/
│   ├── dto/
│   ├── schemas/
│   ├── users.controller.ts
│   ├── users.service.ts
│   └── users.module.ts
│
├── gym/
│   ├── dto/
│   ├── schemas/
│   ├── gym.controller.ts
│   ├── gym.service.ts
│   └── gym.module.ts
│
├── common/
│
├── app.module.ts
└── main.ts
```

---

# 🧪 Testing

API testing was performed using **Postman**.

The project includes testing for:

- ✅ Gym CRUD APIs
- ✅ User Registration
- ✅ User Login
- ✅ Analytics API
- ✅ JWT Authentication
- ✅ Validation & Error Handling

---

# 📈 Current Learning Progress

Completed modules:

- ✅ NestJS Fundamentals
- ✅ CRUD Operations
- ✅ MongoDB Integration
- ✅ Mongoose
- ✅ Authentication
- ✅ Authorization
- ✅ JWT
- ✅ Password Hashing
- ✅ Rate Limiting
- ✅ Aggregation Framework
- ✅ Analytics APIs

---

# 🚀 Future Improvements

- ⏳ Refresh Token Authentication
- ⏳ File Uploads
- ⏳ User-Gym Relationship using `$lookup`
- ⏳ Pagination
- ⏳ Search & Filtering
- ⏳ Swagger API Documentation
- ⏳ Docker Support

---

# 👩‍💻 Author

**Pragati Bhandare**

GitHub:
https://github.com/pragatibhandare05-ux

---

⭐ If you found this project useful, consider giving it a star on GitHub!