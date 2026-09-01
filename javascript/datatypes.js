//  datatypes
// 1. Primitive data types: number, string, boolean, null, undefined, symbol, bigint
// 2. Non-primitive data types: object, array, function
// 3. typeof operator: used to check the data type of a variable

/* 
// Primitives
let name = "Alex";         // String
let age = 30;              // Number
let isActive = true;       // Boolean
let emptyValue = null;     // Null (intentional absence of value)
let notDefined;            // Undefined (variable declared but not assigned)

// Complex Types
let colors = ["red", "green", "blue"]; // Array
let user = { name: "Alex", age: 30 };  // Object
*/
// number datatype

// let a = 10;
// console.log(typeof a); // number
// console.log(a); // 10

// let a = 10.45;
// console.log(typeof a); // number
// console.log(a); // 10.45

// let a = (10/3).toFixed(4);
// console.log(typeof a); // string
// console.log(a); // "3.33"

// // // number datatype- 3 ways to declare a number

// literal :

// let a = 10;
// console.log(typeof a); // number
// console.log(a); // 10

// constructor:

// let a = new Number("10px");
// console.log(typeof a); // object
// console.log(a); // Number { 10 }

// parseFloat:

// let a=parseFloat("px10.2px");
// console.log(typeof a); // number
// console.log(a); // NaN  (NOT A NUMBER) because the string cannot be converted to a number

// // MAXIMUM_SAFE_INTEGER: 9007199254740991

// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER - 1); // 9007199254740990
// console.log(Number.MAX_SAFE_INTEGER -2);

// // MINIMUM_SAFE_INTEGER: -9007199254740991

// console.log(Number.MIN_SAFE_INTEGER);
// console.log(Number.MIN_SAFE_INTEGER - 1); //
// console.log(Number.MIN_SAFE_INTEGER -2);

// BIGINT: 9007199254740991n

// let a = 9007199254740991n;
// console.log(typeof a); // bigint
// console.log(a); // 9007199254740991n

// let a = 900719925474099134567908976249621948024890127834723n;
// a=a+1n;
// console.log(a); // 900719925474099134567908976249621948024890127834724n

// or

// let b = BigInt("90071992547409913456790897");
// console.log(b);  // 90071992547409913456790897n

// note-  The "typeof" Bug: Running typeof null returns "object". This is a famous, historical bug in JavaScript that was never fixed to avoid breaking older websites

// let searchResult = null; // Deliberately set to signify "no data found"
// console.log(typeof null); // "object" (Bug alert!)
