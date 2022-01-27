const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes')
const db = require('./db')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);



const port = process.env.PORT || 8080;

// connecting to the database
db()

// listening the server on port
app.listen(port, ()=>{
    console.log("running")
})