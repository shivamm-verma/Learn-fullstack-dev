// Object literals ---- smthing like dictionaries in python

// let student = {
//     name: 'Shivam',
//     class: 12,
//     rollno: 2314,
//     city: 'delhi'
// }

const student = {
    name: 'Shivam Verma',
    class: 12,
    rollno: 2314,
    city: 'delhi'
};

// accessing individual keys
// console.log(`Name: ${student.name}`)
// console.log(`City: ${student.city}`)

// object literal for twitter/thread post
const tweet = {
    username: "megha_2005",
    content: "memes",
    likes: 56,
    reposts: 8,
    tags: 4
}


// ADDING AND UPDATING VALUES OF OBJ LITREALS

student.city = "mumbai";                    //updated

// deleting a value of a  key
// delete student.rollno;



// objects of objects

const classInfo = {
    shivam: {
        grade: "A+",
        attendance: 91
    },
    ayush: {
        grade: "B",
        attendance: 92
    },
    megha: {
        grade: "C",
        attendance: 83
    },
    shradha: {
        grade: "A",
        attendance: 90
    }
}


// Array of objects

const classroom = [
    {
        name: "aman",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "shradha",
        grade: "A",
        city: "Pune"
    },
    {
        name: "karan",
        grade: "0",
        city: "Mumbai"
    }
];




// MATH OBJECT IN JAVASCRIPT
// Math Object
// Properties
// Math.PI
// Math.E
// Methods
// Math.abs( n)
// Math.pow( a, b)
// Math.floor( n)
// Math.ceil( n)
// Math.random()


// console.log (Math.pow(2,5))
// console.log (Math.floor(-5.5))
// console.log (Math.ceil(-5.5))





// random number genrator in JavaScript
// range = (1,tillWhat)

// let num = Math.random () ;
// let tillWhat = prompt ("Enter to Which number you want a Random Number: ") ;
// // tillWhat = 10;
// tillWhat = parseInt (tillWhat)

// num = num * tillWhat
// num = Math.floor (num)          //returns a integer
// num = num + 1                       // to get exactly tillWhat number as a random integer & NOT 0

// console.log ("random Number: ", num)



//[BEST] To get Range = (fromWhat, tillWhat ) 
// let fromWhat = prompt("Enter FROM Which number you want a Random Number: ")
// let num = Math.random();
// let tillWhat = prompt("Enter TO Which number you want a Random Number: ");
// fromWhat = parseInt(fromWhat)                                              // to deal with them like integers
// tillWhat = parseInt(tillWhat)

// num = Math.floor(num * (tillWhat - fromWhat + 1))  ;                //own concept
// num = num + fromWhat ;

// console.log(`Random number in range (${fromWhat},${tillWhat}) is: `, num)



