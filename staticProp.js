class User {
    constructor(username){
      this.username = username
    }

    isLogIn(){
        console.log(`User ${this.username} is login in`)
    }

    static createId(){
        console.log(`user id is: 12345`)
    }
}

const user = new User("faria")
user.isLogIn()
// console.log(user.createId())  // TypeError: user.createId is not a function
// static keyword put limitations on function