# 📁 Full Stack File Upload System

This project is a full-stack application that allows users to upload, preview, download, and manage files. It consists of:

- ⚙️ **Backend Server** (Node.js + Express + MySQL)
- 🌐 **Frontend Client** (React.js with Material UI)

---

## 🚀 Getting Started

### 📦 Backend Setup

1. Navigate to the backend directory:

   ```
   bash
   cd backend
   ```

2. Install dependencies

   ```
   npm install
   ```

3. Create a .env file and configure your database:

    DB_HOST=localhost
    DB_USER=root
    DB_PASS=your_password
    DB_NAME=file_system
    PORT=3001

4. Start the backend server:

    ```
    npm run dev
    ```

Backend runs on: http://localhost:3001


### 🖥 Frontend Setup

1. Navigate to the frontend directory:

    ```
    cd client
    ```

2. Install dependencies:

    ```
    npm install
    ```

3. Start the frontend server:

    ```
    npm start
    ```

Frontend runs on: http://localhost:3000

### 🗃 Database Schema – file_system

The backend uses MySQL for storing file metadata.

```
CREATE TABLE files (
  id INT AUTO_INCREMENT PRIMARY KEY,
  original_name VARCHAR(255) NOT NULL,
  stored_name VARCHAR(255) NOT NULL,
  type VARCHAR(255),
  size INT,
  path TEXT,
  uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

📝 Actual file content is stored on disk (/uploads), while metadata is stored in the files table.


🔧 Features
Upload files (images, PDFs, videos, etc.)

Preview supported file types

Download files

File metadata stored in MySQL

Frontend styled using Material UI

Error handling & validations

🛠 Tech Stack
Frontend: React, MUI

Backend: Node.js, Express

Database: MySQL

File Upload: Multer

