require('dotenv').config();
const express = require('express');
const controller = require('./controller');
const axios = require('axios');
const bodyParser = require('body-parser');
const massive = require('massive');

const {PORT, CONNECTION_STRING } = process.env

const app = express ();
app.use(express.json());

massive(CONNECTION_STRING)
    .then((dbInstance) => {
        console.log('db is connected')
        app.set('db', dbInstance)
    })
    .catch((err) => {
        console.log(`db not working ${err}`)
    })

app.listen(PORT, () => {
    console.log(`Houston we have liftoff on ${PORT}`)
})

