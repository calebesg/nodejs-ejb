const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/about', (request, response) => {
  response.render('about');
});

app.listen(8080, console.log('Runing...'));