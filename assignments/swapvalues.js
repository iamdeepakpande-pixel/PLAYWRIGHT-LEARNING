// Swap Values - two numbers  - 

//  using destructuring assignment: using  Template Literals (backticks `) along with String Interpolation (${}).
 
// Write code to swap 2 number variables. 

// Example: 

// a = 10 and b = 7
// output should be a=7 and b=10

//1.  using backticks and string interpolation

// let a = 10;
// let b = 7;

// [a, b] = [b, a];

// console.log(`a=${a} and b=${b}`); // output: a=7 and b=10

//2. Swapping value using Third Variable

// let i = 10;
// let j = 7;
// let k = i;
// i = j;
// j = k;
// console.log("i => " + i);
// console.log("j => " + j);

//3. Swapping value without Third Variable (plus and subtract method)

// var i = 10;
// var j = 7;

// i = i + j;
// j = i - j;
// i = i - j;

// console.log("i => " + i);
// console.log("j => " + j);

//4. Swapping value without Third Variable (multiply and devide method)

// var i = 10;
// var j = 7;

// i = i * j;
// j = i / j;
// i = i / j;

// console.log("i =>" + i);
// console.log("j =>" + j);

//5. Swapping value without Third Variable (XOR operator)

var i = 10;
var j = 7;

i = i ^ j;
j = i ^ j;
i = i ^ j;

console.log("i =>" + i);
console.log("j =>" + j);
