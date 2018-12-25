const express = require('express')
const app = express()
const startDB = require('./lib/dbhelper')
const query = require('./lib/dbquery')

startDB

let q = "SELECT * FROM `welcome_message`;";

app.get('/', (req, res) => {
    query(q).then(function (message) {
        item = message[Math.floor(Math.random() * message.length)]
        res.send(item.message)
    })
})

app.listen(3000, '0.0.0.0',() => console.log('Example app listening on port 3000!'))
