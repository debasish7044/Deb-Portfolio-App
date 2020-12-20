const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

const port = process.env.PORT || 3000;

//define path for express config
const publicPathDirctory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

//setup handlebar engine and view location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//Setup Static directory to serve
app.use(express.static(publicPathDirctory));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Deb App',
    name: 'Debasish Das',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Debasish Das',
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact',
    helpNumber: '400020',
    name: 'Debasish Das',
  });
});

app.get('/contact/*', (req, res) => {
  res.render('404', {
    title: 'Deb App',
    message: '404 Not Found contact article',
    name: 'Debasish Das',
  });
});

app.get('*', (req, res) => {
  res.render('404', {
    title: 'Deb App',
    message: '404 Not Found',
    name: 'Debasish Das',
  });
});

app.listen(port, () => {
  console.log(`app is running on ${port} 3000`);
});
