//      [BEST] To get Range = (fromWhat, tillWhat ) 
let fromWhat = prompt("Enter FROM Which number you want a Random Number: ")
let num = Math.random();
let tillWhat = prompt("Enter TO Which number you want a Random Number: ");
fromWhat = parseInt(fromWhat)                                              // to deal with them like integers
tillWhat = parseInt(tillWhat)


num = Math.floor(num * (tillWhat - fromWhat + 1))  ;                //own concept
num = num + fromWhat ;

// num = Math.floor(num * (tillWhat - fromWhat + 1)) + fromWhat;                //chatGPT concept;

console.log(`Random number in range (${fromWhat},${tillWhat}) is: `, num)






// range = (1,tillWhat)
// num = Math.random();
// tillWhat = prompt("Enter TO Which number you want a Random Number: ");
// // tillWhat = 10;
// tillWhat = parseInt(tillWhat)

// num = num * tillWhat
// num = Math.floor(num)          //returns a integer
// num = num + 1                       // to get exactly tillWhat number as a random integer & NOT 0

// console.log("random Number: ", num)




// if Range = (0, tillWhat-1)

// num = Math.random();
// tillWhat = prompt("Enter TO Which number you want a Random Number: ");
// // tillWhat = 10;
// tillWhat = parseInt(tillWhat)

// num = num * tillWhat
// num = Math.floor(num)          //returns a integer

// console.log("random Number: ", num)