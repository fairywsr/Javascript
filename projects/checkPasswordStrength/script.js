const inputField = document.getElementById("password");
const outputField = document.getElementById("output");

inputField.addEventListener("input", passwordStrength);

function passwordStrength() {
  console.log(inputField.value);
  const value = inputField.value;
  if (value.length < 8) {
    outputField.innerText = "Password is to short";
    outputField.style.color = "red";
  } else {
    outputField.innerText = "password is long enough";
    outputField.style.color = "green";
    console.log(`check lowercase: ${value.search(/[a-z]/)}`);
    if (value.search(/[a-z]/) == -1) {
      outputField.innerText = "password missing lowercase letters";
      outputField.style.color = "red";
    } else if (value.search(/[A-Z]/) == -1) {
      outputField.innerText = "password missing uppercase letters";
      outputField.style.color = "red";
    } else if (value.search(/[0-9]/) == -1) {
      outputField.innerText = "password missing numbers";
      outputField.style.color = "red";
    } else if (value.search(/[!/@/#/$/%/^/&/*/=/+/_/-/(/)/{/?/}/]/) == -1) {
      outputField.innerText = "password missing special characters";
      outputField.style.color = "red";
    } else {
      outputField.innerText = "password is strong";
      outputField.style.color = "green";
    }
  }
}
