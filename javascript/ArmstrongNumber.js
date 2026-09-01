// Armstrong number

// What is Armstrong-number

// Armstrong number is a number that is equal to the sum of cubes of its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong numbers. 


// Agenda

// Write a function/method that returns a boolean indicating whether the given number is an Armstrong number.


// boolean isArmstrong(int inputNumber){
//   // Write Your Code
//   return true/false;
// }




// Example-1

// 153 = ( 1 * 1 * 1 ) + ( 5 * 5 * 5 ) + ( 3 * 3 * 3 ) = 153


// Example-2

// 371 = (3 * 3  * 3) + ( 7 * 7 * 7 ) + ( 1 * 1  * 1) = 371


// Test-Cases



// INPUT

// OUTPUT

// 371

// true

// 407

// true

// 150

// false

function isArmstrong(inputNumber) {
    if (inputNumber < 0) {
        return false;
    }

    let originalNumber = inputNumber;
    let sum = 0;

    while (inputNumber > 0) {
        let digit = inputNumber % 10;
        sum += digit ** 3;
        inputNumber = Math.floor(inputNumber / 10);
    }

    return sum === originalNumber;
}

// Test Cases
console.log(isArmstrong(371)); // true
console.log(isArmstrong(407)); // true
console.log(isArmstrong(150)); // false
console.log(isArmstrong(153)); // true