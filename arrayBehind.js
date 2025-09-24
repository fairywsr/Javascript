//  Array behind the scene
const myArray = [];
// %DebugPrint(myArray);

// continous, holey

// optimization of array in js
// 1 SMI (small integer)
// 2 Packd Element
// 3 Double (float, sting, function)

const arrTwo = [1, 2, 3, 4, 5];
// PACKED_SMI_ElEMENTS

arrTwo.push[6.0];
// PACKED_DOUBLE_ELEMENTS

arrTwo.push("7");
// PACKED_ELEMENTS

arrTwo[10] = 11;
// HOLEY_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log([9]);

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.protoType, 10)
// hasOwnProperty(Object.protoType, 10)
// holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5, 6];

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3);
//  just three holes. HOLEY_SMI_ELEMENTS
arrFour[0] = "1"; // HOLEY_ELEMENTS
arrFour[1] = "2"; // HOLEY_ELEMENTS
arrFour[2] = "3"; // HOLEY_ELEMENTS

const arrFive = [];
arrFive.push("1"); // PACKED_ELEMENTS
arrFive.push("2"); // PACKED_ELEMENTS
arrFive.push("3"); // PACKED_ELEMENTS
