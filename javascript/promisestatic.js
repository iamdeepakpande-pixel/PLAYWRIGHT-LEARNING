// promise static functions /  methods

// async
// await - stop function until promise is not resolved
// await will always be inside a async function
// await - always works with promise return function

// resolve - promise.resolve -
// reject - promise.reject  -
// race -  promise.race
// all  -promise.all - as soon as it find a failure. it fails
// allSettled - it will wait for all promise to finish

// function f1 () {
//    return Promise.resolve("hello");
// }

// f1().then((msg)=>{
//   console.log("then" + msg)
// }).catch((msg)=>{
//   console.log("catch" + msg);
// })
// thenhello

// function f2 () {
//    return Promise.reject("hello");
// }

// f2().then((msg)=>{
//   console.log("then" + msg)
// }).catch((msg)=>{
//   console.log("catch" + msg);
// })
// catchhello


// Promise.race   method -  when we use race method, promise which is having min wait, that promise will get executed first


// let p1 = new Promise((resolve, reject) => {
//   setTimeout(()=>resolve("testcase1 passed"), 4000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("testcase2 passed"), 1000);
// });

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("testcase3 passed"), 2000);
// });

// const t1 = await Promise.race([p1, p2, p3]);
// console.log(t1);


// Promise.all method -  as soon as it find a failure , it fails

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(()=>resolve("testcase1 passed"), 4000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("testcase2 passed"), 1000);
// });

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("testcase3 passed"), 2000);
// });
//  try{
// const t1 = await Promise.all([p1, p2, p3]);
// console.log(t1);
//  }catch(err){
//     console.log(err)
//  }
 // o/p =  [ 'testcase1 passed', 'testcase2 passed', 'testcase3 passed' ]

 // allSettled -  it will provide results for all promises along with status

 let p1 = new Promise((resolve, reject) => {
  setTimeout(()=>resolve("testcase1 passed"), 4000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("testcase2 passed"), 1000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("testcase3 passed"), 2000);
});
 try{
const t1 = await Promise.allSettled([p1, p2, p3]);
console.log(t1);
 }catch(err){
    console.log(err)
 }

// o/p :  
//  [
//   { status: 'fulfilled', value: 'testcase1 passed' },
//   { status: 'fulfilled', value: 'testcase2 passed' },
//   { status: 'rejected', reason: 'testcase3 passed' }
// ]

