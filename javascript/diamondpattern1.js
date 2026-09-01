// Diamond Pattern

// To generate a diamond pattern in JavaScript where the upper half has n rows (total rows = 2 * n - 1), you can split the logic into two parts: top pyramid and bottom inverted pyramid.

function generateDiamond(n) {
  let result = "";

  // 1. Top Half (including middle row)
  for (let i = 1; i <= n; i++) {
    // Print leading spaces
    for (let j = 1; j <= n - i; j++) {
      result += "  ";
    }
    // Print stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      result += "1 ";
    }
    result += "\n";
  }

  // 2. Bottom Half
  for (let i = n - 1; i >= 1; i--) {
    // Print leading spaces
    for (let j = 1; j <= n - i; j++) {
      result += "  ";
    }
    // Print stars
    for (let k = 1; k <= 2 * i - 1; k++) {
      result += "1 ";
    }
    result += "\n";
  }

  console.log(result);
}

// Example usage:
const rows = 5; // Replace with user input (e.g., prompt("Enter row count:"))
generateDiamond(rows);

//         * 
//       * * * 
//     * * * * * 
//   * * * * * * * 
// * * * * * * * * * 
//   * * * * * * * 
//     * * * * * 
//       * * * 
//         * 