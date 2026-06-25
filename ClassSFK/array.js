const products = [
  {
    title: "t-shirt-A",
    price: 5000,
    color: "white",
    stock: 67,
    ratings: "*****",
  },
  {
    title: "t-shirt-B",
    price: 4500,
    color: "half-white",
    stock: 60,
    ratings: "*****",
  },
  {
    title: "t-shirt-C",
    price: 4000,
    color: "blue",
    stock: 57,
    ratings: "*****",
  },
  {
    title: "t-shirt-D",
    price: 3500,
    color: "yellow",
    stock: 50,
    ratings: "*****",
  },
  {
    title: "t-shirt-E",
    price: 3000,
    color: "green",
    stock: 47,
    ratings: "*****",
  },
];

// for of
for (product of products) {
  console.log(product.title, product.price, product.color);
}

// map
const mapProd = products.map((product) => {
  return (product.price, product.color, product.stock);
});

console.log(mapProd);

// filter
const filterProd = products.filter((product) => {
  return product.price >= 4000;
});
console.log(filterProd);

filterProd.map((prod) => {
  console.log(prod.color);
});

// map + filter + reduce
const total = products
  .filter((prod) => {
    return prod.price >= 4000;
  })
  .map((prod) => {
    return prod;
  })
  .reduce((acc, val) => acc + val.price, 0);
console.log(total);

// map + filter + reduce
const digits = [8, 6, 9, 4, 23, 7, 5, 8];
const mapDigit = digits.map((digit) => digit ** 3);
const filDigit = mapDigit.filter((digit) => digit >= 350);
const minusDigit = filDigit.map((digit) => digit - 7);
const totalSum = minusDigit.reduce((sum, digit) => sum + digit, 0);
console.log(totalSum);
const students = [
  {
    name: "abc",
    marks: 89,
  },
  {
    name: "def",
    marks: 49,
  },
  {
    name: "ghi",
    marks: 78,
  },
];

// map + filter + reduce
const totalMarks = students.reduce((acc, val) => acc + val.marks, 0);
console.log(totalMarks);
const average = totalMarks / students.length;
console.log(`average ${average}`);
