// Almost Python. The simplest way to define function
function greet(name) {
  return `Hello, {name}!`;
}

console.log(greet("Pavlo"));

// Something like defining a variable and store a function in this variable
// Basically it is function declaration
const addItem = function(item) {
  return `Added {item} item!`;
}

console.log(addItem("Book"));

// This is the same as above, but the 'function' keyword is replaced by arrow =>
const saveThing = (thing) => {
  return `Thing {thing} is saved!`;
}

console.log(saveThing("Computer"));
