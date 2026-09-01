//  timesGenerator  - function

function timesGenerator(times)
{
  let returnFunc = function timesgen (a)
  {
return a*times;

  }
  return returnFunc;
}
let  double = timesGenerator(2);
console.log(double(10));

let  triple = timesGenerator(3);
console.log(triple(10));
// console.log(typeof timesGenerator)