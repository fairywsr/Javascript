// const prompt = require("prompt-sync")();
// // 1----- Print Numbers from 1 to N
// let num = Number(prompt("Enter a number "));
// for (let i = 1; i <= num; i++) {
//   console.log(i);
// }

// // 2----- Print Numbers from N to 1 without changing the loop condition of above question
// let lessNum = Number(prompt("Enter You'r number "));
// for (let i = 1; i <= lessNum; i++) {
//   console.log(lessNum - i + 1);
// }

// // 3----- Print All Even Numbers from 1 to N
// const evenNum = Number(prompt("Enter Number "));

// for (let i = 0; i <= evenNum; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// // 4-----  Sum of First n Natural Numbers
// // solution 1
// console.time();
// const NaturalNumA = 1000000000n;
// let sumOfNaturalNum = 0;
// for (let i = 1; i <= NaturalNumA; i++) {
//   sumOfNaturalNum += i;
// }
// console.log(sumOfNaturalNum);
// console.timeEnd();

// // solution 2
// console.time();
// const NaturalNumb = 1000000000;
// let sumOfNaturalNum = (NaturalNumb * (NaturalNumb + 1)) / 2;
// console.log(sumOfNaturalNum);
// console.timeEnd();

// // 5-----  Product (Factorial) of N
// const factorialNum = Number(prompt("Enter number here: "));
// let factorial = 1;
// for (let i = 1; i <= factorialNum; i++) {
//   console.log((factorial *= i));
// }

// // 6----- Sum of All Even Numbers up to N
// const evenNum = Number(prompt("Enter num: "));
// let evenSum = 0;
// for (let i = 0; i <= evenNum; i++) {
//   if (i % 2 === 0) evenNum += i;
// }
// console.log(evenSum);

// // 7-----Print Squares of Numbers from 1 to N
// const num = Number(prompt("Enter Number..."));

// for (let i = 1; i <= num; i++) {
//   console.log(i ** 2);
// }

// // 8----- Print all numbers divisible by 3 and 5 up to N
// const num = Number(prompt("Enter Number "));
// for (let i = 0; i <= num; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// // 9----- Find the sum of all odd numbers up to N
// const num = Number(prompt("Enter number"));
// let oddSum = 0;
// for (let i = 0; i <= num; i++) {
//   if (i % 2 !== 0) {
//     console.log("old numbers", i);
//     oddSum += i;
//     console.log(oddSum);
//   }
// }
// console.log(oddSum);

// // 10----- Print the cubes of numbers from 1 to N
// const num = Number(prompt("Enter number.. "));
// for (let i = 1; i <= num; i++) {
//   console.log(i ** 3);
// }

// // 11----- Print only the numbers that are both even and perfect squares
// const num = Number(prompt("Enter Numbers.."));
// for (let i = 0; i <= num; i++) {
//   if (i % 2 === 0 && Math.sqrt(i) % 1 === 0) {
//     console.log(i);
//   }
// }

// 12----Flatten a Nested Array (1 Level Deep)
const arr = [
  [1, 2], // i = 0
  [3, 4],
  [5, 6],
];
const flattenArr = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    flattenArr.push(arr[i][j]);
  }
}
console.log(flattenArr); // [1, 2, ,3 , 4, 5, 6]
