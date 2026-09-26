// Write a program that reads a number in inches and converts it into meters.

// Conversion Rule:
// 1 inch = 0.0254 meter

// Output Rule:

// Result must show exactly 2 digits after decimal
// Invalid inputs should print Invalid output

function convertInchesToMeters(input) {
  // Check if input is a valid number (handles non-numeric strings, special characters, mixed invalid chars)
  const inches = Number(input);

  if (isNaN(inches) || input === null || String(input).trim() === '') {
    console.log("Invalid output");
    return;
  }

  // Convert inches to meters
  const meters = inches * 0.0254;

  // Format to exactly 2 decimal places
  console.log(meters.toFixed(2));
}

// Example Test Cases:
convertInchesToMeters("10.00");   // Output: 0.25
convertInchesToMeters("-10.00");  // Output: -0.25
convertInchesToMeters("abc");     // Output: Invalid output
convertInchesToMeters("-1000");   // Output: -25.40
convertInchesToMeters("1xy");     // Output: Invalid output
convertInchesToMeters("@#$");     // Output: Invalid output

// outputs:
// 0.25
// -0.25
// Invalid output
// -25.40
// Invalid output
// Invalid output