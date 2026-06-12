// object

console.log(Math.PI) //3.141592653589793

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter)

// on object properties
const myInfo = {
    name: "faria",
    rollNum : 245,
    isAvailable: true
}

console.log(myInfo) //{ name: 'faria', rollNum: 245, isAvailable: true }

console.log(Object.getOwnPropertyDescriptor(myInfo, "name"))    
/* {
  value: 'faria',
  writable: true,
  enumerable: true,
  configurable: true
}
  */

Object.defineProperty(myInfo, "name",{
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(myInfo, "name"))  
/*
{
  value: 'faria',
  writable: false,
  enumerable: false,
  configurable: true
}
*/
myInfo.name = "adil"
console.log(myInfo) //{ rollNum: 245, isAvailable: true }

// Notes: Now we can hange the value of name in myInfo Object 
// Source video Link: https://youtu.be/jss2rL9kv6s?si=Y7nVV7ZWFlczA3-I