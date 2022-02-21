const express = require('express');
const { index, about } = require('./database');

const app = express();

app.set('view engine', 'ejs');
app.use('/public', express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  response.render('pages/index', { index });
});

app.get('/about', (request, response) => {
  response.render('pages/about', { about });
});

app.listen(8080, console.log('Runing...'));