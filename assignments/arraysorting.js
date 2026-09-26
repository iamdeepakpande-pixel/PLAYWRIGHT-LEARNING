// Array Sorting
// Agenda



// Write a program to sort a list of numbers using a sorting algorithm.

// The program should:

// Accept input from user
// Sort numbers in ascending order and descending order
// Display sorted output




// Example Input

// Enter numbers:
// 5 2 9 1 3


// Example Output

// Ascending Sorted Array:
// 1 2 3 5 9

// Descending Sorted Array:
// 9 5 3 2 1

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter numbers: ', (input) => {
//     const trimmedInput = input.trim();

//     // Check for empty input
//     if (trimmedInput === "") {
//         console.log("Invalid Input");
//         rl.close();
//         return;
//     }

//     const parts = trimmedInput.split(/\s+/);
//     const numbers = [];

//     // Parse and validate each number
//     for (let part of parts) {
//         const num = Number(part);
//         if (isNaN(num)) {
//             console.log("Invalid Input");
//             rl.close();
//             return;
//         }
//         numbers.push(num);
//     }

//     // Sort arrays
//     const ascending = [...numbers].sort((a, b) => a - b);
//     const descending = [...numbers].sort((a, b) => b - a);

//     // Display output
//     console.log("Ascending Sorted Array: " + ascending.join(" "));
//     console.log("Descending Sorted Array: " + descending.join(" "));

//     rl.close();
// });


let arr = [3, 10, 2, 9, 15, 8, 4];
let n = arr.length;

for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

console.log("Sorted Array: " + arr);