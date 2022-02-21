const express = require('express');
const items = require('./database');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('pages/index', { items });
});

app.get('/about', (request, response) => {
  response.render('pages/about');
});

app.listen(8080, console.log('Runing...'));