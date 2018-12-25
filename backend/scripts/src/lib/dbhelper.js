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
        throw err
    }
    console.log('Connected to database');
});
global.db = db;