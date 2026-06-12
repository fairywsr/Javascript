const score = "faria"

console.log(typeof score)
console.log(typeof(score))

const numberValue = Number(score) // this convert into number but value is nota a number => NaN

console.log(typeof(numberValue)) // number
console.log(numberValue) // NaN

// "33" => 33
// "33abc" => NaN 
// true => 1; false => 0

let isLoggIn = 1

let booleanIsLoggin = Boolean(isLoggIn)
console.log(booleanIsLoggin) // true

// 1 => true
// 0 => false
//"" => false
//"faria" => true


let sumNumber = 33
let stringNumber = String(sumNumber)

console.log(typeof stringNumber) // string 
console.log(stringNumber) // 33 