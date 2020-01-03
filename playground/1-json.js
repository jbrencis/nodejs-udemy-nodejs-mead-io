const fs = require('fs');

// const book = {
//   title: 'Title',
//   author: 'Author'
// };

// const bookJSON = JSON.stringify(book); // creates from JSON from object
// console.log(bookJSON); // {"title":"Title","author":"Author"}

// const parsedData = JSON.parse(bookJSON); // creates an object from JSON
// console.log(parsedData); // { title: 'Title', author: 'Author' }

// ====================================
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);
// ====================================

// const readBuffer = fs.readFileSync('1-json.json'); // <Buffer 7b 22 74 69 74 6c 65 22 3a 22 54 69 74 6c 65 22 2c 22 61 75 74 68 6f 72 22 3a 22 41 75 74 68 6f 72 22 7d>
// const dataJSON = readBuffer.toString(); // {"title":"Title","author":"Author"}
// const data = JSON.parse(dataJSON); // { title: 'Title', author: 'Author' }

// ====================================

const readBuffer = fs.readFileSync('1-json.json');
const JSONdata = readBuffer.toString();
const user = JSON.parse(JSONdata);

user.name = 'Jev';
user.age = 36;

const userJSON = JSON.stringify(user);
fs.writeFileSync('1-json.json', userJSON);
