//  ? if statement
if (true) {
}


// ? if-else
if (condition) {
} else {
}


// ? if-statement implicit scope
balance = 2000;
if (valance > 500) console.log("test");

// ? if-statement nested
if(balance < 500){
    console.log("Less than 500");
}else if(balance < 750){
      console.log("Less than 750");
}else if(balance < 900){
    console.log("Less than 950");
}else{
    console.log("greater than 2000");
}

// ? terniary operator
condition ? "for true condition" : "for false condition"

// ? Switch statements 
const month = 2
switch (month) {
    case 1:
        console.log("Jan")
        break;
    case 2:
        console.log("feb")
        break;
    case 3:
        console.log("March")
        break;
   
    default:
        console.log("No Month match")
        break;
}

// ? Truthy & falsy values
// Important: falsy values
// false
// 0
// -0
// BigInt 0n
// ""
// null
// undefined
// NaN

// Important: truthy values
// true
// 1
// []
// {}
// "0"
// 'false'
// " "
// function(){}
// false == 0
// false == ''
// 0 == ''


// Important: Nullish Coalescing Operator (??): null Undefined
let val1;
val1 = 5 ?? 10;
console.log(val1) // 5

val1 = null ?? 10
console.log(val1) // 10

val1 = null ?? undefined ?? 110
console.log(val1) // 100
