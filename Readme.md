# Youtube-Backend

Welcome to **Youtube-Backend** – a feature-rich, scalable backend API for a YouTube-like video platform, built with Node.js, Express, and MongoDB.

---

## 🚀 Features

- **User Authentication & JWT Authorization**
- **Video Uploads & Streaming**
- **User Profiles & Avatars**
- **Subscriptions & Channels**
- **Playlists & Watch History**
- **Likes & Comments**
- **Cloudinary Integration for Media Storage**
- **Robust Error Handling & API Responses**
- **Secure Cookie-based Sessions**
- **Multer for File Uploads**

---

## 🛠️ Tech Stack

- **Node.js** & **Express.js**
- **MongoDB** & **Mongoose**
- **JWT** for authentication
- **Cloudinary** for media storage
- **Multer** for file uploads
- **dotenv** for environment management

---

## 📦 Project Structure

```
/src
  /controllers      # Route controllers for all endpoints
  /models           # Mongoose models
  /routes           # Express route definitions
  /middlewares      # Auth, multer, etc.
  /utils            # Helpers (API response, error, cloudinary, etc.)
  /db               # Database connection logic
  app.js            # Express app setup
  index.js          # Entry point
.env.sample         # Example environment variables
/public             # Static files (uploads, etc.)
```

---

## ⚡ Getting Started

1. **Clone the repo**
    ```bash
    git clone https://github.com/Daksh700/Youtube-Backend.git
    ```

2. **Install dependencies**
    ```bash
    npm install
    ```

3. **Configure environment variables**

    Copy `.env.sample` to `.env` and fill in your values:
    ```
    cp .env.sample .env
    ```

4. **Start the server**
    ```bash
    npm run dev
    ```

---

## 🔑 API Endpoints

- `POST   /api/v1/users/register` – Register a new user (with avatar & cover image)
- `POST   /api/v1/users/login` – Login and receive JWT tokens
- `POST   /api/v1/users/logout` – Logout user
- `POST   /api/v1/users/refresh-token` – Refresh JWT tokens
- `POST   /api/v1/users/change-password` – Change user password
- `GET    /api/v1/users/current-user` – Get current user profile
- `PATCH  /api/v1/users/update-account` – Update user details
- `PATCH  /api/v1/users/avatar` – Update avatar
- `PATCH  /api/v1/users/cover-image` – Update cover image
- `GET    /api/v1/users/c/:username` – Get channel profile
- `GET    /api/v1/users/history` – Get watch history

> More endpoints for videos, comments, likes, playlists, etc. will be added similarly!

---

**Made with ❤️ for learning and building

