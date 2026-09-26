// Agenda 

// Find the sum of the digits for a given number. 


// Example-1

// if given number is 15, then output should be 1+5 = 6


// Example-2

// If given number is 135, then output should be 1+3+5 = 9

// Sum of 2 Digits

//1. Using Modulus and Division

let inputNumber = 15;
let lastDigit = inputNumber % 10;
let division = inputNumber / 10;
let firstDigit = Math.floor(division);
let sum = firstDigit + lastDigit;
console.log(sum);
// 0/p = 6

// 2. Using While Loop

// let inputNumber = 135;
// let temp = inputNumber;
// let sum = 0;
// while (temp > 0) {
//     sum += temp % 10;
//     temp = Math.floor(temp / 10);
// }
// console.log(sum);

//3. Using String Conversion and Array Methods

// let inputNumber = 135;
// let sum = String(inputNumber)
//     .split('')
//     .reduce((acc, digit) => acc + Number(digit), 0);
// console.log(sum);

