const score = 400
console.log(score) // 400 number 

const balance = new Number(100)
console.log(balance) // balance is number datatype

console.log(balance.toString().length) // 3 here balance is string 
console.log(balance.toFixed(2)) // 100.00

const otherNumber = 23.8966

console.log(otherNumber.toPrecision(3)) // 123

const hundereds = 1000000
console.log(hundereds.toLocaleString('en-IN')) // 10,00,000

// ======================Maths=================
console.log(Math)
console.log(Math.abs(-4)) // 4 absolute value
console.log(Math.round(4.6)) // 5 round off 
console.log(Math.ceil(4.2)) // 5 top value to round off 
console.log(Math.floor(4.9)) // 4 lower value
console.log(Math.min(4, 6, 5, 2)) // 2
console.log(Math.max(4, 6, 5, 2)) // 6

console.log(Math.random()) // values 0 to 1
console.log(Math.random()*10 + 1) 
console.log(Math.floor(Math.random()*10) + 1) 

const min = 10
const max = 20 
console.log(Math.floor(Math.random() * (max- min + 1 )) + min) // values are in range 10 to 20
