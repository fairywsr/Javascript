// # First way to write promise 
const promise1 = new Promise(function(resolve, reject){
    // do an async task
    // db tasks 
    //  cryptography
    //  network calls
    setTimeout(()=>{
        console.log("async task is completed")
        resolve()
    }, 1000)
    
}) // promise create

promise1.then(()=>{
    console.log("promise consumed")
})

// # second way to write promise 
new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("async task 2")
        resolve()
    }, 1000)
}).then(function(){
    console.log("async task 2 complete")
})

// # third way to write promise -- with data passing
const promise3 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "fairywsr", email: "fairywsr@gmail.com"})
    }, 1000)
})

promise3.then(function(user){
    console.log("promise3 then block",user)
})

// # forth way to write promise -- with data passing & error and chaining
const promise4 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        const error = true
        if(!error){
            resolve({username: "Adil", password: "234"})
        }else{
            reject("ERROR: Something went wrong")
        }
    },1000)
})

promise4.then(function(data){
    console.log(data)
    return data.username
}).then(function(username){
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=> console.log("m to hr bar chalo ga chaye promise resolve ho ya reject"))

// # fifth way to write promise -- with async await to promise consume 
// async await by default can not handle we use try catch block to handle errors
const promise5 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const error = true
        if(!error){
            resolve({username: "javaScript", password: "12345"})
        }else{
            reject("error: async asawit promise 5 Error")
        }
    }, 1000)
})
async function promise5Consume(){
   try {
     const response = await promise5
     console.log(response)
   } catch (error) {
    console.log(error)
   }
}
promise5Consume()


// ! call api using fetch async await -- try catch
async function getAllUser(){
   try {
     const response = await fetch('https://randomuser.me/api/')  // return one user
    console.log(typeof response)
    console.log(response)
    const data = await response.json()
    console.log(typeof data)
    console.log(data)
   } catch (error) {
    console.log("error", error)
   }
}

getAllUser()


// ! call api using fetch and .then . catch
fetch("https://randomuser.me/api/")
.then((response) => {
return response.json()})
.then( (data) => {
console. log (data)})
.catch((error)=>console.log(error))



```
When you fetch(), what you get first is the HTTP response wrapper (Response object). That wrapper only contains:
Metadata (status, headers, etc.)
A body stream (raw bytes coming from the server).
The body isn’t automatically converted, because the response could be:
JSON (application/json)
Text/HTML (text/html)
Binary (images, PDFs, etc.)
So you choose how to read it:
await response.json() → parse body into a JS object
await response.text() → read body as string
await response.blob() → read as binary Blob (useful for images/files)
await response.arrayBuffer() → raw binary data
await response.formData() → form data
```