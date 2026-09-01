const name = "Alex";
const items = 3;
const price = 15;

// Dynamic expression calculation inside the string
const receipt = `Hello ${name}, 
Your total is $${items * price}.`;

console.log(receipt);
// Output:
// Hello Alex,
// Your total is $45.
