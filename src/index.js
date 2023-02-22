const express = require('express')
const app = express()
require('./db/conn')
const Router = require('./router/data')
const bodyParser = require("body-parser");
const port = 9000
app.use(express.urlencoded());

const { json } = require('express');
// console.log(JSON.stringify(data))

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use('/api',Router)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// your code goes here


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;   