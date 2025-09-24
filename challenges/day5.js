// Functions
// # Activity-1 function decleration
function evenOdd(num) {
  if (num % 2 == 0) {
    return console.log(`${num} is Even Number`);
  } else {
    return console.log(`${num} is odd Number`);
  }
}

function exponent(base, exponent) {
  return console.log(base ** exponent);
}
function square(num) {
  return console.log(num * num);
}

// # Activity-2 function expression
const maximumNum = function (numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
};

// console.log(maximumNum([3, 4, 5, 7,67, 56,93,77, 100]))

// concatenate two strings
const concatenate = function (str1, str2) {
  return str1 + str2;
};

// console.log(concatenate("Hello ", "Faria"))

//# Activity-3 Arrow function
sum = (num1, num2) => {
  total = num1 + num2;
  return total;
};
// console.log(sum(78, 78))

isStr = (string, character) => {
  char = string.includes(character);
  return char;
};
// console.log(isStr("faria", "A"))

//# Activity-4 function parameters and default values 
function studentCard(id, name = "Sam"){
       return (`My name is ${name} and my Student Id is ID: ${id}`)
}
// console.log(studentCard("484848"))

function myInfo(name, age=45){
    return(`Hello & Good Morning my name is ${name} and my age is ${age}`)
}
console.log(myInfo("Faria", 16))

//# Activity-5 HOF
function repeatfunction(fn, times){
     for (let i = 0; i < times; i++) {
      fn()
     }
 }

 repeatfunction(()=>console.log('Hello I am inner function of loop'), 6)

//
function composeFunction(fn1, fn2, value){
  return fn2(fn1(value))
}

const toupper = (str)=> str.toUpperCase()// 1st fn
const addExclamation = (str)=> str + "!"
console.log(composeFunction(toupper, addExclamation, "faria"))

