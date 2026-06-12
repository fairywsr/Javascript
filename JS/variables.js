var name = "faria"; // 'var' is function-scoped (not block-scoped). 
// You CAN redeclare with var, but it's not recommended.

let result = 55; //  you can reassign later (result = 100)

const hobbies = "reading"; 
//  'const' cannot be reassigned or redeclared

let Myfullname; 
//  declared, but value is 'undefined'

hobby = "new";  
//  You didn’t declare 'hobby' with let/const/var. 
// This creates an **implicit global variable**, which is bad practice.

console.table([name, result, hobbies, hobby, Myfullname]);
