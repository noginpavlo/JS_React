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
  return `Thing ${thing} is saved!`;
}

console.log(saveThing("Computer"));


// Task 3
console.log("Task 3:");

const add = (a, b) => {
  return a + b;
}
console.log(add(1, 2));


// Task 4
console.log("Task 4:");

const isEven = (number) => number % 2 === 0;

console.log(isEven(2))
console.log(isEven(3))

// Task 5
console.log("Task 5:");

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const doubledNumbers = nums => nums.map(n => n * 2);

console.log(doubledNumbers(numbers));

