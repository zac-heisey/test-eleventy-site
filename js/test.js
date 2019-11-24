// Test env variables
require('dotenv').config();

console.log('Set in .env file: ' + process.env.TEST_VAR_1);
console.log('Set in Netlify UI: ' + process.env.TEST_VAR_2);

const mainH2 = document.querySelector('#main-content > h2');

fetch(process.env.API_URL).then((response) => {
  return response.json();
}).then((data) => {
  mainH2.innerText = data[3].title;
}).catch((err) => {
  console.warn('Something went wrong :(', err);
});
