//  Activity 1 if-else statements
const num = -2
if(num > 0){
    console.log(`${num} number is positibe`)
}else if (num < 0){
     console.log(`${num} number is negative`)
}else{
    console.log(`${num} number is zero`)
}

const age = 15
if(age > 18){
    console.log('You are eligible for vote')
}else{
     console.log('You are not eligible for vote')
}

//  Activity 2 Nested if-else statements
const a = 25
const b = 45
const c = 4
if(a > b && a > c){
    console.log(`${a} is greater number`)
}else if(b > a && b > c){
    console.log(`${b} is greater number`)
}else{
    console.log(`${c} is greater number`)
}

//  Activity 3 Switch case
const dayNum = -5
switch (dayNum) {
    case 1:
        console.log(`${dayNum} : Sunday`)
        break;
    case 2:
        console.log(`${dayNum} : Monday`)
        break;
    case 3:
        console.log(`${dayNum} : Tuesday`)
        break;
    case 4:
        console.log(`${dayNum} : Wednesday`)
        break;
    case 5:
        console.log(`${dayNum} : Thursday`)
        break;
    case 6:
        console.log(`${dayNum} : Friday`)
        break;
    case 7:
        console.log(`${dayNum} : Saturday`)
        break;

    default:
        console.log(`Enter valid number 1 to 7`)
        break;
}

const score = 44;

switch (true) {
    case score <= 50:
        console.log(`based on your score: ${score} you secures F Grade`)
        break;
    case score <= 60:
        console.log(`based on your score: ${score} you secures D Grade`)
        break;
    case score <= 70:
        console.log(`based on your score: ${score} you secures C Grade`)
        break;
    case score <= 80:
        console.log(`based on your score: ${score} you secures B Grade`)
        break;
    case score <= 90:
        console.log(`based on your score: ${score} you secures A Grade`)
        break;
    case score > 90:
        console.log(`based on your score: ${score} you secures A+ Grade`)
        break;

    default:
          console.log(`Enter Your correct score`)
        break;
}
//  Activity 4 Ternary Operator
const myNum = 15
console.log((myNum / 2 == 0) ? "Even Number" : "Odd Number" )

//  Activity 5 Combining Conditions 
const year = 2024  //----------2024 leap year

if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
    console.log(`${year} is a Leap Year`);
} else {
    console.log(`${year} is not a Leap Year`);
}
