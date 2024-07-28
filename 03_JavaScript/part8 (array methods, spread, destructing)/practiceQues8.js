// JS (Part 8)
// Practice Questions

// Qs1. Square and sum the array elements using the arrow function and then find the                [done]
// average of the array.

arr2 = [3, 4, 5, 7, 9]
console.log(">>>For array: ", arr2)
function squareAndSum(arr) {
    sum = 0
    for (char of arr) {
        sum += (char ** 2);
    }
    let val = arr.reduce((avg, el) => {                 //val stores value of avg
        avg += el;
        return (avg)
    })
    console.log("Square and sum the array: ", sum)
    console.log("Average the array: ", (val / arr.length))

}
squareAndSum(arr2)                      // should return 180



// Qs2. Create a new array using the map function whose each element is equal to the                [done]
// original element plus 5.

let arr3 = [3, 4, 9, 13, 19, 24]
let arrRet = arr3.map((el) => el + 5)
console.log(">>>For array: ", arr3)
console.log("new array using the map function whose each element is equal to the original element plus 5: ", arrRet)




// Qs3. Create a new array whose elements are in uppercase of words present in the              [done]
// original array.

let origArray = [..."ShiVAm", ' ', ..."vERma"];
let uppers = [];
for (char of origArray) {
    if (char.toUpperCase() === char) {
        if (char != " ") {
            uppers.push(char)
        }
    }
}
console.log(">>>For array: ", origArray)
console.log("Array of capital letters: ", uppers)




// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original                [done]
// array values and all of the additional arguments doubled.

function doubleAndReturnArgs(arr, ...args) {
    let newArray = [];
    
    for (char1 of arr) {
        newArray.push(char1);
    }
    for (char2 of args) {
        newArray.push(char2);
    }
    return newArray;
}
arr1 = ["america", "london", "brazil", "canada", "dubai"]
let examp = doubleAndReturnArgs(arr1, "india", "xyz", "france", "paris")
console.log(examp)



// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.         [pending]

function mergeObjects(obj1, obj2) {
    objMain = {};
    // for (char1 of obj1) {
    //     for (char2 of obj2) {
    //         objMain.push (char1:char2)
    //     }
    // }

}

