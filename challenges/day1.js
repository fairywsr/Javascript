// Activity 1
 var numb = 4
 console.log(numb)
 let str = "School"
 console.log(str)

//  Activity 2 
const bol = true
console.log(bol);

// Activity 3
const num = 2
const stre = "hello"
const bole = false
const arr = [2, 4, 6, 8, 10]
const obj = {
    name: "faria",
    roleNo: 7,
    salary: 500000
}

console.log(typeof num)
console.log(typeof stre)
console.log(typeof bole)
console.log(typeof arr)
console.log(typeof obj)

// Activity 4
let valOne = 3 
console.log(valOne)
valOne = 6 
console.log(valOne)

// Activity 5
// const myName = 'faria'
// myName = 'waseer'; //TypeError: Assignment to constant variable


// ++++++++++++Feature Request

console.log('feature Request')

const name = 'faria'
const roleNum = 56
const isLogginIn = false
const hobbies = ['reading', 'writing']
const cnic = Symbol(28)
const Data = {
    name: 'Faria',
    myHobbies: hobbies,
}

console.log(`variable value: ${name} and dataType is : ${typeof(name)}`)
console.log(`variable value: ${roleNum} and dataType is : ${typeof(roleNum)}`)
console.log(`variable value: ${isLogginIn} and dataType is : ${typeof(isLogginIn)}`)
console.log(`variable value: ${hobbies} and dataType is : ${typeof(hobbies)}`)
// console.log(`variable value: ${cnic} and dataType is : ${typeof(cnic)}`)  //Symbol is the only primitive in JavaScript that doesn’t auto-convert to a string.
console.log(`variable value: ${Data} and dataType is : ${typeof(Data)}`)

// 2
let course = 'frontend Development';
console.log(course) // frontend Development
course = "Backend developmwnt"
console.log(course) // Backend developmwnt
const myMan = 'adil'
console.log(myMan) // adil
myMan = 'Other'
console.log(myMan) // Error 
