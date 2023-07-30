// non assignment.

// Write an arrow function that returns the square of a number 'n'.

const square = (a) => {
    console.log(a ** 2)
}
// let userPrompt1 = parseInt (prompt ("Enter a number: "))
userPrompt1 = 8;
square(userPrompt1)


// Write a function that prints "Hello World" 5 times at intervals of 2s each

const id1 = setInterval(() => {
    console.log("Hello World")
}, 2000)

setTimeout(() => {                          // [BEST] way to stop the setInterval
    clearInterval(id1)
})



// Assignment.


// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
// and returns the average of those numbers.

const arrayAverage = (arr) => {
    let totalSum = 0;
    let totalLength = arr.length;
    for (val in arr) {
        totalSum += val;
    }
    avg = totalSum / totalLength;
    console.log("Average: ", avg)
}
array = [5,45,15,75]
arrayAverage (array)


// Qs2. Write an arrow function named isEven() that takes a single number as argument
// and returns if it is even or not.


const isEven = (num) => {
    if (num % 2 == 0) {
        console.log("The number is EVEN.")
    } else {
        console.log ("The number is NOT EVEN.")
    }
}

number = 89;
isEven (number)
number = 44;
isEven (number)