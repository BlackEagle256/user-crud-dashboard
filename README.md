# 👥 User Management System

A full-stack user management application with an admin dashboard that enables complete CRUD (Create, Read, Update, Delete) operations on user data.

---

## 🔍 Features

### 🌐 Frontend
- **User Registration Form:** Clean and responsive with basic validation
- **Admin Dashboard:** View and manage all registered users
- **Edit Users:** Modify user data
- **Delete Users:** Remove users with confirmation
- **Responsive Design:** Works well on mobile and desktop
- **Modern UI:** Gradient backgrounds and smooth animations

### ⚙️ Backend
- **RESTful API:** Built using Node.js and Express
- **Database:** MySQL
- **Full CRUD Support:** Create, read, update, and delete users

---

## 🛠️ Tech Stack

### Frontend
- HTML5, CSS3, JavaScript (Vanilla)
- Pure CSS (no frameworks)
- Font Awesome icons
- Google Fonts (Poppins, Lato)

### Backend
- Node.js
- Express.js
- MySQL
- Body-parser
- CORS middleware

---

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14+)
- MySQL Server
- Git

---

### 1. Backend Setup

```bash
git clone https://github.com/BlackEagle256/user-management-system.git
cd user-management-system
node db/setup.js
npm install
```

#### 🛢️ MySQL Database Setup

```sql
CREATE DATABASE usersformdb;
USE usersformdb;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    CREATED_AT VARCHAR(20) NOT NULL
);
```

#### ⚙️ Configure DB Connection

Edit the `backend/db/userDB.js` file:

```js
const mysql = require('mysql');

const userDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',           // Your MySQL username
    password: '',           // Your MySQL password
    database: 'usersformdb'
});
```

#### ▶️ Start Server

```bash
node server.js
```

---

### 2. Frontend Setup

Simply open the `frontend` folder in your browser:

- Open `index.html` for the **user registration form**
- Open `admin-panel.html` for the **admin dashboard**

---

## 📁 Project Structure

```
user-management-system/
├── frontend/
│   ├── index.html             # User registration form
│   ├── admin-panel.html       # Admin dashboard
│   ├── style.css              # Styles for registration form
│   ├── stylePanel.css         # Styles for admin panel
│   ├── app.js                 # Registration form logic
│   ├── users.js               # Admin dashboard logic
│   └── image/                 # Icons and images
├── backend/
│   ├── server.js              # Main server file
│   ├── db/
│   │   └── userDB.js          # Database connection
│   └── routes/
│       └── usersRoute.js      # API routes
└── README.md
```

---

## 📡 API Endpoints

| Method | Endpoint                  | Description               |
|--------|---------------------------|---------------------------|
| POST   | `/api/users/new-user`     | Create a new user         |
| GET    | `/api/users/all`          | Get all users             |
| GET    | `/api/users/select/:id`   | Get a single user by ID   |
| PATCH  | `/api/users/edit/:id`     | Update a user by ID       |
| DELETE | `/api/users/remove/:id`   | Delete a user by ID       |

---

## 🧪 How to Use

### Registration Form
- Fill in first name, last name, username, and password
- Click **Register** to create a new user

### Admin Dashboard
- View all registered users
- Click **Edit** to modify user info
- Click **Delete** to remove a user (with confirmation)

---

## 🔮 Future Improvements

- Advanced form validation
- User authentication (Login & JWT)
- Password hashing with bcrypt
- User search functionality
- Pagination for large user lists
- Role-based access control
- Unit and integration tests

---

## 🔐 Security Considerations

> ⚠️ **Important:** This is a demo project and should not be used in production without addressing security concerns:

- Passwords are stored in **plain text** (should be hashed)
- Inputs are not sanitized (risk of SQL injection)
- No authentication or login system for admin access
- No rate limiting on API endpoints

---

## 🧩 Troubleshooting

| Issue                        | Solution                                           |
|-----------------------------|----------------------------------------------------|
| Database connection error   | Check your MySQL credentials in `userDB.js`       |
| CORS errors                 | Ensure the backend server is running properly     |
| API not responding          | Check terminal logs for backend errors            |
| Form not submitting         | Make sure all input fields are filled             |

---

## 📄 License

This project is licensed under the **MIT License**. Feel free to use and modify it.

---

## 📬 Contact

**Email:** mohammadhoseindadgostr@gmail.com  
**GitHub:** [BlackEagle256](https://github.com/BlackEagle256)
