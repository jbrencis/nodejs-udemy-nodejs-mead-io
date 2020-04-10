console.log('client side js');

// fetch('http://puzzle.mead.io/puzzle').then(response => {
//   response.json().then(data => console.log(data));
// });

// fetch('http://localhost:3000/weather?address=boston').then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//       console.log(data.forecast);
//     }
//   });
// });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');

const firstMessage = document.querySelector('#message-1');
const secondMessage = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const location = search.value;

  firstMessage.textContent = 'loading...';
  secondMessage.textContent = '';

  fetch(`http://localhost:3000/weather?address=${location}`).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          firstMessage.textContent = data.error;
        } else {
          firstMessage.textContent = data.location;
          secondMessage.textContent = data.forecast;
        }
      });
    }
  );
});
