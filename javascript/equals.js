// loose equality (==) vs strict equality (===)

// Loose equality (==) performs type coercion, 
// meaning it converts the operands to the same type before making the comparison. This can lead to unexpected results.

5 == "5"          // true  (String "5" is coerced into number 5)
1 == true         // true  (Boolean true is coerced into number 1)
null == undefined // true  (Special rule in JS)


// Strict equality (===) does not perform type coercion,
// meaning it checks both the value and the type of the operands.

5 === "5"         // false (Because number !== string)
1 === true        // false (Because number !== boolean)
null === undefined// false (Because null !== undefined)
