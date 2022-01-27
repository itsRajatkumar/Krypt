const express = require('express');
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const router = require('./routes')
const db = require('./DB/db')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

dotenv.config();

const port = process.env.PORTSERVER;

// connecting to the database
db()

// listening the server on port
app.listen(port, ()=>{
    console.log("running")
})