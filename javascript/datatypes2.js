// primitive data type
// undefined -  when we not assign any value to a variable, it is undefined by default. It is a primitive data type in JavaScript.

// //lazy initialization -  when we declare a variable but not assign any value to it, it is undefined by default. It is a primitive data type in JavaScript.

let a;
a = 10;
console.log(a);
console.log(typeof a); // undefined

// // early initialization -  when we declare a variable and assign a value to it, it is not undefined. It is a primitive data type in JavaScript.

let b = 20;
console.log(b);
console.log(typeof b); // number

// string -  when we assign a string value to a variable, it is a primitive data type in JavaScript.
// string is internally represented as an array of characters. It is a primitive data type in JavaScript.
// [h e l l o] -  string is internally represented as an array of characters. It is a primitive data type in JavaScript.

// let r1 = "hello";
// console.log(r1);
// console.log(r1[0]);
// console.log(r1[1]);
// console.log(r1[2]);
// console.log(r1[3]);
// console.log(r1[4]);
// console.log(typeof r1); // string

// let r1 = "10";
// let r2 = "20";
// // + -> append -  when we add two strings, it is called append. It is a primitive data type in JavaScript.
// let r3 = r1 + r2;
// console.log(r3); // 1020

// + operator -
// untill we add two numbers, it is called addition. It is a primitive data type in JavaScript.
// as soon as we add a string to a number, it is called append. after that , next numbers will get added to the string.

// console.log(10+20+30+40); // 100
// console.log("10"+"20"+"30"+"40"); // 10203040
// console.log(10+20+"30"+40); // 303040
// console.log("10"+20+30+40); // 10203040
