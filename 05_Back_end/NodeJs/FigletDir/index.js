// Require in JS
// (use only either of REQUIRE or IMPORT)

// const figlet = require("figlet")

// figlet("Shivam Verma!!", function (err, data) {
//     if (err) {
//         console.log("Something went wrong...");
//         console.dir(err);
//         return;
//     }   
//     console.log(data);
// });     


// Import in JS

import { sum, PI } from "./math.js";
console.log(sum(2, 5));
console.log("The value of Globally used PI is: ", PI);
console.log();

// radius = prompt("Enter value of radius: ");
// radius = parseInt(radius);

// AreaCircle = PI*(radius**2)
// console.log("Area of the circle will be: ", AreaCircle);


import { generate } from "random-words";
console.log("Randomm Word Genrated: ", generate());