const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const massive = require('massive');

const app = express();
app.use(bodyParser.json())

massive(process.env.CONNECTION_STRING)
.then(db => app.set('db', db))
.catch(err => console.log('Error!', err))


app.listen(4000, () => {
    console.log(`Simulating on port 4000`)
})