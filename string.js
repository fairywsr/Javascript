// string in single '' and also written in "" 

// string interpulation 
let myName = "farta"
console.log(`My name is ${myName}`)

const schoolName = new String('IqraPublic') // type of schoolName variabel is Object because we assign new keyword to it 

const myHobby = 'reading' // type is string 
console.log(schoolName[0]) // I
console.log(schoolName.length) // 4
console.log(schoolName.toLowerCase()) // 4
console.log(schoolName.charAt(2)) // r
console.log(schoolName.indexOf('q')) // 2

const newString = schoolName.substring(0, 5)
console.log(newString) // IqraP

const anOtherString = schoolName.slice(-8, 4)
console.log(anOtherString) // ra 

const newStringOne =  "  faria  "
console.log(newStringOne) //"  faria  " -- with spaces
console.log(newStringOne.trim()) // faria

const url = "https://hitesh.com/hitesh%20choudary"

console.log(url.replace('%20', '-')) // https://hitesh.com/hitesh-choudary

console.log(url.includes('faria')) // false

const strTwo = "My-name-is-faria"
console.log(strTwo.split('-')) //['my' 'name' 'is' 'faria'] 
