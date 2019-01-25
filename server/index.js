const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const massive = require('massive');
const ctrl = require('./controller')

const app = express();
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
.then(db => app.set('db', db))
.catch(err => console.log('Error!', err))

app.get('/api/inventory', ctrl.getInventory)

app.post(`/api/product`, ctrl.createInventory)

app.put(`/api/product/:id`, ctrl.updateInventory)

app.delete('/api/product/:id', ctrl.deleteInventory)

const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Simulating on port ${port}`)
})