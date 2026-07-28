// TDZ is a behavior in JavaScript where variables declared with let and const are not accessible before their declaration is evaluated.
// Accessing them before declaration causes a ReferenceError.

// Example with let
try {
  console.log(x);
  let x;
} catch (error) {
  console.error("let TDZ:", error.message);
}

// Example with const
try {
  console.log(y);
  const y;
} catch (error) {
  console.error("const TDZ:", error.message);
}

// Valid access after declaration
let z = 30;
console.log("z after declaration:", z);
