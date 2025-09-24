// Loops
// Activity 1 -- for Loop
for (let i = 1; i <= 10; i++) {
  // console.log(i);
}

for (let i = 1; i <= 10; i++) {
  //   console.log(`5 * ${i} = ${5 * i}`)
}

// Activity 2 -- while Loop
let totalCount = 0;
let num = 1;
while (num <= 10) {
  // console.log(num)
  num++;
  totalCount += num;
}
// console.log(totalCount) //65

let num1 = 10;
while (num1 >= 1) {
//   console.log(num1);
  num1--;
}

// Activity 3 -- Do-while Loop
let num2 = 1
do {
    console.log(num2)
    num2++
} while (num2 <= 5);

// Factorial of number
const factNum = 5  // 120
let result = 1
let i = 1
do {
    result*= i
    i++
} while (i <= factNum);
console.log(`Factorial of ${factNum} is ${result}`)

// Activity 4 --Nested Loop
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}


// Activity 5 Loop Control Statements
// ----skip 5
for (let i = 1; i <= 10; i++) {
    if(i == 5){
        continue
    }
   console.log(i)
}

// break loop at 7
for (let i = 1; i <= 10; i++) {
   if(i == 7){
    break
   }
    console.log(i)
}