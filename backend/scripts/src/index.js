const express = require('express')
const app = express()


const mysql = require('mysql');

// create connection to database
// the mysql.createConnection function takes in a configuration object which contains host, user, password and the database name.
const db = mysql.createConnection ({
    host: 'db',
    user: 'foo',
    password: 'bar',
    database: 'weddingapp'
});

// connect to database
db.connect((err) => {
    if (err) {
        console.log("=!=!=!=!=!=!=!=!=!=!!=!=!=!=", err)
    }
    console.log('Connected to database');
});
global.db = db;

let query = "SELECT * FROM `welcome_message`;"; // query database to get all the players

let message;

// execute query
db.query(query, (err, result) => {
    if (err) {
        console.log("Error with da db", err);
    }
    message = result;
});


app.get('/', (req, res) => res.send(message[0].message));

app.listen(3000, '0.0.0.0',() => console.log('Example app listening on port 3000!'))
