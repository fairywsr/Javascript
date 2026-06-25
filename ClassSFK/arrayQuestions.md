# 🧩 JavaScript Array Practice 20 Mid-Level Questions

## 📌 Instructions

- Solve each problem using JavaScript
- Try without looking at hints first
- Use `console.log()` to verify your output

---

### Q1. Sum of All Elements

Given an array of numbers, return the sum of all elements.

```js
const nums = [10, 20, 30, 40, 50];
// Expected output: 150
```

---

### Q2. Find the Maximum Value

Without using `Math.max()`, find the largest number in an array.

```js
const nums = [3, 67, 2, 89, 45, 12];
// Expected output: 89
```

---

### Q3. Remove Duplicates

Remove all duplicate values from an array and return unique elements only.

```js
const arr = [1, 2, 2, 3, 4, 4, 5];
// Expected output: [1, 2, 3, 4, 5]
```

---

### Q4. Flatten a Nested Array (1 Level Deep)

Flatten an array that contains nested arrays one level deep.

```js
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// Expected output: [1, 2, 3, 4, 5, 6]
```

---

### Q5. Count Occurrences of Each Element

Return an object showing how many times each element appears.

```js
const fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];
// Expected output: { apple: 3, banana: 2, mango: 1 }
```

---

### Q6. Chunk an Array

Split an array into chunks of a given size.

```js
const arr = [1, 2, 3, 4, 5, 6, 7];
const size = 3;
// Expected output: [[1, 2, 3], [4, 5, 6], [7]]
```

---

### Q7. Find Intersection of Two Arrays

Return elements that exist in both arrays.

```js
const a = [1, 2, 3, 4, 5];
const b = [3, 4, 5, 6, 7];
// Expected output: [3, 4, 5]
```

---

### Q8. Rotate an Array

Rotate an array to the right by `k` steps.

```js
const arr = [1, 2, 3, 4, 5];
const k = 2;
// Expected output: [4, 5, 1, 2, 3]
```

---

### Q9. Group by Property

Given an array of objects, group them by a specific property.

```js
const students = [
  { name: "Ali", grade: "A" },
  { name: "Sara", grade: "B" },
  { name: "Zara", grade: "A" },
  { name: "Bilal", grade: "B" },
];
// Expected output:
// { A: [{name:"Ali",...}, {name:"Zara",...}], B: [{name:"Sara",...}, {name:"Bilal",...}] }
```

---

### Q10. Second Largest Number

Find the second largest number in an array (without sorting).

```js
const nums = [10, 5, 20, 8, 15];
// Expected output: 15
```

---

### Q11. Move Zeros to End

Move all `0`s to the end while keeping the order of other elements.

```js
const arr = [0, 1, 0, 3, 12];
// Expected output: [1, 3, 12, 0, 0]
```

---

### Q12. Array Difference

Return elements that are in the first array but NOT in the second.

```js
const a = [1, 2, 3, 4, 5];
const b = [3, 4];
// Expected output: [1, 2, 5]
```

---

### Q13. Sort Objects by Key

Sort an array of objects by a numeric property in ascending order.

```js
const products = [
  { name: "Phone", price: 500 },
  { name: "Laptop", price: 1200 },
  { name: "Tablet", price: 300 },
];
// Expected output: sorted by price → Tablet, Phone, Laptop
```

---

### Q14. Zip Two Arrays

Combine two arrays into an array of pairs.

```js
const keys = ["name", "age", "city"];
const values = ["Faria", 21, "Karachi"];
// Expected output: [["name","Faria"], ["age",21], ["city","Karachi"]]
```

---

### Q15. Running Total (Prefix Sum)

Return a new array where each element is the cumulative sum up to that index.

```js
const nums = [1, 2, 3, 4, 5];
// Expected output: [1, 3, 6, 10, 15]
```

---

### Q16. Find Missing Number

An array contains numbers from 1 to N with one missing. Find it.

```js
const arr = [1, 2, 4, 5, 6]; // N = 6
// Expected output: 3
```

---

### Q17. Partition Array

Split an array into two groups based on a condition (even/odd).

```js
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// Expected output: { even: [2, 4, 6, 8], odd: [1, 3, 5, 7] }
```

---

### Q18. Deep Flatten

Flatten a deeply nested array (any number of levels).

```js
const arr = [1, [2, [3, [4, [5]]]]];
// Expected output: [1, 2, 3, 4, 5]
```

---

### Q19. Matrix Transpose

Transpose a 2D matrix (swap rows and columns).

```js
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Expected output:
// [[1,4,7], [2,5,8], [3,6,9]]
```

---

### Q20. Longest Consecutive Sequence

Find the length of the longest consecutive sequence in an array.

```js
const nums = [100, 4, 200, 1, 3, 2];
// Expected output: 4  (sequence: 1, 2, 3, 4)
```

---

## 💡 Hints (Expand when stuck)

| Q   | Hint                                     |
| --- | ---------------------------------------- |
| Q1  | Use `reduce()`                           |
| Q2  | Loop and track max manually              |
| Q3  | Use `Set` or `filter()` with `indexOf()` |
| Q4  | Use `flat()` or spread inside `concat()` |
| Q5  | Use `reduce()` to build an object        |
| Q6  | Use a `while` loop with `slice()`        |
| Q7  | Use `filter()` + `includes()`            |
| Q8  | Use `slice()` and spread                 |
| Q9  | Use `reduce()` to group into an object   |
| Q10 | Sort descending and pick index 1         |
| Q11 | Use `filter()` twice and spread          |
| Q12 | Use `filter()` + `!includes()`           |
| Q13 | Use `sort()` with a comparator           |
| Q14 | Use `map()` with index                   |
| Q15 | Use `reduce()` and push to result array  |
| Q16 | Use formula `N*(N+1)/2` minus array sum  |
| Q17 | Use `reduce()` to build two groups       |
| Q18 | Use recursion or `flat(Infinity)`        |
| Q19 | Use nested `map()`                       |
| Q20 | Use a `Set` for O(n) lookup              |

---

_Happy coding! 🚀 — 21 Days JS Challenge_
