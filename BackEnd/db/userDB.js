const mysql = require('mysql');

const userDB = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'usersformdb'
})

module.exports = userDB; 