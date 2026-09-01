function generateNumberDiamond(n) {
  let result = "";

  // 1. Top Half (including middle row)
  for (let i = 1; i <= n; i++) {
    // Print leading spaces
    for (let j = 1; j <= n - i; j++) {
      result += "  ";
    }
    // Print row number 'i'
    for (let k = 1; k <= 2 * i - 1; k++) {
      result += i + " ";
    }
    result += "\n";
  }

  // 2. Bottom Half
  for (let i = n - 1; i >= 1; i--) {
    // Print leading spaces
    for (let j = 1; j <= n - i; j++) {
      result += "  ";
    }
    // Print row number 'i'
    for (let k = 1; k <= 2 * i - 1; k++) {
      result += i + " ";
    }
    result += "\n";
  }

  console.log(result);
}

// Example usage:
const rows = 5;
generateNumberDiamond(rows);