// Right Triangle Pattern
// Problem Statement:

// Create Right Triangle based on user input

// Example 1:

// For input n = 5

// *
// * *
// * * *
// * * * *
// * * * * *

// Note: Use Scanner class to take input from user.

// 1. Using nested for loop

// function printRightTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += "* ";
//         }
//         console.log(row);
//     }
// }

// // Example usage:
// const n = 5;
// printRightTriangle(n);

// 2. Using repeat()

// function printRightTriangle(n) {
//     for (let i = 1; i <= n; i++) {
//         console.log("* ".repeat(i));
//     }
// }
// // Example usage:
// const n = 5;
// printRightTriangle(n);

// numbers

// function numberPattern(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) {
//             row += i + " ";
//         }
//         console.log(row.trim());
//     }
// }

// numberPattern(5);




// 1. Right Triangle - Star Pattern (*)
function printStarPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row.trim());
    }
}

// 2. Right Triangle - Number Pattern (1, 2 2, 3 3 3...)
function printNumberPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += i + " ";
        }
        console.log(row.trim());
    }
}

// 3. Right Triangle - Continuous Alphabet Pattern (A, B C, D E F...)
function printAlphabetPattern(n) {
    let charCode = 65; // ASCII code for 'A'
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 1; j <= i; j++) {
            row += String.fromCharCode(charCode) + " ";
            charCode++;
        }
        console.log(row.trim());
    }
}

// 4. Right Triangle - Binary Alternate Pattern (0, 0 1, 0 1 0...)
function printBinaryPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = "";
        for (let j = 0; j < i; j++) {
            row += (j % 2) + " ";
        }
        console.log(row.trim());
    }
}

// Example execution for n = 5
console.log("--- Star Pattern ---");
printStarPattern(5);

console.log("\n--- Number Pattern ---");
printNumberPattern(5);

console.log("\n--- Alphabet Pattern ---");
printAlphabetPattern(5);

console.log("\n--- Binary Pattern ---");
printBinaryPattern(5);

