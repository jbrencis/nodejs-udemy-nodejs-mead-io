const request = require('request');

const url =
  'https://api.darksky.net/forecast/f9d2aeb6410bcbf62ba43f9146ed7e96/37.8267,-122.4233?units=si';

request({ url, json: true }, (error, response) => {
  // const data = JSON.parse(response.body);
  // console.log(response.body.currently);

  const temperature = response.body.currently.temperature;
  const precipProbability = response.body.currently.precipProbability;
  console.log(
    `${response.body.daily.data[0].summary} It is currently ${temperature} degrees out. There is a ${precipProbability}% chance of rain`
  );
});
