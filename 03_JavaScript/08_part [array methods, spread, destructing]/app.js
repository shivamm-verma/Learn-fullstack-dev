//  array methods

let array = [5, 8, 7, 6, 1, 4, 3]

function printer(need) {
    console.log(need);
}

// array.forEach (printer)         //only for arrays


const students = [{
    name: "Shivam",
    marks: 92,
    gender: "male"
},
{
    name: "aaryan",
    marks: 89,
    gender: "male"
},
{
    name: "meghna",
    marks: 97,
    gender: "female"
}
];


function getMarks(arr) {
    console.log(arr.marks)
}

students.forEach(getMarks)



// map

let num = [2, 4, 5, 7, 8, 9]

let double = num.map(function (el) {
    return el * 2;
})

// console.log (double)


let cgp = students.map(function (el) {
    console.log(`CGP of ${el.name}`)
    console.log(el.marks / 10);
})
// console.log (cgp) 
cgp                         //simple recalling



// filter

let nums = [5, 4, 8, 9, 4, 3, 7, 22, 84, 11, 19]
let even = nums.filter((el) => {
    return el % 2 == 0;
});
console.log("Filter method: ", even)



// every   

let decision = [2, 4, 8, 14].every((el) => el % 2 == 0);              //stores value as true
console.log("every method: ", decision)

let decision2 = [2, 4, 8, 14].every((el) => el <= 5);              //stores value as true
console.log("every method: ", decision2)



// reduce method

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// let finalVal = numbers.reduce ((res, el) => res+el)
let finalVal = numbers.reduce((res, el) => {
    console.log(res)
    return res + el;
})
console.log("reduce method: ", finalVal)




//  MAXIMUM IN ARRAY [BEST]

// nums is already defined above.
let result = nums.reduce((max, el) => {
    if (el > max) {
        return el;
    } else {
        return max;
    }
});

console.log(`when array is: `, nums)
console.log("Max is: ", result)




// Practice Os

// Check if all numbers in our array are multiples of 10 or not.               [done]

let example1 = [20, 30, 50, 90, 80, 110, 70];
let example2 = [40, 30, 50, 85, 90, 67];

let val = example1.every((el) => el % 10 == 0)
console.log(val)
let val2 = example2.every((el) => el % 10 == 0)
console.log(val2)



// Create a function to find the min number in an array.               [done]

let examArray = [54, 64, 89, 17, 93, 45, 62, 36, 27]

// let minNum = examArray.reduce ((res,el) => {
//     if (res> el) {
//         return el;
//     }else {
//         return res;
//     }
// })
// console.log ("Minimum of Array : ", examArray)
// console.log ("is: ", minNum)

// function wise the same program.
function minNumber(array) {

    let minNum = array.reduce((res, el) => {
        if (res > el) {
            return el;
        } else {
            return res;
        }
    })
    console.log("Minimum of Array : ", array)
    console.log("is: ", minNum)

};
console.log(minNumber(examArray))



//  default parameters

function power(a, b = 1) {
    return a ** b;
}


//  spread                                                [BEST]

console.log("Using spread in JavaScript.")
console.log(...examArray)
let myName = "Shivam Verma";
console.log(...myName)

console.log("Printing each letter using for-of")
for (char of myName) {
    console.log(char)
}


//spread and array literals

newArray = [..."Indian Institute of Technology"]
let evens = [2, 4, 6, 8];
let odds = [1, 3, 5, 7, 9]

let evOd = [...evens, ...odds].sort()



// spread with object literals

const data = {
    email: "ironman@gmail.com",
    passw: "tommyHilfiger"
}
dataCopy = { ...data, id: 101 }


const names = ["Shivam", "Aaryan", "Meghna", "Lavanya"]                           //[best]/[better]
const idNames = { ...names }          // this will create KEYS AS INDEX
console.log(idNames)



// to take too many or any number of ARGUMENTS IN A FUNCTION

function printer(...args) {                 // this will create args as args = [...] - array
    for (char of args) {
        console.log("You gave us: ", char)
    }
}
printer(245, "Shivam is currently exlporing JavaScript", true, false, "Shivam will explore ML&AI very soon")


// rest

function sum(a, b, c, d) {
    // console.log(arguments.length)
    // console.log({...arguments})
    console.log(...arguments)
}
sum(85, 54, 97, 32)



//  again creating min and max function in javascript

function min(...args) {
    return args.reduce((min, el) => {
        if (el > min) {
            return min;
        } else {
            return el;
        }
    })
}

function max(...args) {
    return args.reduce((max, el) => {
        if (max > el) {
            return max;
        } else {
            return el;
        }
    })
}



// DESTRUCTURING

let aaryanData = ["Aaryan Sharma", "1234", "aaryan@jpmorgan.com", 9114431637]            //uniquie id: aar
let meghnaData = ["Meghna Gupta", "2222", "meghna@amazon.com", 6387499823]                 //unique id: meg

let [aarNam, aarPassw, aarMail, aarPhone] = aaryanData
let [megNam, megPassw, megMail, megPhone] = meghnaData




// DESTRUCTURING (objects)

const student = {
    name: "karan",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "math", "science"],
    username: "karan@123",
    password: "abcd"
};
// let username = student.username;
// let password = student.password;
// let {username , password} = student ;               //matches via key:value pair of the object

let { username, password: secret, subjects: subj, city = "Delhi" } = student;               //matches via key:value pair of the object




