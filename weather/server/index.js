const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const wc = require('./controllers/weather_controller');


app.use(express.static(__dirname + '/../public/build'))

app.use(bodyParser.json());


const cardsBaseUrl = '/api/places';
app.get(cardsBaseUrl, wc.read)
app.post(cardsBaseUrl, wc.create)

const port = 3001;
app.listen( port, () => { console.log(`Server listening on port ${port}`)});