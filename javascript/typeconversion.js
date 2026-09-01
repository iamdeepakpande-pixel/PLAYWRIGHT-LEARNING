// 1. String Conversion
String(123)            // "123"      (Converts a number to a string)
String(true)           // "true"     (Converts a boolean to a string)
(500).toString()       // "500"      (Using the built-in .toString() method)

// 2. Number Conversion
Number("42")           // 42         (Converts a string of numeric characters to a number)
Number("hello")        // NaN        (Fails to parse, returns Not-a-Number)
Number(true)           // 1          (Converts boolean true to 1)
Number(false)          // 0          (Converts boolean false to 0)
parseInt("15.99px")    // 15         (Parses and extracts an integer from a string)
parseFloat("15.99px")  // 15.99      (Parses and extracts a floating-point number)

// 3. Boolean Conversion
Boolean(1)             // true       (Converts truthy values to true)
Boolean(0)             // false      (Converts falsy values to false)
Boolean("")            // false      (Empty strings convert to false)
Boolean("JS")          // true       (Non-empty strings convert to true)
Boolean(null)          // false      (null converts to false)
Boolean({})            // true       (Objects convert to true)