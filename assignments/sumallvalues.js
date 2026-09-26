// Write Code Sum all number a value?

// Agenda

// Write Code to get the sum of all number present in an alphanumeric string.

// Example1:

// Tech10ellipti45ca


// Number: 10 and 45 

// Result: 55

function sumNumbersInString(str) {
  let totalSum = 0;
  let tempNumber = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Check if character is a digit
    if (char >= '0' && char <= '9') {
      tempNumber += char; // Append digit to current number string
    } else {
      if (tempNumber.length > 0) {
        totalSum += parseInt(tempNumber, 10);
        tempNumber = ""; // Reset for the next number
      }
    }
  }

  // Add any remaining number at the end of the string
  if (tempNumber.length > 0) {
    totalSum += parseInt(tempNumber, 10);
  }

  return totalSum;
}

// Example usage:
const input = "Tech10ellipti45ca";
console.log(sumNumbersInString(input)); // Output: 55