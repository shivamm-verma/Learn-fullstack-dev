// # Arrays

let students = ["shradha", "aman", "rajat", "shivam", , "aaryan"];
let nums = [2, 4, 6, 8]
let mixedArray = ["Shivam", [10, 84.5], 12, 92]

mixedArray[0] = "Shivam Kumar";
nums[21] = 256;


// # ARRAY METHODS

let carBrands = ["BMW", "Audi", "Maruti", "Toyota"];
// carBrands.push("XUV");
// carBrands.push("Seltos");
// carBrands.pop();
// carBrands.unshift("porsche")

let followers = ['a', 'b', 'c'];
blocked = followers.shift();


// practice question
// Qs. For the given start state of an array, change it to final form using methods.
// start: ['january', 'july', 'march', 'august']
// final: ['july', 'june', 'march', 'august']

// let months = ['january', 'july', 'march', 'august'];
// months.shift();
// months.shift();
// months.unshift("july")
// months.unshift("june")
// console.log(months)


// let newArray = months.concat(carBrands);
// console.log(newArray)


let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
// console.log(colors.slice(-2))                           //returns same
// console.log(colors.slice(colors.length-2))                          //returns same



// splice method inn javascript
// syntax: splice(startIndex, deleteCount, item0....itemN)                    //

// colors.splice(4)
// colors.splice(0,2)
// colors.splice(0,1,"blue","violet")
// colors.splice(0,2)



// # STRING METHODS
// Trim()
// let userPassw = prompt("Enter your Password: ")
// userPassw = userPassw.trim()         //trims all whitespaces from both ends!
// console.log( userPassw)


// practice question
// let msg = "help!"
// msg = (msg.trim()).toUpperCase()
// console.log(msg)

// let name = "apnacollege";
// console.log(name.slice(4,9))
// console.log(name.indexOf("na"))
// console.log(name.replace("apna","our"))

// console.log (((name.slice(4)).replace("l","t")).replace("l","t"))




//  SORING IN ARRAYS

// let marks = [84, 92, 64, 75, 81, 38] ;
// console.log(`marks before: ${marks}`)
// console.log(`marks after: ${marks.sort()}`)



// practice question
// Qs. For the given start state of an array, change it to final form using splice.
// start: ['january', 'july', 'march', 'august]
// final: ['july', 'june', 'march', 'august']

// let months = ['january', 'july', 'march', 'august'] ;
// console.log(months)
// months.splice(0,1)          //deletes jan
// months.splice(1,0,"june")        //adds june
// console.log(months)
//or in single step
// months.splice(0,2,"july",'june')


// practice question
// Qs. Return the index of the "javascript from the given array, if it was reversed.
// ['c', 'c+*', 'html', 'javascript', 'python', 'java', 'c#', 'sql']

// let codingLang = ['c', 'c+*', 'html', 'javascript', 'python', 'java', 'c#', 'sql'] ;
// console.log(codingLang)
// codingLang.reverse()
// console.log(codingLang)
// console.log(codingLang.indexOf('javascript'))
//or in single step
// console.log((codingLang.reverse).indexOf("javascript"))



// nested arrays or multi dimensional arrays
let array = [[1, 2], [3, 4], [5, 6]];


// tictac toe game state

let tictacState = [["X", null, "O"], [null, 'X', null], ['O', null, 'X']]
//changing 1,2 place from null to O
tictacState[0][1] = 'O';
