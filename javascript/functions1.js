
// functions - 
// as a service 
// for reusability
// ex. food order at hotel 
// i/p -- process -- o/p
// function is like a process or service

// add 
// a+b=c
// 2 i/p and 1 o/p

// function - keyword,   add - name of function , a,b- parameters or i/p values  {} - functiopn body , model code , return - o/p,  add(10,20) - arguments

function add (a,b)
{
  let c=a+b;
  return c;
}
let sum = add(10,20);
console.log(sum);

function sub (a,b)
{
  let c=a-b;
  return c;
}
let subtract = sub(10,20);
console.log(subtract);

function mul (a,b)
{
  let c=a*b;
  return c;
}
let multiply = mul(10,20);
console.log(multiply);

function div (a,b)
{
  let c=a/b;
  return c;
}
let divide = div(10,20);
console.log(divide);

function square (a)
{
  let c = mul(a,a)
  return c;
}

