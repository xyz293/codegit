const { add } = require('./ulits/index.js');
console.log(add(1, 2));
const input = document.querySelector('input');
const button = document.querySelector('button');
button.addEventListener('click', () => {
 if(input.value) {
  console.log(input.value);
 }
});
import './public/index.css'
