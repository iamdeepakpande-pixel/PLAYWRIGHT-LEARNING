// boolean datatypes


// falsy value- zero value->   0, "" i.e. empty string, null, undefined, NaN, false
// truthy value- non zero values->  1, "hello", [], {}, true

let l1 = Boolean(0);
console.log(l1); // false

let l2 = Boolean(1);
console.log(l2); // true

let l3 = Boolean("");
console.log(l3); // false

let l4 = Boolean("hello");
console.log(l4); // true

let l5 = Boolean(null);
console.log(l5); // false

let l6 = Boolean(undefined);
console.log(l6); // false

let l7 = Boolean(NaN);
console.log(l7); // false

let l8 = Boolean([]);
console.log(l8); // true

let l9 = Boolean({});
console.log(l9); // true

let l10 = Boolean(false);
console.log(l10); // false

let l11 = Boolean(true);
console.log(l11); // true

let l12 = Boolean("false");
console.log(l12); // true

let l13 = Boolean("true");
console.log(l13); // true

let l14 = Boolean("0");
console.log(l14); // true

let l15 = Boolean("1");
console.log(l15); // true

let l16 = Boolean("null");
console.log(l16); // true

let l17 = Boolean("undefined");
console.log(l17); // true

let l18 = Boolean("NaN");
console.log(l18); // true

let l19 = Boolean("[]");
console.log(l19); // true

let l20 = Boolean("{}");
console.log(l20); // true

 

//-------------------------------------------

let b1 = Boolean(parseInt("10px"));
console.log(b1); // true
console.log(parseInt("10px")); // 10
console.log(typeof b1); // boolean


//  o/p -

false
true
false
true
false
false
false
true
true
false
true
true
true
true
true
true
true
true
true
true
true
10
boolean