# User Management System

## Project Overview

A full-stack user management system with admin panel that allows performing CRUD operations (Create, Read, Update, Delete) on user data.  
The system consists of:
- A user registration form
- An admin dashboard to manage users
- RESTful API backend

---

## Features

### Frontend
- **User Registration:** Clean form with validation
- **Admin Dashboard:** View all registered users
- **Edit Users:** Modify user information
- **Delete Users:** Remove users with confirmation
- **Responsive Design:** Works on mobile and desktop
- **Modern UI:** Gradient backgrounds, smooth animations

### Backend
- **REST API:** Node.js + Express
- **Database:** MySQL
- **CRUD Operations:** Create, Read, Update, Delete endpoints

---

## Technologies Used

### Frontend
- HTML5, CSS3, JavaScript
- Pure CSS (No frameworks)
- Font Awesome icons
- Google Fonts (Poppins, Lato)

### Backend
- Node.js
- Express.js
- MySQL
- CORS middleware
- Body-parser

---

## Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MySQL server
- Git

### Backend Setup
1. Clone the repository:
```bash
git clone https://github.com/BlackEagle256/user-management-system.git
cd user-management-system
```

Install dependencies:

```bash
npm install
```

Set up MySQL database:

```sql
CREATE DATABASE usersformdb;
USE usersformdb;
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    username VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    CREATED_AT VARCHAR(255) NOT NULL
);
```

Configure database connection in db/userDB.js:

```javascript
const mysql = require('mysql');

const userDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',          // Your MySQL username
    password: '',          // Your MySQL password
    database: 'usersformdb'
});
```
Start the server:

```bash
node server.js
```

Frontend Setup
Open the frontend folder in your browser or use a local server

For admin panel, open admin-panel.html

For registration form, open index.html

Project Structure
user-management-system/
├── frontend/                  # Frontend files
│   ├── index.html             # Registration form
│   ├── admin-panel.html       # Admin dashboard
│   ├── style.css              # Registration form styles
│   ├── stylePanel.css         # Admin panel styles
│   ├── app.js                 # Registration form logic
│   ├── users.js               # Admin panel logic
│   └── image/                 # Images and icons
├── backend/
│   ├── server.js              # Main server file
│   ├── db/
│   │   └── userDB.js          # Database connection
│   └── routes/
│       └── usersRoute.js      # API routes
└── README.md                  # This file
API Endpoints
Method	Endpoint	Description
POST	/api/users/new-user	Create a new user
GET	/api/users/all	Get all users
DELETE	/api/users/remove/:id	Delete a user by ID
PATCH	/api/users/edit/:id	Update a user by ID
GET	/api/users/select/:id	Get a single user by ID
How to Use
Registration Form

Fill in first name, last name, username and password

Click "Register" to create a new user

Admin Dashboard

View all registered users

Click "Edit" to modify user information

Click "Delete" to remove a user (with confirmation)

Changes are reflected immediately

Future Improvements
Add form validation

Implement user authentication

Add password hashing

Implement search functionality

Add pagination for user list

Implement role-based access control

Add unit tests

Security Considerations
⚠️ Important: This is a demo project and has some security issues that should be addressed before production use:

Passwords are stored in plain text (should be hashed)

No input sanitization (SQL injection risk)

No authentication for admin panel

No rate limiting on API endpoints

Troubleshooting
Database connection issues: Verify MySQL credentials in userDB.js

CORS errors: Ensure backend server is running and CORS is enabled

API not responding: Check server logs for errors

Form not submitting: Verify all fields are filled

License
MIT License

Contact
For questions or suggestions, contact:

Email: mohammadhoseindadgostr@gmail.com

GitHub: github.com/BlackEagle256
