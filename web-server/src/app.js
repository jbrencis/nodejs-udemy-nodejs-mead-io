const express = require('express');
const path = require('path');
const hbs = require('hbs');

const forecast = require('./utils/forecast');
const geocode = require('./utils/geocode');

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
  res.render('help', { helpText: 'Test message', title: 'Help', name: 'Jev' });
});

//http://localhost:3000/weather?address=boston
app.get('/weather', (req, res) => {
  if (!req.query.address) {
    return res.send({ error: 'You must provide an address' });
  }
  geocode(
    req.query.address,
    (error, { latitude, longitude, location } = {}) => {
      if (error) {
        return res.send({ error });
      }
      forecast(latitude, longitude, (error, forecastData) => {
        if (error) {
          return res.send({ error });
        }
        res.send({
          forecast: forecastData,
          location,
          adress: req.query.address
        });
      });
    }
  );
});

app.get('/products', (req, res) => {
  if (!req.query.search) {
    // if no 'return' before 'res.send' an error will occur because 2 responses will be sent
    // return required to stop the function
    return res.send({ erorr: 'You must provide a term' });
  }
  console.log(req.query.search); //http://localhost:3000/products?search=games

  res.send({ products: [] });
});

// 404 page
app.get('/help/*', (req, res) => {
  res.render('404', {
    title: '404',
    name: 'Jev',
    errorMessage: 'Help article not found'
  });
});

// 404 page
app.get('*', (req, res) =>
  res.render('404', {
    title: '404',
    name: 'Jev',
    errorMessage: 'Page not found'
  })
);
const port = 3000;

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
