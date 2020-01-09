const request = require('request');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

// //DarkSky API
// const urlLA =
//   'https://api.darksky.net/forecast/f9d2aeb6410bcbf62ba43f9146ed7e96/37.8267,-122.4233?units=si';

// const urlRiga =
//   'https://api.darksky.net/forecast/f9d2aeb6410bcbf62ba43f9146ed7e96/56.91024414400553,24.28335726102364?units=si';

// request({ url: urlLA, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service');
//   } else if (response.body.error) {
//     console.log('Unable to find location');
//   } else {
//     const temperature = response.body.currently.temperature;
//     const precipProbability = response.body.currently.precipProbability;
//     console.log(
//       `${response.body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain`
//     );
//   }
// });

// // Mapbox API
// const geocodeURL =
//   'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiamJyZW5jaXMiLCJhIjoiY2s1MTZ1d3c0MDloMzNrbXJqend2NzJpNSJ9.kWJx6MO5QWxxxrmhCpGGvw&limit=1';

// request({ url: geocodeURL, json: true }, (error, response) => {
//   if (error) {
//     console.log('Unable to connect to weather service');
//   } else if (response.body.features.length === 0) {
//     console.log('Unable to find location');
//   } else {
//     const latitude = response.body.features[0].center[1];
//     const longitude = response.body.features[0].center[0];

//     console.log(`Latitude: ${latitude}, longitude: ${longitude}`);
//   }
// });

const location = process.argv[2];

if (!location) {
  console.log('Please provide location');
} else {
  // callback chaining
  geocode(location, (error, data) => {
    if (error) {
      return console.log(error);
    }
    if (geocode) {
      forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
          return console.log(error);
        }
        console.log(data.location);
        console.log(forecastData);
      });
    }
  });
}

// forecast(-75.7088, 44.1545, (error, data) => {
//   console.log('Error', error);
//   console.log('Data', data);
// });
