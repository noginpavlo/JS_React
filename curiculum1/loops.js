// Arrays and loops

// For loop is crazy in JS man (basicaly it is unreadable version of for loop)
console.log("Unreadabel loop:")
numbers = [0, 1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i])
}

//for ... of => this is readable version of for loop in JS
console.log("Readable loop:")
const fruits = ["lemon", "apple", "orange", "chery"]

for (const fruit of fruits) {
  console.log(fruit)
}

// .forEach method

const colors = ["red", "white", "blue"];

colors.forEach((color, index) => {
  console.log(color, index)
});

// Task 1
console.log("Task 1:")

taskNumbers = [1, 2, 3, 4, 5]
for (let num = 1; num <= 5; num++) {
  console.log(num)
}

//Task 2
console.log("Task 2:")

const names = ["Alice", "Bob", "Charlie"];
for (const name of names) {
  console.log(name)
}

// Task 3
console.log("Task 3:")

const tasks = ["wash dishes", "code", "sleep"];
tasks.forEach((task) => { console.log(task); });

