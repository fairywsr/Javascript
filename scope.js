{ } // scope in functioon state and loops ---block scope

if (true) {
  let a = 10;
  const b = 20;
  var c = 30; // has global access 
}

console.log(a); // let a is not define
console.log(b); 
console.log(c);

// in node and windows global scope are different

// 2nd video on scope 
// ==========Nested Scope =========
function one(){
    const userName = "Faria"

    function two(){
        const website = "youtube"
        console.log(userName)
    }
    console.log(website)

    two()
}

one() // child can access all variables of parent function but parent function can not access any variable of child function 

