
// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [7, 9, 0]

let arr = [7, 9, 0, -2];
// inp1 = parseInt(prompt("enter number of first elements needed: "))

// if (inp1 > 0 && inp1 <= arr.length) {
//     console.log (arr.slice(0,inp1))
// } else {
//     console.error ("enter a valid value!")
// }



// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0, -2] and n=3
//     Print, [9, 0, -2]

// inp2 = parseInt(prompt("enter number of last n elements needed: "))

// if (inp2 > 0 && inp2 <= arr.length) {
//     console.log(arr.slice(arr.length - inp2))
// } else {
//     console.error ("enter a valid value!")
// }



// Qs3. Write a JavaScript program to check whether a string is blank or not.

// let string = prompt ("Enter a string: ")
// if (string === "" || string == '') {
//     console.log ("Blank String")
// } else {
//     console.log ("NOT a blank string")
// }



// Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case.

// string = prompt("Enter a string: ");
// let n = parseInt (prompt("Enter lowercase-iity to check on which index: "));

// // if ((string[string.length - 1]) === (string[string.length - 1]).toLowerCase()) {
// //     console.log ("Yes! last ")
// // }
// if (n >= 0 && n <= (string.length - 1)) {
//     if ((string[n]) === (string[n]).toLowerCase()) {
//         console.log(`YES! ${n+1}th digit is lowercase. `)
//     } else if ((string[n]) === (string[n]).toUpperCase()) {
//         console.log(`NO! ${n+1}th digit is NOT lowercase. `)
//     }
// } else {
//     console.error ("Enter a valid lowercase-ity value.")
// }



// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.

// string = prompt("Enter a string: ");
// console.log (`Before striping: >>>${string}<<<`)
// let newStr = string.trim()
// console.log (`Before striping: >>>${newStr}<<<`)




// Qs6. Write a JavaScript program to check if an element exists in an array or not.


let newArray = [16, 32, 64, 128, 256, 512, 1024, 2048]
console.log(newArray)
let querryVal = parseInt(prompt("Search a number in this Array to check if it exists in that or not: "));
if (newArray.indexOf(querryVal) != -1) {
    console.log(`YES! ${querryVal} exits in the Array`)
}
else {
    console.log(`NO! ${querryVal} DOES NOT exits in the Array`)
}