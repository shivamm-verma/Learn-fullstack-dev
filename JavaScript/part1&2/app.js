// practice question
// let color = prompt("Enter color(red-R/yellow-Y/green-G): ")
// if (color == "R"){
//     console.log("Stop!", ` light color is Red.`)
// }
// if (color == "Y"){
//     console.log("Slow Down!", ` light color is Yellow.`)
// }
// if (color == "G"){
//     console.log("Go!", ` light color is Green.`)
// }


// practice question
// let marks = prompt("Enter your marks(Out of 100)", 85)
// if (marks >= 90) {
//     console.log("Grade: A+")
// } else if (marks >= 85) {
//     console.log("Grade: A")
// } else if (marks >= 80) {
//     console.log("Grade: B")
// } else if (marks >= 75) {
//     console.log("Grade: C")
// } else if (marks >= 70) {
//     console.log("Grade: E")
// } else {
//     console.log("Grade: FAILED!")
// }


// practice question
// let popcornSize = prompt("Enter size of popcorn: ", "M")
// if (popcornSize == "XL") {
//     console.log(`Bill: Rs.250

// Cart: Pop-corn ${popcornSize} size`)
// }
// else if (popcornSize == "L") {
//     console.log(`Bill: Rs.200

// Cart: Pop-corn ${popcornSize} size`)
// }
// else if (popcornSize == "M") {
//     console.log(`Bill: Rs.150

// Cart: Pop-corn ${popcornSize} size`)
// }
// else if (popcornSize == "S") {
//     console.log(`Bill: Rs.100

// Cart: Pop-corn ${popcornSize} size`)
// }
// else {
//     console.log("error!: enter a valid Popcorn Size!")
// }


// #LOGICAL OPERATORS (&&, ||, !)
// let userAge = prompt("Enter your Age: ", 18)
// let userBirthYear = prompt("Enter your Birth Year: ", 2004)
// if (userAge >= 18) {
//     // if (userBirthYear <= 2004){
//     //     console.log("You are ELIGIBLE for Voting in India.")
//     // }
//     if (userBirthYear == 2004-(userAge-18)){                       //userAge and his/her userBirthYear should match
//         console.log("You are ELIGIBLE for Voting in India.")
//     }
//     else{
//         console.log("You are NOT ELIGIBLE for Voting in India.")
//         console.log("                  OR                    ")
//         console.log("Might have Entered wrong data.")

//     }
// } 



//  PRACTICE QUESTION(1)
// Qs. A "good string" is a string that starts with the letter a' & has a length > 3. Write a
// Program to find if a string is good or not.

// let userString = prompt("Enter a string: ")
// if (((userString[0] === "a") || userString[0] === "A") && userString.length > 3) {
//     console.log("Good String.")
// }
// else {
//     console.log("NOT a Good String.")
// }



//  PRACTICE QUESTION(2)
// Qs. Use switch statement to print the day of the week using a number variable 'day' with
// values 1 to 7.
// 1 = Monday, 2 = Tuesday & so on

// let day = prompt ("Enter the weekday(1-7): ",1)
// switch (day) {
//     case "1":
//         console.log("Monday")
//         break;
//     case "2":
//         console.log("Tuesday")
//         break;
//     case "3":
//         console.log("Wednesday")
//         break;
//     case "4":
//         console.log("Thursday")
//         break;
//     case "5":
//         console.log("Friday")
//         break;
//     case "6":
//         console.log("Saturday")
//         break;
//     case "7":
//         console.log("Sunday")
//         break;
//     default :
//     console.log("Err!: Enter week day ranging from 1 to 7.")
// }



// #VARIOUS ALERTS, ERRORS, WARNINGS

alert("Please do NOT press any key.")
console.warn("pressing any key would exit this Gateway!")
console.error("101: Pressed a key....exitting")


// concatinating fName and Lname using prompt()

let fName = prompt ("Enter your First Name: ")
let lName = prompt ("Enter your Last Name: ")
let welcomeMessage = `Welcome, ${fName} ${lName}!` ;
console.log (welcomeMessage, "[On your Pop-Up]")
alert (welcomeMessage)











//  #if & else if options in javascript
// let age = prompt("Enter your age", 18)
// if (age > 18) {
//     console.log("Yayy! you are ELIGIBLE for Voting.")
// }else if (age == 18) {
//     console.log("Yayy! you are ELIGIBLE for Voting.")
// }else if (age < 18) {
//     console.log("Ughh! you are NOT ELIGIBLE for Voting.")
// }

// only with if statements
// let age = prompt("Enter your age", 18)
// if (age >= 18) {
//     console.log("Yayy! you are ELIGIBLE for Voting.")
// }
// if (age < 18) {
//     console.log("Ughh! you are NOT ELIGIBLE for Voting.")
// }