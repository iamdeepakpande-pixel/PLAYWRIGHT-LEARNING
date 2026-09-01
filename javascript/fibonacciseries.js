// fibonnaci series - function fibonacciSeries(n) {

// 0 1 1 2 3 5 8 13 21 34 55 89 144


let a=0;
let b=1;
// a=0, b=1, sum=1
let sum = a+b;
console.log(sum);

while(sum<=100){
  a=b;  // a=b=1
  b=sum;
  sum=a+b;
  console.log(sum);
}
//output:
//  1
// 2
// 3
// 5
// 8
// 13
// 21
// 34
// 55
// 89
// 144

