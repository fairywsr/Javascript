// activity 1 template litrals 
const name = "faria"
const age = 53
console.log(`My name is: ${name} and age is ${age}`)

const myinfo = `hello my name is 
${name} and my age is ${age}`
console.log(myinfo)

// activity 2 Destructuring
// Array
const numbers = [1, 2, 3, 4, 5] 
const [num1, num2] = numbers
console.log(`${num1} & ${num2}`)

// object 
const object = {
    fullname: "Adil",
    myAge: 25,
}
const {fullname, myAge} = object
console.log(`name is ${fullname} and age is ${myAge}`)

// activity 3 spread & rest operators 
// spread operator
const arr1 = [1, 3, 5, 7, 9]
const newArr = [...arr1, 11, 13, 15]
console.log(newArr)

// rest operator
const restFun = function(...numbers){
     let sum = 0;
     for(let num of numbers){
        sum += num
     }
     return sum
}

console.log(restFun(20, 20, 330))

// activity 4 default parameters
const mySum = function(num1, num2 = 1){
      return `${num1 + num2}`
}
console.log(mySum(67)) // 68
console.log(mySum(80)) // 81

// activity 5 objects
// import {bookData} from "./day7.js"
const bookData = require("./day7.mjs")
//Notes: here is an error require module executing all code of day7.js than below code 
console.log(bookData)

bookData.getBookInfo = function(){
    return `book name is ${this.title}`
}

bookData.price = 34;
console.log(bookData.getBookInfo);
console.log(bookData.price)

//Notes: Node.js: ya to .mjs file extension use karo, ya package.json me "type": "module".


const key1 = "title";
const key2 = "year";
const id = 42;

// Create object with computed property names
const book = {
  [key1]: "Stories by John",          // becomes "title": "Stories by John"
  [key2]: 2002,                       // becomes "year": 2002
  ["book_" + id]: true,               // becomes "book_42": true
  [ `author_${key1}` ]: "John Doe"    // becomes "author_title": "John Doe"
};

console.log(book);
// important ⬇️
// Normal property: name: "Ali"
// Computed property: [expression]: value
// It’s called “computed” because the property name is calculated at runtime.