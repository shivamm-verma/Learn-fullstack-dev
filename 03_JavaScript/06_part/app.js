//  Creating a simple FUNCTION in javascript
function helloAlone() {
    console.log("Hello! It's just a single message.");
}

//  Creating a FUNCTION in javascript with argument
function hello(times) {
    times = parseInt(times);
    let i = 1;
    while (i <= times) {
        console.log("Hello!");
        i++;
    }
}

// helloAlone()
// hello(5) ;

function printName() {
    let name = "Shivam Verma";
    console.log("Hello ", name, "!")
    console.log("Hoping for your great day.")
    console.log("By Team Microsoft.")
}
// printName()

function print1to5() {
    for (let i = 1; i <= 5; i++) {
        console.log(i)
    }
}




function isAdult(age) {
    age = parseInt(age)
    if (age >= 18) {
        console.log("Adult.")
    } else {
        console.log("Not Adult.")
    }
}
// isAdult(14)             // output: Not Adult         
// isAdult(19)             // output: Adult
// isAdult(18)             // output: Adult



// practice question 1

function poem() {
    console.log("twinkle twinkle, little star")
    console.log("How I wonder what you are")
}


// practice question 2


function rollDice() {
    // let roll = Math.random();
    // roll *= 6;                                   //long process
    // roll = Math.floor(roll);
    // roll += 1;

    roll = Math.floor(Math.random() * 6) + 1;                      //shorthand
    console.log("Dice rolled to: ", roll)
}

// rollDice()
// rollDice()
// rollDice()


// BETTER WAY TO PRINT SOMETHING RATHER THAN USING CONSOLE.LOG()--------------------
function print(any) {
    console.log(any)
}
// print ("Hey shivam")
// print (87," my luck number")



function printInfo(name, age = 18) {
    age = parseInt(age)
    console.log(`Ahh! ${name} age is ${age}.`)
}

// printInfo("Shivam",19)
// printInfo("Megha")
// printInfo("Ayush",21)



// practice question 3

function averageOf3(a, b, c) {
    let average = a + b + c;
    average /= 3;
    console.log(`Sum of ${a},${b},${c} is: `, average)
}

// averageOf3 (3,6,9)
// averageOf3 (3,3,3)



// practice question 4 (Print table of given number)

function table(num) {
    console.log("---------------")
    console.log(`Table of ${num} is as follow: `)
    i = 1;
    while (i <= 10) {
        console.log(`${num} X ${i} = ${num * i}`);
        i++;
    }
    console.log("---------------")
}

// table (9)
// table (13)



//RETURN KEYWORD

function sum(a, b) {
    return a + b;
}
// to print this value of function              //we need to first give this FUNCTION VALUE to a variable then we an print the value of that variable
// let s = sum(32, 64);
// console.log(s)




// pracice question 5 
// (Create a Function that returns the sum of numbers from 1 to n.)

function nSum(n) {
    sum = (n * (n + 1)) / 2;
    return sum;
}


// practice question 6
//  (Create a Function that returns the concatenation of all strings in an array.)

let array = [];
function AddToArray(str) {
    array.push(str)
    console.log("Array: ", array)
}

// AddToArray ("Hey")
// AddToArray ("hello")
// AddToArray ("bonjour")
// AddToArray ("hole")
// AddToArray ("namaste")


// understanding

let greet = "hello";

function greetChange() {
    greet = "namaste";
}

// console.log (greet)                 //global variable value: hello
// greetChange()
// console.log (greet)                 //global variable value: namaste



// METHODS IN JAVASCRIPT

const calculator = {
    add: function (a, b) {
        return a + b;
    },
    sum: function (a, b) {
        return a + b;
    },
    sub: function (a, b) {
        return a - b;
    },
    mul: function (a, b) {
        return a * b;
    }
};



// METHODS SHORTHAND IN JAVASCRIPT

const calc = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    }
}


