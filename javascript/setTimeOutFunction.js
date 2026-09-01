// setTimeoutFunction

// js is single threaded language 
// js trigger the function, but it dont wait function to finish 
// js is asynchronous language 


// function printMyName (){
//     console.log("vaibhav")
// } 
// function printFriendName (){
//     console.log("sanjay")
// }

// setTimeout(printMyName, 3000)
// setTimeout(printFriendName, 1000)

// 3 sec
function click(element){
    let p1 = new 
    setTimeout(function(){
        console.log(element+"clicked")
    }, 3000)
}

function enterData(element, data){
setTimeout(function(){
    console.log(element + "entered data with" + data)
}, 10000)
}

click("login link")
enterData("username", "vaibhav")
enterData("password", "pass")
click("login button")

// o/p: 
// Login link clicked
// login button clicked
// username entered data with vaibhav
// password entered data with pass