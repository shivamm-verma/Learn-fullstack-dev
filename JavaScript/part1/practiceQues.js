// PRACTICE QUESTION(1)
// Qs. A "good string" is a string that starts with the letter a' & has a length > 3. Write a
// Program to find if a string is good or not.

let userString = prompt("Enter a string: ")
if (((userString[0] === "a") || userString[0] === "A") && userString.length > 3) {
    console.log("Good String.")
}
else {
    console.log("NOT a Good String.")
}


//  PRACTICE QUESTION(2)
// Qs. Use switch statement to print the day of the week using a number variable 'day' with
// values 1 to 7.
// 1 = Monday, 2 = Tuesday & so on

let day = prompt ("Enter the weekday(1-7): ",1)
switch (day) {
    case "1":
        console.log("Monday")
        break;
    case "2":
        console.log("Tuesday")
        break;
    case "3":
        console.log("Wednesday")
        break;
    case "4":
        console.log("Thursday")
        break;
    case "5":
        console.log("Friday")
        break;
    case "6":
        console.log("Saturday")
        break;
    case "7":
        console.log("Sunday")
        break;
    default :
    console.log("Err!: Enter week day ranging from 1 to 7.")
}



