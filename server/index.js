const express = require('express');
const controller = require('./controller');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();

const {PORT, CONNECTION_STRING } = process.env


const app = express ();
app.use(express.json());
app.use(bodyParser.json());

massive(CONNECTION_STRING)
    .then((dbInstance) => {
        console.log('db is connected')
        app.set('db', dbInstance)
    })
    .catch((err) => {
        console.log(`db not working ${err}`)
    });


app.get('/api/product', controller.getAll)
app.post('/api/product', controller.create)
app.delete('/api/product/:id', controller.delete)
app.put('/api/product/:id', controller.update)
app.get('/api/product/:id', controller.getOne)


app.listen(PORT, () => {
    console.log(`Houston we have liftoff on ${PORT}`)
});

