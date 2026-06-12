// getter & setter using class 
class User {
    constructor(email, password){
        this.email = email,
        this.password = password
    }
      get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}iudnxhuxi`
    }
    set password(value){
        this._password = value
    }
}

const faria = new User("faria@google.com", "abc")
console.log(faria.password)
console.log(faria.email)


// getter & setter using prototype ---function base
function UserFanBase(email, password){
     this._email = email,
     this._password = password

    //  email
     Object.defineProperty(this, "email", {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
     })
    //  password
     Object.defineProperty(this, "password", {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
     })
}

const UserFaria = new UserFanBase("adil@google.com", "abc")
console.log(UserFaria.email)
console.log(UserFaria.password)


// getter & setter using prototype ---object base
const UserObjBase = {
    _email: "farAdl@gmail.com",
    _password: "123abc",

    get email(){
       return this._email.toUpperCase()
    },
    set email(value){
        this._email = value;
    },
}

const userTwo = Object.create(UserObjBase)
console.log(userTwo.email)