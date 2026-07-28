// Here is a step-by-step breakdown of how this JavaScript code swaps the two variables using **array destructuring**:

// ---

// ## 1. Variable Initialization

// ```javascript
// let a = 10;
// let b = 7;

// ```

// * **Variable `a**` is assigned the number value **`10`**.
// * **Variable `b**` is assigned the number value **`7`**.

// ---

// ## 2. Initial Logging

// ```javascript
// console.log(`Before Swap: a = ${a}, b = ${b}`);

// ```

// * JavaScript substitutes the values into the template literal string.
// * **Output:** `Before Swap: a = 10, b = 7`

// ---

// ## 3. The Swap Line (`[a, b] = [b, a];`)

// This single line works in **two distinct sub-steps** evaluated by JavaScript from right to left:

// ### Step 3a: Right-hand side is evaluated first `[b, a]`

// * JavaScript reads the current values of `b` and `a`.
// * Since `b = 7` and `a = 10`, JavaScript temporarily creates an array in memory: **`[7, 10]`**.

// ### Step 3b: Left-hand side unpacks the array `[a, b] = ...`

// * JavaScript uses **destructuring assignment** to extract values from the newly created array `[7, 10]` and assign them by position:
// 1. The first element (**`7`**) is assigned to **`a`**. Now `a` becomes **`7`**.
// 2. The second element (**`10`**) is assigned to **`b`**. Now `b` becomes **`10`**.

// ---

// ## 4. Final Logging

// ```javascript
// console.log(`After Swap:  a = ${a}, b = ${b}`);

// ```

// * JavaScript prints the updated values of `a` and `b`.
// * **Output:** `After Swap:  a = 7, b = 10`

// ---

// ### Why doesn't it need a `temp` variable?

// Normally, doing `a = b` directly overwrites `a` before you can give `a`'s old value to `b`.

// With destructuring, the array `[b, a]` (containing `[7, 10]`) is created in temporary memory **before** any reassignment happens on the left side, keeping both original values safe during the swap.

let a = 10;
let b = 7;

console.log(`Before Swap: a = ${a}, b = ${b}`);

// Destructuring assignment swap
[a, b] = [b, a];

console.log(`After Swap:  a = ${a}, b = ${b}`);
