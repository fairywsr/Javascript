# 🧠 JavaScript — Logic Building Practice Questions

> **Focus:** Loops, nested loops, conditions — bilkul manually, koi built-in shortcut nahi
> **Rule:** `map`, `filter`, `flat`, `Set` use mat karo — sirf `for` loop, `if`, aur basic array methods (`push`, `length`)

---

## 🟡 LEVEL 1 — Single Loop Logic

### Q1. Print All Elements

Array ke har element ko manually print karo using a loop.

```js
const arr = [10, 20, 30, 40, 50];
// Expected output:
// 10
// 20
// 30
// 40
// 50
```

---

### Q2. Sum of All Elements

Loop laga ke saare numbers add karo.

```js
const arr = [5, 10, 15, 20];
// Expected output: 50
```

💡 _Hint: ek `total = 0` variable banao, har step pe add karte jao_

---

### Q3. Count Even Numbers

Array mein kitne even numbers hain?

```js
const arr = [1, 2, 3, 4, 5, 6];
// Expected output: 3
```

💡 _Hint: `num % 2 === 0` → even hai_

---

### Q4. Find Maximum Number

Bina `Math.max()` ke sabse bada number dhundo.

```js
const arr = [3, 67, 2, 89, 45];
// Expected output: 89
```

💡 _Hint: `let max = arr[0]` se shuru karo, loop mein compare karo_

---

### Q5. Reverse an Array

Bina `.reverse()` ke array ulta karo.

```js
const arr = [1, 2, 3, 4, 5];
// Expected output: [5, 4, 3, 2, 1]
```

💡 _Hint: loop ko end se shuru karo → `i = arr.length - 1` se `i >= 0` tak_

---

### Q6. Copy Only Positive Numbers

Sirf positive numbers ek naye array mein daalo.

```js
const arr = [-3, 5, -1, 8, -2, 4];
// Expected output: [5, 8, 4]
```

💡 _Hint: `if(num > 0)` → push karo_

---

### Q7. Check if Element Exists

Bina `.includes()` ke check karo ke `7` array mein hai ya nahi.

```js
const arr = [1, 3, 5, 7, 9];
// Expected output: true
```

💡 _Hint: loop mein har element se compare karo, mila to `found = true`_

---

## 🟠 LEVEL 2 — Condition + Accumulation

### Q8. Separate Even and Odd

Ek loop mein even aur odd alag alag arrays mein daalo.

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// Expected output:
// even: [2, 4, 6, 8]
// odd:  [1, 3, 5, 7]
```

---

### Q9. Count Occurrences of a Value

`3` kitni baar aaya array mein?

```js
const arr = [1, 3, 2, 3, 4, 3, 5];
// Expected output: 3
```

💡 _Hint: `let count = 0` → loop mein `if(arr[i] === 3)` count++_

---

### Q10. Remove a Specific Value

`0` ko array se hata do (naye array mein sirf non-zero values).

```js
const arr = [0, 1, 0, 3, 12, 0];
// Expected output: [1, 3, 12]
```

---

### Q11. Find First Duplicate

Pehla element dhundo jo ek se zyada baar aaya ho.

```js
const arr = [4, 6, 2, 6, 8, 4];
// Expected output: 6
```

💡 _Hint: ek `seen = []` banao, agar element pehle se seen mein hai → yahi answer hai_

---

### Q12. Second Largest Number

Array mein doosra sabse bada number dhundo.

```js
const arr = [10, 5, 20, 8, 15];
// Expected output: 15
```

💡 _Hint: `let first = 0, second = 0` — loop mein dono update karte jao_

---

### Q13. Move Zeros to End

Saare zeros end mein bhejo, baaki order same rakho — naye array mein.

```js
const arr = [0, 1, 0, 3, 12];
// Expected output: [1, 3, 12, 0, 0]
```

💡 _Hint: pehle non-zero push karo, phir zero count karke push karo_

---

### Q14. Running Total

Naya array banao jahan har index pe cumulative sum ho.

```js
const arr = [1, 2, 3, 4, 5];
// Expected output: [1, 3, 6, 10, 15]
```

💡 _Hint: `let total = 0` → har step pe add karo aur push karo_

---

## 🔴 LEVEL 3 — Nested Loop Logic (Flatten type)

### Q15. Flatten Nested Array — 1 Level

Nested array ko manually flat karo using nested loop.

```js
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// Expected output: [1, 2, 3, 4, 5, 6]
```

💡 _Hint: outer loop → sub-array, inner loop → us sub-array ke elements_

---

### Q16. Sum of Each Sub-Array

Har sub-array ka alag sum nikalo.

```js
const arr = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];
// Expected output: [6, 9, 30]
```

💡 _Hint: outer loop → sub-array, inner loop → sum karo, push karo_

---

### Q17. Find Maximum in Each Sub-Array

Har sub-array ka max nikalo.

```js
const arr = [
  [3, 1, 4],
  [1, 5, 9],
  [2, 6, 5],
];
// Expected output: [4, 9, 6]
```

---

### Q18. Count Total Elements in Nested Array

Nested array mein total kitne elements hain?

```js
const arr = [[1, 2], [3, 4, 5], [6]];
// Expected output: 6
```

💡 _Hint: nested loop + counter_

---

### Q19. Flatten and Find Sum

Pehle flatten karo, phir sum nikalo — sab manually.

```js
const arr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// Expected output: 21
```

---

### Q20. Find Duplicates in Nested Array

Nested array ko flat karo phir duplicates dhundo.

```js
const arr = [
  [1, 2],
  [2, 3],
  [3, 4],
];
// Expected output: [2, 3]  ← ye dono baar aaye
```

💡 _Hint: pehle flatten karo (Q15 wala), phir Q11 wala logic lagao_

---

## 📋 Progress Tracker

| Q   | Topic                 | Done? |
| --- | --------------------- | ----- |
| Q1  | Print elements        | ⬜    |
| Q2  | Sum                   | ⬜    |
| Q3  | Count even            | ⬜    |
| Q4  | Max number            | ⬜    |
| Q5  | Reverse               | ⬜    |
| Q6  | Filter positive       | ⬜    |
| Q7  | Element exists        | ⬜    |
| Q8  | Even/Odd split        | ⬜    |
| Q9  | Count occurrences     | ⬜    |
| Q10 | Remove value          | ⬜    |
| Q11 | First duplicate       | ⬜    |
| Q12 | Second largest        | ⬜    |
| Q13 | Move zeros            | ⬜    |
| Q14 | Running total         | ⬜    |
| Q15 | Flatten 1 level       | ⬜    |
| Q16 | Sum each sub-array    | ⬜    |
| Q17 | Max each sub-array    | ⬜    |
| Q18 | Count nested elements | ⬜    |
| Q19 | Flatten + Sum         | ⬜    |
| Q20 | Duplicates in nested  | ⬜    |

---

## 🧠 Golden Rules (Yaad Rakho)

```
1. Koi bhi problem mein pehle socho → mujhe kya chahiye? (output)
2. Phir socho → mujhe kya karna hoga? (steps)
3. Phir likho → loop kaisa hoga?

Loop = ek ek element dekh raha hoon
If   = condition check kar raha hoon
Push = result mein daal raha hoon
```

---

_21 Days JS Challenge — Logic First, Shortcuts Later! 💪_
