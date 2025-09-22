console.log(2 > 1) // true
console.log(2 >= 1) // true
console.log(2 < 1) // false
console.log(2 == 1) // true
console.log(2 != 1) // true

console.log("2" > 1) // true -- js automaticall conver "2" in number than compare ----- to avoid errors make sure both opperends have same dataType 

//  avoid these types of campersion
console.log(null > 0) // false
console.log(null == 0)  // false
console.log(null >= 0) // true
console.log(undefined == 0) // false
console.log(undefined > 0) // false
console.log(undefined < 0) // false

console.log("2" == 2) // true here js type conversion works first than campare 
console.log("2" === 2) // false -- strict check
