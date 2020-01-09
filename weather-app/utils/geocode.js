const request = require('request');

const geocode = (address, callback) => {
  // encodeURIComponent ==> '?' becomes '%3F'

  const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiamJyZW5jaXMiLCJhIjoiY2s1MTZ1d3c0MDloMzNrbXJqend2NzJpNSJ9.kWJx6MO5QWxxxrmhCpGGvw&limit=1`;

  request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service', undefined);
    } else if (response.body.features.length === 0) {
      callback('Unable to find location.', undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
