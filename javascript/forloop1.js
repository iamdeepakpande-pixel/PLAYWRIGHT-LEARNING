// for loop

// for (let i = 1; i <= 10; i++)
//    console.log(i);


// for (let i = 0; i < 5; i++) {
//   console.log(`Iteration: ${i}`);
// }

// o/p:
// Iteration: 0
// Iteration: 1
// Iteration: 2
// Iteration: 3
// Iteration: 4

// for (let i=0; i<3; i++)
// {
//   console.log(i);
// }
// o/p: 0 1 2

// for(let i=1; i<=3; i++)
// {
//   console.log("Hii");
// }
// o/p: Hii Hii Hii

// for (let i=5; i>0; i--)
// {
// console.log(i);
// }
// o/p: 5 4 3 2 1

// Write a for loop to print numbers from 1 to 10

// for (let i=1; i<=10; i++)
// {
//   console.log(i);
// }
// o/p: 1 2 3 4 5 6 7 8 9 10

// Write a for loop to print even numbers between 1 to 20.
// A number is even if it is perfectly divisible by 2
// if (i % 2 === 0)

// for (let i=1; i<=20; i++)
// {
//   if (i%2==0)
//   {
//     console.log (i);
//   }
// }
// o/p: 2 4 6 8 10 12 14 16 18 20


// Write a for loop that prints only odd numbers from 1 to 15.
// A number is odd if it is not perfectly divisible by 2
// logic => To print only odd numbers from 1 to 15, you can use a for loop that starts at 1, checks that the number is less than or equal to 15, and increments by 2 in each iteration.

// for (let i=1; i<=15; i++)
// {
//   if (i %2 !==0)
//   {
//     console.log(i)
//   }
// }
// o/p: 1 3 5 7 9 11 13 15


// Write a for loop to print numbers in reverse from 10 to 1
// logic =>  initializing your loop counter at 10, running it while the counter is greater than or equal to 1, and decrementing the counter by 1 on every iteration.


// for (let i=10; i>=1; i--)
// {
//   console.log(i);
// }
// o/p: 10 9 8 7 6 5 4 3 2 1


// Write a for loop that prints the square of numbers from 1 to 100.
// square of a number is obtained by multiplying the number by itself.
//  For example, the square of 2 is 2 * 2 

// for (let i=1; i<=100; i++)
// {
//   console.log(i*i);
// }

// o/p: 1 4 9 16 25 36 49 64 81 100 121 144 169 196 225 256 289 324 361 400 441 484 529 576 625 676 729 784 841 900 961

// for (let i = 1; i <= 5; i++) {
//   console.log(i * 2);
// }
// o/p: 2 4 6 8 10


// for (let i = 0; i < 4; i++) {
//   console.log(i);
// }
// o/p: 0 1 2 3

// const fruits = ["apple", "mango", "banana"];
// for (const fruit of fruits)
//    {
//   console.log(fruit);
// }
// o/p: apple mango banana

// for (const char of "Hi!") // iterate over each character in the string "Hi!"
//   {
//   console.log(char);
// }

// o/p: H i !

// for (let i = 10; i >= 6; i--) // from 10 to 6
//    {
//   console.log(i); // 10 9 8 7 6
// }

// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }
// o/p: 1 2 4 5

// for (let i = 1; i <= 10; i++) {
//   if (i === 4) break; // break exits the loop entirely.
// }
// o/p: 1 2 3

// const obj = { a: 1, b: 2, c: 3 };
// for (const key in obj) {
//   console.log(key);
// }
// o/p: a b c

// note- for...in gives you the property names (keys), not the values.
// const obj = { a: 1, b: 2, c: 3 };
// for (const value in obj) {
//   console.log(value);
// }
// o/p: a b c

// let total = 0; // starts from 0
// for (let i = 1; i <= 5; i++) // goes from 1 to 5
//    {
//   total += i; // 1+2+3+4+5 = 15, total = total + i
// }
// console.log(total); // 15


 // The inner loop runs completely (j=1, j=2) for each value of i.
// for (let i = 1; i <= 3; i++) // 1 to 3 
//   {
//   for (let j = 1; j <= 2; j++) // 1 to 2 
//      {
//     console.log(i + "," + j); 
//   }
// }
//o/p :  1,1 1,2 2,1 2,2 3,1 3,2


// The inner loop runs i+1 times for each row.
// for (let i = 0; i < 3; i++) // i= 0 to 2
//{
  // for (let j = 0; j <= i; j++) // j= 0 to i
//{
//     process.stdout.write("* ");
//   }
//   console.log();
// }
// // o/p: * 
//         * * 
//         * * * 

// The loop adds values until it hits 30, then breaks.
// const arr = [10, 20, 30, 40];
// let result = 0;
// for (const val of arr) {
//   if (val === 30) break;
//   result += val;
// }
// console.log(result);
// o/p: 30

// How many times does i equal j in a 4x4 grid?                     
// let count = 0;
// for (let i = 0; i < 4; i++) // i= 0 to 3
//    {
//   for (let j = 0; j < 4; j++) // j= 0 to 3
//      {
//     if (i === j) count++;  //  count++  ->  count = count + 1   3+1=4
//   }
// }
// console.log(count); // 3+1=4
// o/p: 4

const word = "JavaScript";
let vowels = 0;
for (const ch of word) {
  if ("aeiouAEIOU".includes(ch)) {
    vowels++;
  }
}
console.log(vowels);