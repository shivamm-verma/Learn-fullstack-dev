const max = parseInt (prompt ("Enter the maximum level: "));


let num = Math.random () ;

num = num * max
num = Math.floor (num)         
num = num + 1                       // stores the actually number

// console.log ("random Number: ", num)                 /reveals the Answer
let guess =  prompt ("Guess the Number: ");

while (true) {
    if (guess == num) {
        console.log("Congrats!! You guessed it right,it's ",guess) ;
        break;
    } else if (guess > num) {
        console.log ("number you entered is SMALLER than real number.")
    } else if (guess < num){
        console.log ("number you entered is LARGER than real number.")
    }else if ( guess.toLowerCase() == "quit" || guess.toLowerCase() == "exit") {
        console.log ("quitting the game...")
        break;
    }
    console.log ("wrong guess, try again..")
    guess = prompt ("Guess the Number: ");
}