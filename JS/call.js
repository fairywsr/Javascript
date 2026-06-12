function setUserName(username){
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUserName.call(this, username)
    this.email = email,
    this.password = password
}

const chai = new createUser("Faria", "faria@gmail.com", "123")
    console.log(chai)


    // Notes: basically hamare pass call stack m hr function apna execution conext bnata h phele createUser apna execution context bnaye ga or hum ne us k ander setUserName function call kia hn jase hi setUserName function execution context bnaye ga or call ho ga wse hi memory free ho jaye gi or variables bhi sab delete isi lia hame username ki access nhi mille gi us ki jagha null return ho ga is problem k solution k lia jase hi hum setUserName function createUser m call kre gye wse hi sath m .call use kre gye or isi k sath hum parameter m this, pass kre gye k ap us function k this nhi global this use kre--- .call jo hn wo hamara current execution context kisi or function ko pass kr deta hn........