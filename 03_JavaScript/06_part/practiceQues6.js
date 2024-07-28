// bit harder question than usual ones

// [Note - Some questions might take more time to solve as it will take time for any codir
//     beginner to build logic for approaching such programming problems.
//     These questions are based on programming logic, not on development. So, please
//     don't hesitate to look at the solution and try to understand the approach used.]



// Q1. Write a JavaScript function that returns array elements larger than a number.        [PENDING]


let arrayList = [];
let i = 1;
while (i <= 11) {
    arrayList.push(2 ** i);
    i++;                           // arrayList = [2,4,8,16...,2048]    (array of number only)
}
console.log(arrayList)

function elemLargerThan(array, num) {
    array = array.sort() ;
    arrayAfterWards = [] ;
    let excuseCount = 0 ;
    let idOfBreakage = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > num) {
            idOfBreakage += 1 ;
            excuseCount += 1 ;
        } else {
            // console.log (array.splice (idOfBreakage,0,))
            arrayAfterWards = array
            arrayAfterWards.splice (0,excuseCount)
            arrayAfterWards = arrayAfterWards.sort()
            break;
        }
    }
    console.log(`array elements larger than number ${num} , is: `)
    console.log(arrayAfterWards)
}
let largerThan = parseInt(prompt("Enter a number"))
elemLargerThan(arrayList, largerThan)




// Q2. Write a JavaScript function to extract unique characters from a string.          [DONE]
// Example: str = "abcdabcdefgggh"
// ans = "abcdefgh"

let str = "abcdabcdefgggh";
// str = "ssshhivvvvaaaammmms";
let empty = "";
function unique(string) {
    let notComman = [];
    for (char of string) {
        if (!(notComman.includes(char))) {
            notComman.push(char);
            empty += char;
        } else {
            console.log()
        }
    }
    console.log(notComman)
    // return empty;
    console.log("Unqiue characters of ", string, " are: ", empty)
}

// unique(str)





// Qs3. Write a JavaScript function that accepts a list of country names as input and               [DONE]
// returns the longest country name as output.
//    Example: country = ["Australia", "Germany", "United States of America"]
//    output : "United States of America"


let country = [];
// let addCountry = prompt("Enter country names (Enter 'Done' to stop adding): ")
// while (addCountry.toLowerCase() != "done") {
//     addCountry = prompt("Enter country name(Enter 'Done' to stop adding): ")
//     country.push(addCountry.trim())
// }
// console.log("countries filled by you: ", country)

function greatestAmong(array) {

    for (let i = 1; i < array.length; i++) {
        if (array[i].length > array[maxLengthid].length) {
            maxLengthid = i;                                               //stores the index of maximmum length holder of the array country
        }
    }
    console.log("Longest coutry name: ", array[maxLengthid], " with length ", array[maxLengthid].length)
}
// greatestAmong(country)





// Qs4. Write a JavaScript function to count the number of vowels in a String argument.             [DONE]


function vowelCounter(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelCount = 0;
    let vowelFound = [];
    for (char of str) {
        if (vowels.includes(char)) {
            vowelCount += 1
            vowelFound.push(char)
        }
    }
    console.log(`Vowels in word *${str}* are: `, vowelCount)
    console.log("All vowels so found are: ", vowelFound)
}

// let word = prompt("Enter a word: ");
// vowelCounter(word)





// Qs5. Write a JavaScript function to generate a random number within a range (start,      [DONE]
// end).


function randomNumber(start, end) {
    num = Math.floor(Math.random() * (end - start + 1)) + start;
    // BEST LOGIC SO FAR
    console.log(num)
}
// randomNumber(40, 49)


