
// Qs1. Write a
// JS program to delete all occurrences of element 'num' in a given array.
// Example if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// console.log("Array before: ", arr)

// let deleteItem = parseInt(prompt("which element to be deleted?: "))
// for (let val = 0; val <= arr.length - 1; val++) {
//     if (arr[val] === deleteItem) {
//         arr.splice(val,1)
//     }
// }

// console.log ("Array after deletion: ",arr)



// Qs2. Write a JS program to find the no of digits in a number.
// Example: if number = 287152, count = 6

// let number = 287152;
// number = parseInt (prompt ("Enter number of which you want to calculate number of digits of: "));
// let numberStr = `"${number}"`;
// let digitCount = numberStr.length - 2;                                           //life hack
// console.log(`number of digits in this number ${number}: `, digitCount)       // should've use >>>.toString()<<<<<



// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25

let number = 287152 ;                               //prompt/input from user can be done too
numbStr = `${number}`
let sum = 0;
for (char of numbStr) {
    char = parseInt (char)
    sum += char
}
console.log ("Sum of Number ", number, " is: ", sum )


// completed due.

// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. I
// Example:
// 7! (factorial of 7) = 1x2x3×4×5×6×7 = 5040
// 5! (factorial of 5) = 1×2x3x4×5 = 120
// 3! (factorial of 3) = 1x2×3 = 6
// 0! Is always 1
//KNOWN THING FOR GUY WHO TOOK PCM+CS(python) IN HIS CLASS 12TH :P

// console.log('This program calculates factorial of a given number by user')
// let number = parseInt(prompt("Enter a number to get factorial of: "))
// let fact = 1;
// let i = number;
// while (i >= 1) {
//     fact *= i;
//     i--;
// }
// console.log('Factorial of ', number, " is ", fact)



// Qs5. Find the largest number in an array with only positive numbers.

// let array = [54,87,93,64,36];                   //we can even input it from user (program written below)
// let arrMax = 0;
// for (val of array) {
//     if (val >= arrMax) {
//     arrMax = val;
//     }    
// }
// console.log ('largest number is', arrMax)



// Qs5. Find the largest number in an array with only positive numbers. (array inputted by user)

let array1 = []; 
let j = 1;
let askLen = parseInt (prompt ("how many elements should be in the array?: "))
while (j <= askLen) {
    let arrElem = parseInt (prompt (`Enter element number.${j}: `));
    array1.push(arrElem)
    j++;
}
let arrMax1 = 0;
for (val of array1) {
    if (val >= arrMax1) {
    arrMax1 = val;
    }    
}
console.log ('largest number is', arrMax1)
