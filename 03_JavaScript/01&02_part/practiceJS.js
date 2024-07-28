//Qs1. Create a number variable num with some value.
// Now, print "good" if the number is divisible by 10 and print "bad" if it is not.

// let number = prompt("Enter a number: ")
// if (number % 10 == 0) {
//     console.log("Good")
// } else {
//     console.log ("bad")
// }


// Qs2. Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting
// their name & age) :
// name is age years old.
// [Use template Literals to print this sentence]

// let userName = prompt ("Enter your Name: ")
// let userAge = prompt ("Enter your Age: ")
// // alertTemplate = userName + " is " + userAge + " years old."
// alertTemplate = `${userName} is ${userAge} years old.`              //better version
// alert(alertTemplate)



// Qs3. Write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, February, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4: October, November, December
// [Use the number as the case value in switch]

// let number = prompt ("Enter Quarter Number", 1)

// switch (number) {
//     case "1":
//         console.log("Months in Quarter 1 : January, February, March")
//         break;
//     case "2":
//         console.log("Months in Quarter 2 : April, May, June")
//         break;
//     case "3":
//         console.log("Months in Quarter 3 : July, August, September")
//         break;
//     case "4":
//         console.log("Months in Quarter 4: October, November, December")
//         break;
//     default : {
//         console.log("enter a valid quarter ranging from 1 to 4.")
//     }
// }



// Qs4. A string is a golden string if it starts with the character 'A' or 'a' and has a total
// length greater than 5.
// For a given string print if it is golden or not.

// let userString = prompt("Enter a string: ")
// if ((userString[0] == "a" || userString[0] == "A") && userString.length > 5) {
//     console.log ("Golden String")
// } else {
//     console.log ("NOT a Golden String")
// }



// Qs5. Write a program to find the largest of 3 numbers.

// let num1 = prompt ("Enter First Number: ")
// let num1 = parseInt (prompt ("Enter First Number: "));              //parseInt converts string numeric to integer numeric
// let num2 = parseInt (prompt ("Enter Second Number: "));              //parseInt converts string numeric to integer numeric
// let num3 = parseInt (prompt ("Enter Third Number: "));              //parseInt converts string numeric to integer numeric

// let bigNum = 0;     //initialising bigNum
//  if (num1 > bigNum) {
//     bigNum = num1;
//  }
//  if (num2 > bigNum) {
//     bigNum = num2;
//  }
//  if (num3 > bigNum) {
//     bigNum = num3;
//  }

//  console.log(`Greatest number out of them is: ${bigNum}`)





//  Q6 (Bonus). Write a program to check if 2 numbers have the same last digit.
//  Eg: 32 and 47852 have the same last digit i.e. 2

let firstNum = prompt ("Enter first number: ") ;
let secondNum = prompt ("Enter second number: ") ;

firstNumLength = firstNum.length
secondNumLength = secondNum.length

if (firstNum[firstNumLength -1] === secondNum[secondNumLength -1]) {
    console.log (`Digits ${firstNum} & ${secondNum} have same Last digit.`)
    console.log(`last digit: ${firstNum[firstNumLength -1]}`)
} else {
    console.log ("These numbers don't have same Last digits")
    console.warn(`last digit of first number: ${firstNum[firstNumLength -1]}`)
    console.warn(`last digit of second number: ${secondNum[secondNumLength -1]}`)
}
 