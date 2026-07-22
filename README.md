# 🚀 Product Management API

> A RESTful Backend API built with **Node.js**, **Express.js**, **MongoDB**, and **JWT Authentication**.

---

## 📸 Project Demo

### 🏠 Home Endpoint

![Home](./screenshots/home.png)

---

### 👤 User Registration

![Register](./screenshots/register.png)

---

### 🔐 User Login

![Login](./screenshots/login.png)

---

### ➕ Create Product

![Create Product](./screenshots/create-product.png)

---

### 📋 Get All Products

![Get Products](./screenshots/get-products.png)

---

### 🔍 Search Products

![Search](./screenshots/search.png)

---

### 📄 Pagination

![Pagination](./screenshots/pagination.png)

---

### ✏️ Update Product

![Update Product](./screenshots/update-product.png)

---

### 🗑️ Delete Product

![Delete Product](./screenshots/delete-product.png)

---

# ✨ Features

- 🔐 JWT Authentication
- 🔒 Password Hashing using bcrypt
- 👤 User Registration & Login
- 📦 Product CRUD APIs
- 🔍 Search Products
- 📄 Pagination
- 🗄️ MongoDB with Mongoose
- ⚠️ Centralized Error Handling
- 🏗️ MVC Folder Structure

---

# 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- dotenv

---

# 📂 Project Structure

```text
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   └── productController.js
│
├── middleware/
│   ├── authMiddleware.js
│   └── errorMiddleware.js
│
├── models/
│   ├── User.js
│   ├── Product.js
│   └── Order.js
│
├── routes/
│   ├── authRoutes.js
│   └── productRoutes.js
│
├── app.js
├── server.js
├── .env.example
├── package.json

screenshots

README.md
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/product-management-api.git
```

Go to the project

```bash
cd product-management-api
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=9000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

Run the server

```bash
npm run dev
```

---

# 📌 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/api/auth/register` | Register User |
| POST | `/api/auth/login` | Login User |

---

## Products

| Method | Endpoint | Description |
|---------|----------|-------------|
| GET | `/api/products` | Get All Products |
| GET | `/api/products/:id` | Get Product By ID |
| POST | `/api/products` | Create Product |
| PUT | `/api/products/:id` | Update Product |
| DELETE | `/api/products/:id` | Delete Product |

---

# 🔍 Search

```http
GET /api/products?search=iPhone
```

---

# 📄 Pagination

```http
GET /api/products?page=1&limit=5
```

---

# 👩‍💻 Author

**Aditi Soni**

GitHub: https://github.com/aditisoni-17
