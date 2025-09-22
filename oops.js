// # javascript and classes 

//Important: js does not have classes javascript is prototype based language not object oriented not functional 

//?oop -- object--colection of properties and methods -programming paradiam --code writing structure

// ? why need oop
// ? use to avoid messUp in code 
// ? object literal 

// ! object literal 
const user = {
    name: "faria",
    loginCount: 5,
    greetings: function(){
        onslotchange.log(`welcome ${name} to our website`)
    }
}  // object literal syntax 


// !Constructor Function
// !Intances (new)
// const promise1 = new Promise()
// const newDate = new Date()
// ? new keyword is a constructor function 
// ? using new keyq=word created {} object called intence  

function User(username, isLoggIn, LogginCount){
    this.username = username,
    this.isLoggIn = isLoggIn,
    this.LogginCount = LogginCount

    return this
}


const userOne = new User("Faria", true, 20)
const userTwo = new User("Adil", false, 20)
console.log(userOne.constructor)
console.log(userOne)
console.log(userTwo)

// ! Prototypes
// ? Array------->Prototype---------->null
// ? Function------->Prototype---------->null
// ? Strings------->Prototype---------->null

// ! Classes
// !Intances (new, this)
// ! four pillors of oops(Abstraction, encopulation, inheritance, polymorphism)



// video link Prototype: https://youtu.be/uMI5cNeHTOc?si=K6AOlGQNIrBzpT-3 
// ? About new keyword
/*
Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
*/

