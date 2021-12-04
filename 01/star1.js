const input = require('./input.js');

const inputStr = input.data;
const inputArr = inputStr.split('\n');

const fuelArr = inputArr.map(item => {
    return Math.floor(parseInt(item / 3)) - 2;
});

let total = 0;

fuelArr.forEach(item => {
    total = total + item;
});

console.log(total);