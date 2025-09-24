// Activity 1  Array creation & access
const arr1 = [1, 2, 3, 4, 5 ]

console.log(`First element:${arr1[0]}, Last element: ${arr1[arr1.length - 1]}`)

// Activity 2 Basic array methods 
const arr2 = ['faria', 'adil', 'amna', 'bushara', 'aman']
// push
const pushArr2 = arr2.push("alliya")
console.log('pushArr2 variable',pushArr2)
console.log(arr2)
// pop
const popArr2 = arr2.pop()
console.log('popArr2 variable',popArr2)
console.log(arr2)
// shift
const shiftArr2 = arr2.shift()
console.log('shiftArr2 variable',shiftArr2)
console.log(arr2)
// Unshift
const unShiftArr2 = arr2.unshift("ayesha")
console.log('unShiftArr2 variable',unShiftArr2)
console.log(arr2)

// Activity 2 intermidate array methods 
const arr3 = [1, 2, 3, 4, 5]
// map
const mapArr3 = arr3.map((e)=> e * 2)
console.log(mapArr3)
// filter
const filterArr3 = arr3.filter((e)=> e%2 == 0)
console.log(filterArr3)
// reduce
acc = 30
const reduceArr3 = arr3.reduce((e, acc)=> e + acc, initialval = 20)
console.log(reduceArr3)

// Activity 2 array iteration
const arr4 = [1, 2, 3, 4, 5]
// for Loop
for (let i = 0; i < arr4.length; i++) {
    const element = arr4[i];
    console.log(element)
}
// for Each Loop
arr4.forEach(e => {
    console.log("For Each",e)
});

// Activity 2 Multi-dimensional array
const matrixArr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// iteration using forEach
const resultforEachMatrix = matrixArr.forEach((e)=> e)
console.log(resultforEachMatrix) // forEach returns undefine not return any value

// iteration using map
const resulMaptMatrix = matrixArr.map((e)=> e)
console.log(resulMaptMatrix)

console.log(matrixArr[1][1])