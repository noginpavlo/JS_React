// Objects is the samy consept as Python dictionaries.

// Task 1
console.log("Task 1:")

const book = {
  title: "The alchemist",
  author: "Paulo Coelho",
  pages: 208,
};

console.log(book.title);
console.log(book["pages"]);

// Task 2
console.log("Task 2:")

book.pages = 210;
console.log(book["pages"]);

// Loopint through object using for loop
// Important note: for object for ... in loop is used. For other iterables for ... of
console.log("Loopint througth object using for ... in syntax")

for (const key in book) {
  console.log(`Key = ${key}, value => ${book[key]}`)
};

