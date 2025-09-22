// ? for loop
for (let i = 0; i <= 10; i++) {
  const element = i;
  console.log(element);
}

// ? while Loop
const index = 0;
while (index <= 10) {
  console.log(`value of index is ${index}`);
  index = index + 2;
}

// ? do-While
let score = 1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);

// # Array Specific Loops
// ? for of Loop
["", "", ""]
[({}, {}, {})];

const arr = [1, 2, 3, 4, 5, 6, 7];
for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World!";
for (const char of greetings) {
  console.log(`each char is ${char}`);
}

const map = new Map(); // new dataType in js avoid duplicates values and maintain order
map.set("PK", "Pakistan");
map.set("IN", "India");
map.set("BN", "Bangladesh");

console.log(map);

// for of loop in Map
for (const key of map) {
  console.log(kay);
} // return array of key and value
// ['PK', 'Pakistan']
// ['IN', 'India']
// ['BN', 'Bangladesh']

// if you want to only get keys or obnly values than use ⬇️
for (const [key, value] of arr) {
  console.log(`key: ${key} & value is: ${value}`);
}

//  for of Loop on Objects
const myObj = {
  name: "faria",
  age: 20,
  city: "Moro",
  course: "Javascript",
};

for (const [key, value] of myObj) {
  console.log(`key: ${key} & value is: ${value}`);
} // Error Object is not ittrateable

// ? for in Loop
// this loop we can use with objects
for (const key in myObj) {
  console.log(key);
} // print all key

// if we want to print key and values so we can write ⬇️
for (const key in myObj) {
  console.log(`${key} & value is ${myObj[key]}`);
} // print keys + values

// Important: we can use for-in lop on array but default its return only keys (Indexes of array) but we can access values of array using myArr[key]

// Important: on map we can not use for-in-Loop because map is not ittratable

// * Arrays For-of-Loop OR For-each-Loop
// * Objects For-in-Loop
// * Map for-of-Loop

// ? for-each-Loop
//  for each take call back function

const coding = ["js", "ruby", "python", "java", "cpp"];

// way-1
coding.forEach(function (value) {
  console.log(value);
});

// way-2
coding.forEach((item) => {
  console.log(item);
});

// way-3
function printMe(item) {
  console.log(item);
}
coding.forEach(printMe); // only reference don't execute

// for Each--have three parameters item, index & array list
coding.forEach((item, index, arrayList) => {
  console.log(item, index, arrayList);
});

// ? forEach itteration on Array of Objects
const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "C++",
    languageFileName: "c.pp",
  },
];
myCoding.forEach((item)=>{
    console.log(item.languageName)
})


// ? High-Order-function HOF in js
// In JavaScript, a higher-order function is a function that does at least one of these:
// Takes another function as an argument (callback).
// Returns a function as its result.

// example HOF
// function taking another function
function greet(name) {
  return `Hello, ${name}`;
}
function higherOrder(func, value) {
  return func(value);  // calls the passed function
}
console.log(higherOrder(greet, "Faria")); // "Hello, Faria"

// --function returning anOther function
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(2);
console.log(double(5)); // 10

// Build-in-hight-order functions in js
// map      ----perform operation based on condition
// filter    ---- true / false
// reduce
// forEach    --- itterate over all items

//* map → transform items → returns new array.
//* filter → select items → returns new array.
//* reduce → combine items → returns single value.
//* forEach → just loop → returns nothing.

// Important forEach does not return any value

const Mynum1 = [2, 3, 4, 5, 6, 7]
const newNum1 = Mynum.filter( (num)=> num > 4)
console.log(newNum1) // [5, 6, 7]

const Mynum = []
Mynum.forEach( (num)=> {
     if(num >4){
      Mynum.push(num)
     }
})

// map // returned 
newValue = Mynum1.map((num)=> num + 10)
console.log(newValue)

// reduce // returned 
const myShoppingCart = [
  {
    course: "javascript",
    price: 5999
  },
  {
    course: "python",
    price: 7999
  },
  {
    course: "Mobile development",
    price: 8999
  },
  {
    course: "Data science",
    price: 5999
  },
]

const total = myShoppingCart.reduce( (acc, curVaal)=>(acc+ curVaal.price), 0)