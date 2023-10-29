"use strict";
let animals = ["Cat", "Dog", "Rabbit"];
for (let i = 0; i < animals.length; i++) {
    if (animals[i] == "Dog") {
        console.log(`${animals[i]} are very playful and energetic mammals.`);
    }
    else if (animals[i] == "Cat") {
        console.log(`${animals[i]} are very lazy yet caring mammals.`);
    }
    else {
        console.log(`${animals[i]} are very curious and playful mammals`);
    }
}
console.log("Any of these animals would make a great pet.");
