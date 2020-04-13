// setTimeout(() => {
//   console.log('2 seconds are up');
// }, 2000);

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       longitude: 0,
//       latitude: 0
//     };

//     callback(data);
//   });
// };

// geocode('Riga', data => {
//   console.log(data);
// });

// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b);
//   }, 2000);
// };

// add(1, 4, sum => {
//   console.log(sum); // Should print: 5
// });

//=========================the same as above
// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b);
//   }, 2000);
// };

// const displaySum = value => {
//   console.log(value);
// };

// add(1, 4, sum => displaySum(sum));
const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback('This is my error', undefined);
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }
  console.log(result);
});
