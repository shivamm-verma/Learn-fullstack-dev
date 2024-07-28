// this- keyword (used to access values of avriable inside function)

const student = {
    name: "Shivam Verma",
    age: 18,
    maths: 92,
    computer: 97,
    science: 95,
    getAvg() {
        console.log(this);
        let average = (this.maths + this.computer + this.science) / 3;
        console.log(`ahh! ${this.name}, of age ${this.age}, got MARKS: `, average);
    }
}
// console.log(student.getAvg())



// try & catch- keywords

try {
    // user1001 = {
    //     fname: "Shivam Verma",
    //     semester: 1,
    //     yearEnrolled: 2023,
    //     documentVerification: true
    // }

    console.log(user1001)
} catch (err) {
    console.log("Sorry this resulted into an error.")
    console.log(`ERROR: ${err}`)
}



// arrow function (=>)

const power = (a, b) => {
    console.log(`${a} to the power ${b}: `, a ** b)
};
power(6, 3)

const floorDivision = (a, b) => {                          //in python it was like => a//b <=
    val = a / b;
    val = Math.floor(val);
    console.log(`Floor division ${a}//${b} is: `, val)
};
floorDivision(10, 4)        //should return 2


const sum = (a, b) => a + b;                              //Another alternative



// setTimeout- delays the program

setTimeout(() => {
    console.log("This will come after 3 seconds");
}, 3000);               // sets time out to 3 seconds (== 3000ms)



//  setInterval ()- repeats same (do  something) after a regular interval to the infinite until not stopped

let id = setInterval(() => {
    console.log("Hey shivam this caused an error i think you should try CLOSING THIS BROWSER, or it'll HANG very soon.")
}, 1500)
clearInterval(id)

// TO STOP THIS SETINTERVALM USE: clearInterval (id)






