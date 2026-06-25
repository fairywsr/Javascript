// ----Given an array of numbers, return the sum of all elements.
const num = [10, 20, 30, 40, 50];

const sum = num.reduce((acc, val) => acc + val, 0);
// console.log(sum);

//---- Given an array of numbers, return the sum of all elements.

let num1 = [3, 67, 2, 89, 45, 12];
let bigNum = 0;
// solution 1
for (let num of num1) {
  if (num >= bigNum) {
    bigNum = num;
  }
}
// console.log(bigNum);

// ----Remove Duplicates
const arr = [1, 2, 2, 3, 4, 4, 5];
const remDuplicates = arr.map((num) => {});

// ----Print Months start witn M
const months = ["January", "Feburary", "March", "April", "May", "December"];

const newMonths = months.filter((month) => {
  return month.includes("M") || month.includes("m");
});
console.log(newMonths);

// ----Find adults students
const students = [
  {
    name: "Adil",
    age: 27,
  },
  {
    name: "Afaque",
    age: 25,
  },
  {
    name: "Saad",
    age: 40,
  },
  {
    name: "Furqan",
    age: 18,
  },
  {
    name: "Awais",
    age: 17,
  },
];

const adultStudents = students.filter((studen) => {
    return studen.age >= 18;
  }),
