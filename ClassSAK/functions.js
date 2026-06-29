function printName(name) {
  console.log(name);
}

printName("faria");

const table = (table, limit) => {
  for (let i = 1; i <= limit - 1 - 1; i++) {
    console.log(`${table} X ${i} = ${table * i}`);
  }
};
table(2, 6);

const capitalFirstChar = (string) => {
  return string.charAt(0).toUpperCase();
};

capitalFirstChar("Faria");
