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
