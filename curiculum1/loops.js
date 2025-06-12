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

