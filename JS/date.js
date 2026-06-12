//  Dates

const myDate = new Date()
console.log(myDate) // 2025-09-07T13:33:03.003Z

console.log(myDate.toString())  // Sun Sep 07 2025 18:34:05 GMT+0500 (Pakistan Standard Time)

console.log(myDate.toLocaleString()) //07/09/2025, 6:35:37 pm

console.log(y=typeof myDate) // object

console.log(myDate.toJSON()) // 2025-09-07T13:38:57.720Z
console.log(myDate.getDate()) // 7
console.log(myDate.getDay())  // 0
console.log(myDate.getFullYear())  // 2025

const myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString())  //Mon Jan 23 2023

const myCreatedDateTwo = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDateTwo.toLocaleString()) // 23/01/2023, 5:03:00 am

//  +++++++ time ++++++++++
let myTimeStamp = Date.now()

console.log(myTimeStamp)

console.log(Date.now()/1000) // in seconds
