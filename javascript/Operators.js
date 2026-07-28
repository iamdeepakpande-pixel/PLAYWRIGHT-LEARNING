/* 
operators

operands-  symbols


1. Arithmetic Operators

 +,-,*,/,%, ++, --
let sum = 10 + 5;      // 15
let product = 10 * 2;  // 20
let remainder = 10 % 3;// 1 (Modulo)

2. Strict Comparison Operators

Always prefer strict equality (=== and !==) over loose equality (== and !=) to prevent automatic type coercion bugs.
5 === "5"; // false (checks value AND data type)
5 == "5";  // true  (coerces string "5" to number 5 — avoid this)
*/

// let a1=10;
// let a2 = 3;

// console.log(a1 + a2); // 13
// console.log(a1 - a2); // 7
// console.log(a1 * a2); // 30
// console.log(a1 / a2); // 3.333...
// console.log(a1 % a2); // 1

// BODMAS -  Brackets, Order, Division, Multiplication, Addition, Subtraction

// operator priority
// BO(DMR)(AS) - here DMR - Division, Multiplication, Remainder whatever comes first from left to right, will be executed first.

// console.log(10+16*4/2-10);  // 32

// console.log(10+16%2*4/2-10);  // 0

// reminder operator -  %  -  gives the remainder of a division operation. It is also called modulo operator.
// odd even check -  if a number is divisible by 2, it is even. if a number is not divisible by 2, it is odd.
// to check if a number is even or odd, we can use the remainder operator. if the remainder is 0, it is even. if the remainder is 1, it is odd.

// math library -  Math is a built-in object that has properties and methods for mathematical constants and functions. It is not a function object.
// floor  function -  Math.floor() -  returns the value of a number rounded down to the nearest integer. It is a built-in method of the Math object.
// ceil function -  Math.ceil() -  returns the value of a number rounded up to the nearest integer. It is a built-in method of the Math object.
// round function -  Math.round() -  returns the value of a number rounded to the nearest integer. It is a built-in method of the Math object.

// find addition of two numbers in below ex
// 3+4 = 7

let a1 = 34;
let lastDigit = a1 % 10; // 4
let firstDigit = Math.floor(a1 / 10); // 3
let sumOfDigits = firstDigit + lastDigit; // 7
console.log(sumOfDigits); // 7
