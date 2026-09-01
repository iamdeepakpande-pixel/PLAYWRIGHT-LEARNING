function generateAlphabetDiamond(n) {
  let result = "";
  let charCode = 65; // Starting ASCII code for 'A'

  // Helper function to get the next character in sequence (A-Z)
  function getNextChar() {
    const char = String.fromCharCode(charCode);
    charCode++;
    if (charCode > 90) { // Reset to 'A' after 'Z'
      charCode = 65;
    }
    return char;
  }

  // 1. Top Half (including middle row)
  for (let i = 1; i <= n; i++) {
    // Print leading spaces
    for (let j = 1; j <= n - i; j++) {
      result += "  ";
    }
    // Print sequential letters
    for (let k = 1; k <= 2 * i - 1; k++) {
      result += getNextChar() + " ";
    }
    result += "\n";
  }

  // 2. Bottom Half
  for (let i = n - 1; i >= 1; i--) {
    // Print leading spaces
    for (let j = 1; j <= n - i; j++) {
      result += "  ";
    }
    // Print sequential letters
    for (let k = 1; k <= 2 * i - 1; k++) {
      result += getNextChar() + " ";
    }
    result += "\n";
  }

  console.log(result);
}

// Example usage:
const rows = 5;
generateAlphabetDiamond(rows);

//         A 
//       B C D 
//     E F G H I 
//   J K L M N O P 
// Q R S T U V W X Y 
//   Z A B C D E F 
//     G H I J K 
//       L M N 
//         O 