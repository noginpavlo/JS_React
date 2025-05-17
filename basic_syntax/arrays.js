const animals = ["cat", "dog", "bird"];
console.log(animals[0]);
console.log(animals[1]);
console.log(animals[2]);
console.log(animals);



console.log(animals.length);
animals.push("crocodile")
console.log(animals)
console.log(animals.length);


console.log("Now for loop will iterate over all animals in animals array")
for (let animal of animals) {
    console.log(animal)
}


const user = {
  name: "Alice",
  age: 30,
  isActive: true
};

console.log(user.name);      // "Alice"
console.log(user["age"]);    // 30

const tasks = [
  { title: "Learn JS", done: true },
  { title: "Start React", done: false },
  { title: "Build project", done: false }
];

console.log("All tasks:");
for (let task of tasks) {
  console.log("-", task.title, "Done?", task.done);
}