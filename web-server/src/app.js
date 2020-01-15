const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

// console.log(__dirname);
// console.log(__filename);
// console.log(path.join(__dirname, '../public')); // /Users/jevgenijsbrencis/Desktop/Node-udemy/nodejs-udemy-nodejs-mead-io/web-server

// Define path for Express config
const publicDirectoryPath = path.join(__dirname, '../public');
const viewPath = path.join(__dirname, '../templates/views'); // by default directorty should be named "views" and path shouldn't be provided in this case
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars and views location
app.set('view engine', 'hbs'); // hbs like handlebars
app.set('views', viewPath);
hbs.registerPartials(partialsPath);

// to handle hbs changes - run : nodemon src/app.js -e js,hbs

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather',
    name: 'Jev'
  }); // renders views/index.hbs (index.hthl from static folder should be deleted)
});

app.get('/about', (req, res) =>
  res.render('about', {
    title: 'About',
    name: 'Bender'
  })
);

app.get('/help', (req, res) => {
  res.render('help', { helpText: 'Test message' });
});

app.get('/weather', (req, res) => {
  res.send({ location: 'Boston', forecast: "It's 30 degrees" });
});

const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
