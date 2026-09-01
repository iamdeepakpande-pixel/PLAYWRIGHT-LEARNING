// var - function scoped variable
// global variable - scope is outside function 


 let a=10;
function show()
  {
 a=20;
  }
  show();
console.log(a);
