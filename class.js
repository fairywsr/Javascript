 ES6
class User{
     constructor(username, email, password){
        this.username = username,
        this.email = email,
        this.password = password
     }
        encryptPassword(){
            return this.password
        }
        changeUserName(){
            return `${this.username.toUpperCase()}`
        }
}

const chai = new User("faria", "far@gmail.com", "123")

console.log(chai.encryptPassword())
console.log(chai.changeUserName())

// Notes: upper wale class m run time error aye ga because niche same name se function declare hn // SyntaxError: Identifier 'User' has already been declared so comment upper code than run --hum class keyword se or prototype se same kam kr sakte hn class keyword ES6 m aya hn 

//! Behind the scene in js
function User(username, email, password){
      this.username = username,
    this.email = email,
    this.password = password
}
User.prototype.encryptPassword = function(){
    return this.password
}
User.prototype.changeUserName = function(){
     return `${this.username.toUpperCase()}`
}

const tea = new User("Adil", "far@gmail.com", "123")
console.log(tea.encryptPassword())
console.log(tea.changeUserName())