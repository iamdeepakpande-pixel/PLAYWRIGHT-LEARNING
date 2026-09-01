
// promises in js
// as a response 
// used for sequential execution 
// states of promise =   pending, resolved/ fullfilled - (then) , rejected-  (catch)


// function callme(a){
//   // console.log(a);
//   a();
// }

// function printMyName(){
//   console.log("vaibhav")
// }
// // let b=10;
// // callme(b) // 10 
// callme(printMyName)// vaibhav



function click(element){
let p1 = new Promise ((resolve, reject) => {
  setTimeout(()=> {
        console.log(element+"clicked")
        resolve();
    }, 3000);
});
return p1;
}

function enterData(element, data){
// let p2 = new Promise ((resolve, reject) => {
//   setTimeout(()=> {
//     console.log(element + "entered data with" + data)
//     resolve();
// }, 4000);
// });
// return p2;
// }

let p2 = Promise.resolve("work done");
return p2;
}

click("login link").then((msg)=>{
    return enterData("username", "vaibhav");
}).then((msg)=>{
    return enterData("password", "pass");
}).then((msg)=>{
    return click("login button");
}).catch((msg)=>{
   console.log("some issue found so failed")
});

// await - stop function until promise is not resolved
// await will always be inside a async function
// await - always works with promise return function




async function runMyTest ()
{
    try
    {
    await click("login link");
    await enterData("username", "vaibhav");
    await enterData("password", "pass");
    await click("login button");
    } catch(err)
    {
        console.log(err)
    }
  
}


 // o/p : 
 // when resolved :
 //  login linkclicked
// usernameentered data withvaibhav
// passwordentered data withpass
// login buttonclicked
// when rejected  : 
// login linkclicked
// usernameentered data withvaibhav
// some issue found so failed


//     let p1 = new Promise ((resolve, reject) => {
// // resolve ("vaibhav is resolved");
// reject ("vaibhav is rejected ");
//     });

// p1.then((msg) => {
//     console.log("Then:" + msg);
// }).catch((msg) => {
//     console.log("Catch:" + msg)
// })


