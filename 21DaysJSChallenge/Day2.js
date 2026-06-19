//1------Find the Maximum of Three Numbers
function maxNum(a, b, c) {
  // debugger;
  if (a >= b && a >= c) {
    console.log(a, " is greater");
  } else if (b >= c && b >= a) {
    console.log(b, " is greater");
  } else {
    console.log(c, " is greater");
  }
}
// console.log(maxNum(4, 5, 1));

//2------Check if a Number is Positive, Negative, or Zero
function checkNum(num) {
  if (num > 0) {
    console.log(num, "is positive");
  } else if (num < 0) {
    console.log(num, "is megative");
  } else {
    console.log(num, "is zero");
  }
}
// checkNum(19);

//3------Calculates Electricty Bill
function calculateUnits(units) {
  Number(units);
  let totalBill = 0;
  if (units >= 0 && units <= 100) {
    totalBill = units * 5;
  } else if (units >= 100 && units <= 200) {
    totalBill = units * 7;
  } else if (units >= 200 && units <= 300) {
    totalBill = units * 10;
  } else {
    totalBill = units * 12;
  }
  return totalBill;
}
// console.log(calculateUnits(400));

//4------Check if a Character is a Vowel or Consonant
function checkVowel(char) {
  const smallChar = char.toLowerCase();
  console.log(smallChar);
  if (
    smallChar === "a" ||
    smallChar === "e" ||
    smallChar === "i" ||
    smallChar === "o" ||
    smallChar === "u"
  ) {
    return `${char} is Vowel`;
  } else if (/[a-z]/.test(smallChar)) {
    return `${char} is Consonant`;
  } else {
    return "Invalid Character";
  }
}
// console.log(checkVowel("1"));

//5------Check if a Year is a Leap Year
function checkLeapYear() {}
