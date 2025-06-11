// if, else, ternary

//if and else
const age = 10;

if (age >= 18) {
  console.log("You can vote")
} else {
  console.log("You can't vote, kid!")
}

//if, else, and there is else if (like togeather)
const acuracy = 92;

if (acuracy < 95) {
  console.log("Your acuracy is to low. You should slow down")
} else if (acuracy > 95) {
  console.log("You are good and can even try typing facter")
} else {
  console.log("You acuracy is on the edge and you sould keep the speed constant")
}

// Ternary Operator (userd with boolean variables. Connon in React)
IsLoggedIn = false

const message = IsLoggedIn ? "Welcome to the app" : "Please log in to access the app"
console.log(message);

// Task 1
console.log("Task 1:");

ageTask1 = 15;

if (ageTask1 < 13) {
  console.log("You are a child")
} else if (ageTask1 < 18) {
  console.log("You are teen")
} else {
  console.log("You are adult")
}

// Task 2
console.log("Task 2:");

const loggedIn = false

const loginPrompt = loggedIn ? "Welcome" : "Please log in";

console.log(loginPrompt);

