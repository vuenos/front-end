const express = require('express');
const app = express();
const port = 3000;

const server = app.listen(port, () => {
  console.log('Start server: localhost:3000');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
  //res.send('Hello World!');
  res.render('index.html');
});

app.get('/about', (req, res) => {
  res.send('About page')
});