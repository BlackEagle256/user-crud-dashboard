const express = require('express');
const userDB = require('../db/userDB')

const usersRoute = express.Router();

usersRoute.post('/new-user', (req, res) => {
    console.log("Connected");
    const body = req.body;
    let date = new Date().toLocaleDateString('fa-IR')
    let newUser =
        `INSERT INTO users VALUES (NULL, "${body.firstName}", "${body.lastName}", "${body.username}", "${body.password}", "${date}")`
    userDB.query(newUser, (error, result) => {
        if (error) {
            console.log("error in server", error);
            res.send(null);
        }
        else {
            console.log("User Created", result);
            res.send(true)
        }
    })

})

usersRoute.get('/all', (req, res) => {
    console.log("Connected");
    const body = req.body;
    let getAllUsersQuery = `SELECT * FROM users;`
    userDB.query(getAllUsersQuery, (error, result) => {
        if (error) {
            console.log("error in server", error);
            res.send(null);
        }
        else {
            console.log("All Users=> ", result);
            res.send(JSON.stringify(result))
        }
    })
})

usersRoute.delete('/remove/:userId', (req, res) => {
    const userId = req.params.userId;
    console.log("1 User Deleted");
    let deleteUserQuery = `DELETE FROM users WHERE id=${userId}`
    userDB.query(deleteUserQuery, (error, result) => {
        if (error) {
            console.log("error in server", error);
            res.send(null);
        }
        else {
            console.log("All Users=> ", result);
            res.send(JSON.stringify(result))
        }
    })
})

usersRoute.patch('/edit/:userId', (req, res) => {
    const userId = req.params.userId;
    const body = req.body;
    let UpdateUserQuery = `UPDATE users SET firstname="${body.firstName}", lastname="${body.lastName}", username="${body.username}", password="${body.password}" WHERE id=${userId}`
    userDB.query(UpdateUserQuery, (error, result) => {
        if (error) {
            console.log("error in server", error);
            res.send(null);
        }
        else {
            console.log("1 User Edited");
            res.send(JSON.stringify(result))
        }
    })
})

usersRoute.get('/select/:userId', (req, res) => {
    const userId = req.params.userId;
    let getSelectedQuery = `SELECT * FROM users WHERE id = ${userId} ;`;

    userDB.query(getSelectedQuery, (error, result) => {
        if (error) {
            console.log("error in server", error);
            res.send(null);
        }
        else {
            console.log("All Users=> ", result);
            res.send(JSON.stringify(result))
        }
    })
})

module.exports = usersRoute;