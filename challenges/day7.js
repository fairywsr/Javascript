//  Activity 1 object creation and access
const bookData = {
    title: "Stories by John",
    author: "john",
    year: 2002,
    bookAuthor: function(){
        return `Book title is: ${this.title}, & author is: ${this.author}`},
    updateAuthorDetails: function(updateYear){
         return `this book is publish in the year: ${updateYear}`
    }    // without this keyword we are getting error due to scope
}

console.log(bookData)
console.log(bookData.title) // Stories by John
console.log(bookData.author) //john

//  Activity 2 function in objects object
console.log(bookData.bookAuthor())
console.log(bookData.updateAuthorDetails(2026))

// Activity 3 Nested objects
// Create a nested object for the library
const library = {
  name: "City Central Library",
  location: "Downtown",
  books: [
    {
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2008
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      year: 2018
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008
    }
  ]
};

console.log(library);
console.log(`name of library:${library.name} & title of all books: ${library.books.map((book)=>book.title).join(", ")}`)

// Activity 4 this in objects
const bookData2 = {
    title: "Stories by John",
    author: "john",
    year: 2002,
    getAuthorName: function(){
         return `title of book is : ${this.title} & year ${this.year}`
    }
}
console.log(bookData2.getAuthorName())

// Activity 5 object iteration
for (const key in bookData2) {
    if(typeof bookData2[key] !== "function"){
        console.log(`key is ${key} and value is ${bookData2[key]}`)
    }
}
console.log(typeof bookData2.getAuthorName)

console.log(Object.keys(bookData2)) // returns Array of keys
console.log(Object.values(bookData2)) // return array of values 