// 1---Print All Elements
const arr = [10, 20, 30, 40, 50];
for (let i = 0; i <= arr.length - 1; i++) {
  console.log(arr[i]);
}

//2----Sum of All Elements
const arrSum = [5, 10, 15, 20];
let total = 0;
for (let i = 0; i <= arrSum.length - 1; i++) {
  total += arrSum[i];
}
console.log("outside loop total", total);

//3----Count Even Numbers
const evenArr = [1, 2, 3, 4, 5, 6];
let sumOfEven = 0;
for (let i = 0; i <= evenArr.length - 1; i++) {
  if (evenArr[i] % 2 === 0) {
    sumOfEven += 1;
  }
}
console.log(sumOfEven);

//4----Find Maximum Number
const maxArr = [3, 67, 2, 89, 45];
let maxNum = 0;
for (i = 0; i <= maxArr.length - 1; i++) {
  if (maxArr[i] >= maxNum) {
    maxNum = maxArr[i];
  }
}
console.log(maxNum);

//----Reverse an Array
const revArr = [1, 2, 3, 4, 5];
let reverseArr = [];
for (let i = revArr.length - 1; i >= 0; i--) {
  reverseArr.push(revArr[i]);
}
console.log(reverseArr);

//----Copy Only Positive Numbers
const posArr = [-3, 5, -1, 8, -2, 4];
let positiveNum = [];
for (let i = 0; i <= posArr.length - 1; i++) {
  if (posArr[i] > 0) {
    console.log(posArr[i]);
    positiveNum.push(posArr[i]);
  }
}
console.log(positiveNum);

// ----Check if Element Exists
const existArr = [1, 3, 5, 7, 9];
let found = 9;
for (let i = 0; i <= existArr.length - 1; i++) {
  if (found === existArr[i]) {
    console.log(`True ${found} is exist`);
  } else {
    console.log(`False ${found} not exist`);
  }
}
