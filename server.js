const express = require('express');
const items = require('./database');

const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  const detail = 'Uma linguagem de modelagem para criação de HTML com JS.';

  response.render('pages/index', { items, detail });
});

app.get('/about', (request, response) => {
  response.render('pages/about');
});

app.listen(8080, console.log('Runing...'));