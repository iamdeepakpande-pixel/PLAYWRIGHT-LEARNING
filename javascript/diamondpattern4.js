function generateBinaryDiamond(n) {
  let result = "";

  // 1. Top Half (including middle row)
  for (let i = 1; i <= n; i++) {
    // Print leading spaces
    for (let j = 1; j <= n - i; j++) {
      result += "  ";
    }
    
    // Determine digit based on row index (1-based index: odd -> 0, even -> 1)
    const charToPrint = (i % 2 === 1) ? "0" : "1";
    
    // Print digits
    for (let k = 1; k <= 2 * i - 1; k++) {
      result += charToPrint + " ";
    }
    result += "\n";
  }

  // 2. Bottom Half
  for (let i = n - 1; i >= 1; i--) {
    // Print leading spaces
    for (let j = 1; j <= n - i; j++) {
      result += "  ";
    }
    
    // Determine digit based on row index
    const charToPrint = (i % 2 === 1) ? "0" : "1";
    
    // Print digits
    for (let k = 1; k <= 2 * i - 1; k++) {
      result += charToPrint + " ";
    }
    result += "\n";
  }

  console.log(result);
}

// Example usage:
const rows = 5;
generateBinaryDiamond(rows);


//         0 
//       1 1 1 
//     0 0 0 0 0 
//   1 1 1 1 1 1 1 
// 0 0 0 0 0 0 0 0 0 
//   1 1 1 1 1 1 1 
//     0 0 0 0 0 
//       1 1 1 
//         0 