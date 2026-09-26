// Write a program that iterates through numbers from 1 to 100 and identifies the numbers that are:

// Divisible by 3
// Divisible by 5
// Divisible by both 3 and 5

// The program should display the results in three separate lists with appropriate headings.


// Example

// Sample Output: Divided by 3:                                                          
// 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84, 87, 90, 93, 96, 99,              
                                                                       
// Divided by 5:                                                          
// 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95,                                                                    
                                                                       
// Divided by 3 & 5:                                                      
// 15, 30, 45, 60, 75, 90,




let div3 = [];
let div5 = [];
let div3and5 = [];

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    div3.push(i);
  }
  if (i % 5 === 0) {
    div5.push(i);
  }
  if (i % 3 === 0 && i % 5 === 0) {
    div3and5.push(i);
  }
}

console.log("Divided by 3 : " + div3.join(" , ") + " ,");
console.log("Divided by 5 : " + div5.join(" , ") + " ,");
console.log("Divided by 3 & 5 : " + div3and5.join(" , ") + " ,");

// output:

// Divided by 3 : 3 , 6 , 9 , 12 , 15 , 18 , 21 , 24 , 27 , 30 , 33 , 36 , 39 , 42 , 45 , 48 , 51 , 54 , 57 , 60 , 63 , 66 , 69 , 72 , 75 , 78 , 81 , 84 , 87 , 90 , 93 , 96 , 99 ,
// Divided by 5 : 5 , 10 , 15 , 20 , 25 , 30 , 35 , 40 , 45 , 50 , 55 , 60 , 65 , 70 , 75 , 80 , 85 , 90 , 95 , 100 ,
// Divided by 3 & 5 : 15 , 30 , 45 , 60 , 75 , 90 ,
