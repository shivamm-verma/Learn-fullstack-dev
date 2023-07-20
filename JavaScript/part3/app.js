// FOR LOOP

// for (let i= 1; i<=5; i++) {
//     console. log (i);
// }



// table printer of any number

// let numberTable = parseInt (prompt ("Table of?: "))

// for (let i= 1; i<= 10; i++) {
//     console. log (`${numberTable} X ${i} = ${numberTable*i}`);
// }



// printing all odd numbers from 1 to 15

// for (i = 1; i <= 15; i += 2) {
//     console.log(i)
// }



// printing all even numbers from 2 to 10

// for (let i = 2; i <= 10; i += 2) {
//     console.log(i)
// }


//nesting loops

// let array = []
// for (let i = 1; i <= 6; i += 1) {
//     for (let j = 1; j <= 6; j += 1) {
//         array.push(`[${i},${j}]`)
//         // console.log(`(${i},${j})`)
//     }
// }
// console.log(array)





//  Favourite movie GUESSER (main)

// let favmMovie1 = "avengers";
// let favmMovie2 = "spiderman";
// console.log("If you guess the movie right, then it'll Congratulate you!")
// let guess = prompt("Guess movie name: ");

// while (( guess.toLowerCase() != favmMovie1 && guess.toLowerCase() != favmMovie2) && (guess.toLowerCase() != 'quit') ) {
//     guess = prompt ("Wrong guess. Please try again (or Quit!)")
// }                                                                                       //for this code, logic was needed!
// if (guess.toLowerCase() === favmMovie1 || guess.toLowerCase() == favmMovie2) {
//     console.log (`yayy! you guessed it right. It's "${guess.toLowerCase()}"`)
// }
// if (guess.toLowerCase() === 'quit') {

//     console.log (`

//     It's Okay! you give too soon. Quiting...

//     `)
// }



//  Loops with arrays

// let fruits = ['apple', 'banana', 'kiwi', 'pineapple', 'pomegranate', 'orange', 'litchi']
// console.log(`fruits array: ${fruits}

// `)
// for (let i = 0; i <= (fruits.length - 1); i++) {
//     console.log(i, fruits[i])

// //     for (let j = 0; j <= fruits[i].length - 1; j++) {
// //         console.log(fruits[i][j])
// //     }
// }



// nested loops with nested arrays

// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];

// for (let i = 0; i <= heroes.length - 1; i++) {
//     console.log(`List #${i + 1}`)
//     for (let j = 0; j <= heroes[i].length; j++) {
//         console.log(`j=${j}>>>`,heroes[i][j])
//     }

// }



// for-of loop

// for (char of "DATA SCIENTIST") {
//     console.log (char)
// }

// for (char of "FULL STACK DEVELOPER") {
//     console.log (char)
// }


// let heroes = [["ironman", "spiderman", "thor"], ["superman", "wonder woman", "flash"]];
// for (list of heroes){
//     for (elem of list) {
//         console.log(elem)
//     }
//     console.log (list)
// }