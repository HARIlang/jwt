# 🔐 Express Authentication Backend

A secure authentication backend built with **Node.js**, **Express.js**, and **MongoDB**, implementing modern authentication practices such as **JWT**, **bcrypt**, **protected routes**, and **API rate limiting**.

> **Note:** This project is backend-focused. The frontend is intentionally minimal and is only used to test the REST APIs.

---

## ✨ Features

- 🔐 User Registration & Login
- 🔑 JWT Authentication & Authorization
- 🔒 Password Hashing (bcrypt)
- 🛡 Protected Routes
- ⚡ API Rate Limiting
- 🗄 MongoDB with Mongoose
- 📦 RESTful APIs
- 📁 MVC Architecture

---

## 🏗 Architecture

```text
        Client
          │
          ▼
     POST /login
          │
          ▼
    Express.js API
          │
 ┌──────────────────┐
 │ bcrypt │ JWT │   │
 │ Rate Limiter     │
 └──────────────────┘
          │
          ▼
       MongoDB
```

---

## 📦 Installation

```bash
git clone https://github.com/HARIlang/express-login-bcrypt-mangodb.git

cd express-login-bcrypt-mangodb

npm install
```

### Install Packages

```bash
npm install express
npm install mongoose
npm install jsonwebtoken
npm install bcrypt
npm install express-rate-limit
npm install dotenv
npm install cors
```

### Environment Variables

```env
PORT=4500
MONGODB_URI=your_connection_string
JWT_KEY=your_secret_key
```

### Run

```bash
npm start
```

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB    
- Mongoose
- JWT
- bcrypt
- express-rate-limit
- dotenv
- cors

---

## 📌 API Endpoints

| Method | Endpoint |
|---------|----------|
| POST | `/api/user/signup` |
| POST | `/api/user/login` |
| GET | `/api/user/profile` |
| PUT | `/api/user/updatePassword` |
| POST | `/api/user/logout` |

---

⭐ If you found this project helpful, consider giving it a star.

**Author:** Hariharan S
