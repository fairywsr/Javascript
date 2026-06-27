const prompt = require("prompt-sync")();

//1----Print Right-Angled Star Triangle
// const rows = Number(prompt("Enter rows ..."));
// for (let i = 1; i <= rows; i++) {
//   let rowStr = "";
//   for (let j = 1; j <= i; j++) {
//     rowStr += " * ";
//   }
//   console.log(rowStr);
// }

//1----Print Inverted Right-Angled Triangle
const rows = Number(prompt("Enter rows..."));
for (i = rows; i >= 1; i--) {
  let rowStr = "";
  for (j = i; j >= 1; j--) {
    rowStr += " * ";
  }
  console.log(rowStr);
}
//1----Print Pyramid Pattern
// Day 3 Incomplete Question  