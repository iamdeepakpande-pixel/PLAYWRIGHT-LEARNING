// Swap Values - two numbers  - 

//  using destructuring assignment: using  Template Literals (backticks `) along with String Interpolation (${}).
 
// Write code to swap 2 number variables. 

// Example: 

// a = 10 and b = 7
// output should be a=7 and b=10


let a = 10;
let b = 7;

[a, b] = [b, a];

console.log(`a=${a} and b=${b}`); // output: a=7 and b=10
