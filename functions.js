function sayMyName(){
    // function scope or defination
     console.log('Faria')
} // ------ function syntax function fnName(){}

sayMyName // function reference
sayMyName() // function execution


function addTwoNumbers(num1, num2){
                     // ⬆️ Parameters
    console.log(num1 +  num2)
}

addTwoNumbers(3, 4)
            // ⬆️arguments

//  Store function result in variable 
const result = addTwoNumbers(4, 8)  
// console result variable to see what function's return 
console.log(result)  // undefine ----function return undefine
            //   
            // 
            // 
            //  to avoid this behaviour use return keyword in function 
function addTwoNumbers(num1, num2){
    return num1 + num2
}


function userLoginMessage(username){
    if(username == undefined){
        console.log("Enter Your username")
        return // we write return here to stop execute other rest of code in function
    }
    return `${username} just LogIn`
}

userLoginMessage("faria")
console.log(userLoginMessage('Faria'))


//"" suppose as false 
// undefine suppose as false

// 2nd video

// Rest operator
function calculateCartPrice(...item){
     return num1
}

console.log(calculateCartPrice(200, 300, 500, 2000)) // [200, 300, 500, 2000]

const myUser = {
    username: "Faria",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is : ${anyObject.price}`)
}

handleObject(user) // object store in variable user
handleObject({  // we can also pass direct object 
    username: "sam",
    price: 699
})

// we can also pass arrays as arguments and accept array parameter in function

const myNewArray = [200, 400, 600, 800]

function handleArray(anyArray){
    return anyArray[2]
}

console.log(handleArray(myNewArray)) // array in variable
console.log([100, 600, 700, 800, 500])// we can also pass direct array

// ==========Example ==========
function chai(){
    let username = "faria"
    console.log(this.username)
}      // undefine


// !+++++++++++++ Methoda of function declaration +++++++++++++++++++++++++++
// #------Method one
// ? simple function declaration----we can access before declaration
addOne()  // call before deceleration
function addOne(){
 // code
} 


// #------Method two
// ? Second Method is function expression in which we store function in variable and we can not access function before decleartion 
addTwoNum() // Error Cannot access before initilization --- we can not access variables before initilization
const addTwoNum = function(){
 // code
}
addTwoNum()


// #------Method three
// ? Arrow function
// important: browser global object is window object
// important: node global object is {} (empty object)
// important this keyword works in objects not in function
const chai = ()=>{
// note: this keyword is not work in Arrow function -----returns {} (empty object)
console.log(`my Name is faria`)
}

// ? ways to write arrow function
const myfan = ()=>{}  // in variable
()=>{return } // Arrow function if we use {} return keyword is important
()=>// if our function is one liner so we can avoid {} and return keyword
()=>(console.log(`Hello arrow function`)) // if our function is not one liner but we want to avoid {} we can use () instead of {} without return keyword


// #------Method four
// ? IIFI ---Immdeiately invoked function expression 
// important ; semicolon is necessery in IFFI to stop global execution
// note global scope se polution hoti hn khai bar us ko avoid krne k lia IIFE use hota hn

// ? Named IIFI
(function chai(){ //code 
    // named IIFI
})(); 

//? Arrow function as IIFI
(()=>{
    // simple IIFI without name
})()

//? IIFI with parameters & arguments 
((name)=>{
   console.log(`My name is ${name}`)
})("Faria")
