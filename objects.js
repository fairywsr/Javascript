//  to master ja master objects & events

// singleton -- to constructor
// Object.create() // singleton from constructor


const mySymbol = Symbol("key1") 
// object literals 
const jsUser = {
  name: "faria",
  "full Name": "Faria Waseer",
  [mySymbol]: "myKey1", // in objects we define symbol in [] brackets 
  age: 18,
  location: "Moro",
  email: "fairywsr@gmail.com",
  isLoggin: false,
  lastLoginDays: ["Monday", "Saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full Name"])
console.log(jsUser.mySymbol)
console.log(typeof jsUser.mySymbol)
console.log(typeof jsUser[mySymbol]) // in objects we access symbols using square brackets 


//  add new values in objects
jsUser.email = "my@abc.com";
//  freez object no one can make changes 
// Object.freeze(jsUser)
jsUser.email = "xyz@gmail.com"; 
console.log(jsUser)

//  add function to objects
jsUser.greeting= function(){
    console.log("Hello js User")
}

console.log(jsUser.greeting)
console.log(jsUser.greeting())

// singleton object using constructor
const user = new Object()

user.email= "abc@.com"
user.age= 15
user.roleNum= 56
console.log(user)

const regularUser = {
    email: "abc@my.com",
    fullName: {
        userFullName:{
            firstName: "faria",
            lastName: "waseer"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName)

// merge objects like arrays 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {1: "e", 2: "f"}

const finalObj = Object.assign({}, obj1, obj2, obj3)
const finalObj2 = {...obj1, ...obj2, ...obj3}
console.log(finalObj)
console.log(finalObj2)

console.log(Object.keys(jsUser))
console.log(Object.values(jsUser)) 
console.log(Object.entries(jsUser)) 

console.log(jsUser.hasOwnProperty("name")) // true / false

// third video
// de struture object 
const course = {
    courseName: "javaScripr",
    price: "999",
    courseInstructure: "Hitesh Chaudary"
}
course.courseInstructure 
const {courseInstructure} = course
console.log(courseInstructure)
const {courseInstructure: instructor} = course // courseInstructor as instructor
console.log(instructor)

// json --- API
// JSON --- JavaScript Object Notation
// {
//  "name": "hitesh",
//  "courseName": "javascript"
//  "price": "free",
// }
 
// API are some time in []
// [
//     {},
//     {},
//     {}
// ]