// Math.random() - this function used to find random nos - between 0 to 1

// for (let i=1; i<=10; i++)
// {
//   console.log(Math.random());

// }
// // 1-100
// for (let i=1; i<=10; i++)
// {
//   console.log(parseInt(Math.random()*100));

// }
// 200 -500
// let start = 200;
// let end = 500;
// let range = end - start;
// for (let i=1; i<=5; i++)
// {
//   console.log(start+ parseInt(Math.random()*range));
// }
// 480 394 488 281 459

// create random string

let string = "abcdefghijklmnopqrstuvwxyz1234567890"
let ranlen = 10;

let randomString = "";
for (let i=1; i<=ranlen; i++)
{
  let strlen = string.length;
let v = parseInt((Math.random() * strlen))
  randomString = randomString + string.charAt(v);

}
console.log(randomString);   // 0/0 = havj5bg47l

function generateRandomString(length)
