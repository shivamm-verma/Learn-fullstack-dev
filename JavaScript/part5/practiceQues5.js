// Q1. Create a program that generates a random number representing a dice roll.
// [The number should be between 1 and 6].


let diceRoll = Math.random();
diceRoll = Math.floor(diceRoll * 6);               //0 to 5
diceRoll += 1;                     //1 to 6
console.log("The dice roll is: ", diceRoll)


// Q2. Create an object representing a car that stores the following properties for the
// car: name, model, color.
// Print the car's name.


const car = {
    name: "Suzuki",
    model: "Baleno",
    color: "Blue"
}

console.log (car)


// Qs3. Create an object Person with their name, age and city.
// Edit their citv's original value to change it to "New York".
// Add a new property country and set it to the United States.


const person = {
    name: "Shivam Verma",
    age: 18,
    city: "Delhi"
}

person.city = "New York"
person.country = "United States"

console.log (person)

for (entity of person) {
    console.log (entity)
}