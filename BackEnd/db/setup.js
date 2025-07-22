const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
});

connection.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL server.');

    connection.query('CREATE DATABASE IF NOT EXISTS usersformdb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;', (err) => {
        if (err) {
            console.error('Error creating database:', err);
            return;
        }
        console.log('Database created or already exists.');

        connection.changeUser({ database: 'usersformdb' }, (err) => {
            if (err) {
                console.error('Error changing database:', err);
                return;
            }

            const createTableQuery = `
                CREATE TABLE IF NOT EXISTS users (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    firstname VARCHAR(255) NOT NULL,
                    lastname VARCHAR(255) NOT NULL,
                    username VARCHAR(255) NOT NULL UNIQUE,
                    password VARCHAR(255) NOT NULL,
                    created_at DATE NOT NULL
                );
            `;

            connection.query(createTableQuery, (err) => {
                if (err) {
                    console.error('Error creating users table:', err);
                } else {
                    console.log('Users table created or already exists.');
                }
                connection.end();
            });
        });
    });
});
