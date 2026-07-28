// nested if else
// else if

//  import { ChildProcess } from "node:child_process"

// agegroup

//  age <18 = Child 18-30 = adult, 31-45 = mature , >45 = old

let age = 32;
let ageGroup = "";

if (age < 18) {
  ageGroup = "child";
} else if (age >= 18 && age <= 30) {
  ageGroup = "adult";
} else if (age > 30 && age <= 45) {
  ageGroup = "mature";
} else {
  age;
  Group = "old";
}

console.log(`age: ${age} : ${ageGroup}`);
