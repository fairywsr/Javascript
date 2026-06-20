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
function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return `${year} is a leap year`;
  }
  return `${year} is not a leap year`;
}

//6------Check if a Character is Uppercase, Lowercase, Digit, or Special Character

function checkChar(char) {
  if (typeof char !== "string" || char.length !== 1 || char === "") {
    return `${char} is not a valid Character`;
  }
  if (/^[A-Z]$/.test(char)) {
    return `${char} is UpperCase`;
  } else if (/^[a-z]$/.test(char)) {
    return `${char} is lowerCase`;
  } else if (/^[0-9]$/.test(char)) {
    return `${char} is Number`;
  } else {
    return `${char} is invalid character`;
  }
}

//7------Check Triangle Type Using Sides and Angles
function checkTriangleType(a, b, c) {
  if (a === b && a === c && b === c) {
    return `(All sides are equal ) Equilateral Triangle`;
  } else if (
    (a !== b || a !== c || b !== c) &&
    (a === b || a === c || b === c)
  ) {
    return `(Two sides equal one is different) Isosceles Triangle:`;
  } else if (a !== b && a !== c && b !== c) {
    return `(All sides different) Scalene Triangle`;
  }
}

//8------Calculate Income Tax Based on Slabs
function calculateTax(income) {
  const incomeNum = Number(income);
  let tax = 0;

  if (incomeNum <= 250000) {
    return `No Tax`;
  } else if (incomeNum > 250000 && incomeNum <= 500000) {
    return (tax += (5 / 100) * incomeNum);
  } else if (incomeNum > 500000 && incomeNum <= 1000000) {
    return (tax += (20 / 100) * incomeNum);
  } else {
    return (tax += (30 / 100) * incomeNum);
  }
}
