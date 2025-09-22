//  inheritance in js
class User{
    constructor(username){
        this.username = username
    }
    loggIn(){
        return`User logIn ${this.username}`
    }
}

class Teacher extends User{
    constructor(username, email, password){
      super(username)
      this.email = email,
      this.password = password
    }
    addCourse(){
        console.log(`A new course add by ${this.username}`)
    }
}


const user = new Teacher("faria", "far@gmail.com", "12345")
console.log(user.addCourse())

const userTwo = new User("Adil")
console.log(userTwo.loggIn())

// Notes: upper wale code m phele hum ne User name se class bna or fr Teacher wali class m user class ko extend kia (teacher class m user class k features inherit kiye)--(user bhi teacher ho sakte hn) ab ES6 k class javascript m introduce hui is k sath hi super() keyword jo teacher class m use kia hn -- super keyword is lia q k this k context only current hota hn jase hi wo function run huwa memory free,, super(username) → parent class (User) ka constructor call karne ke liye use hota hai. Agar ye na likho, to this.username set hi nahi hoga aur error throw karega. Ab Teacher ke objects ke paas User ke saare methods + apne methods dono hote hain. q k hame user name k reference chaiye to isi lia super keyword use hota hn is se phele is problem k lia call keyword this parameter k sath use hota tha ... prototype wali file m explain kia hn

console.log(user === userTwo) // false 
console.log(user === Teacher) // false 
console.log(user instanceof Teacher) // true
console.log(user instanceof User) // true


