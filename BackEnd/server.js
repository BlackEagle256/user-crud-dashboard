const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRoute = require("./routes/usersRoute");

const app = express()
app.use(bodyParser.json());
app.use(cors());

app.use('/api/users', usersRoute);

app.listen(3000)