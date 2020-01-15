const request = require('request');
//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (latitude, longitude, callback) => {
  // const url =
  //   'https://api.darksky.net/forecast/f9d2aeb6410bcbf62ba43f9146ed7e96/37.8267,-122.4233?units=si';

  const url = `https://api.darksky.net/forecast/f9d2aeb6410bcbf62ba43f9146ed7e96/${encodeURIComponent(
    latitude
  )},${encodeURIComponent(longitude)}?units=si`;

  request({ url, json: true }, (error, response) => {
    const temperature = response.body.currently.temperature;
    const precipProbability = response.body.currently.precipProbability;

    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (response.body.error) {
      callback('Unable to find location.', undefined);
    } else {
      callback(
        undefined,
        `${response.body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain`
      );
    }
  });
};

module.exports = forecast;
