"use strict"; // treat all js code as newer version of js

// alert(2 + 4) // we are not user browser using node --- alert is browser base function

let namee = "faria"; // string
let age = 18; // Number
let isLoggin = false; // boolean True/False


// ---------Primitive dataTypes ---------
// Primitive Data Types
// 🔹 These are basic & immutable (cannot be changed directly).
// 🔹 Stored in stack memory.
// 🔹 Compared by value.

// String → "hello"
// Number → 42 -- number have limit 2^53 -- for larger values we use bigInt
// Boolean → true / false
// Null → null
// Undefined → undefined
// BigInt → 123n
// Symbol → Symbol("id") use for unique values

// ---------non-Primitive dataTypes ---------
// Non-Primitive (Reference) Data Types
// 🔹 Also called Objects.
// 🔹 Stored in heap memory.
// 🔹 Compared by reference (not value).

// Object → { name: "faria" }
// Array → [1, 2, 3]
// Function → function() {}

// build in constructors thats why type is function 
console.log(typeof String); // function
console.log(typeof Number); // function
console.log(typeof Boolean); // function
console.log(typeof undefined); // undefine
console.log(typeof null); //Object -- well known bug in javascript
console.log(typeof BigInt); // function
console.log(typeof Symbol); // function
console.log(typeof Array); // function
console.log(typeof Object); // function
console.log(typeof Function); // function

// if you want to check type of any dataType type value not constructor
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (bug)
console.log(typeof 123n); // "bigint"
console.log(typeof Symbol("x")); // "symbol"
console.log(typeof [1, 2, 3]); // "object"
console.log(typeof { a: 1 }); // "object"
console.log(typeof function () {}); // "function"

// +++++++++++++++++++++++++++++++++++
// Memory Types 
// Stack --- primitive => copy of variable
// Heap --- non-primitive => original value // change in original value

let myName = "Faria" // Stack
let anOtherName = myName
myName = "waseer"

console.log(anOtherName) // waseer
console.log(myName) // Faria 
 
// heap
let userOne = {
    email: "userOne@gmail.com",
    upi: 98723635
}

let userTwo = userOne
userOne.email = "faria@gmail.com"

console.log(userOne.email) // faria@gmail.com
console.log(userTwo.email) // faria@gmail.com