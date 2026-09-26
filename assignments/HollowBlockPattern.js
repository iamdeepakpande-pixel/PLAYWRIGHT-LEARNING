// Hollow Block-Pattern
// Problem Statement:

// Create Block Pattern based on user input

// Example 1:

// For input n = 5

// * * * * *
// *       *
// *       *
// *       *
// * * * * * 


// Note: Use Scanner class to take input from user.

// Other Patterns:

// 1 2 3 4 5
// 1       5
// 1       5
// 1       5
// 1 2 3 4 5


// 1 1 1 1 1
// 2       2
// 3       3
// 4       4
// 5 5 5 5 5


// A B C D E
// F       G
// H       I 
// J       K 
// L M N O P


let n = 5;

for (let row = 1; row <= n; row++) {
    let line = "";
    for (let column = 1; column <= n; column++) {
        if (row === 1 || row === n) {
            line += "* ";
        } else if (column === 1 || column === n) {
            line += "* ";
        } else {
            line += "  ";
        }
    }
    console.log(line);
}
// output:

// * * * * * 
// *       * 
// *       * 
// *       * 
// * * * * * 
