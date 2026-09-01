typeof "Hello"    // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof function(){} // "function"

// ⚠️ Historical JavaScript Quirks/Bugs:
typeof null       // "object" 
typeof [1, 2, 3]  // "object" (Arrays are specialized objects)
