const passwordInput = document.getElementById("pass-input");
const passInput = document.getElementById("pass-input");
const copyButton = document.getElementById("copy");
const checkLength = document.getElementById("length-number");
const checkUppercase = document.getElementById("Uppercase");
const checkLowercase = document.getElementById("lowercase");
const checkNum = document.getElementById("number");
const checkSpecialChar = document.getElementById("specialChar");
const generateBtn = document.getElementById('generate')

const upperStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerStr = "abcdefghijklmnopqrstuvwxyz";
const numStr = "0123456789";
const specialStr = "!@#$%^&*()_-+=}]{[|?/<,>.";
 let password = ''
function generatePassword() {
  let str = "";
  if (checkUppercase.checked) {
    str += upperStr;
  }

  if (checkLowercase.checked) {
    str += lowerStr;
  }

  if (checkNum.checked) {
    str += numStr;
  }

  if (checkSpecialChar.checked) {
    str += specialStr;
  }
  console.log("Str:",str)
 
  for (let i = 0; i < checkLength.value; i++) {
    console.log(str.length, "str.length")
    let index = Math.floor(Math.random() * str.length)
    console.log(index, "index")
    console.log("Math.random{)", Math.random())
    console.log("Math.Random * str.lngth", Math.random() * str.length)
    console.log(Math.floor(Math.random() * str.length, "Math.floor(Math.random() * str.length"))
    console.log(str[index])
    password += str[index]
  }
  console.log(password, "password")
  passInput.value = password
}

generateBtn.addEventListener('click', generatePassword)


copyButton.addEventListener('click', ()=>{
    if(passInput.value === ''){
       alert("Please generate a password first")
    }else{
        navigator.clipboard.writeText(passInput.value)
          alert('Password copied to clipboard')
    }
    console.log(passInput.value)
})


// old approach copy to clipboard
// copyButton.addEventListener('click', ()=>{
//     if(passInput.value === ''){
//        alert("Please generate a password first")
//     }else{
//         const newEle = document.createElement('textarea')
//         newEle.value = passInput.value
//         document.body.appendChild(newEle)
//         newEle.select()
//         document.execCommand('copy')
//         alert('Password copied to clipboard')
//         newEle.remove()
//     }
// })