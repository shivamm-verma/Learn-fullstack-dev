const sum = (a, b) => a + b;
const mult = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;

// way 1
let obj = {
    sum: sum,
    mult: mult,
    g: g,
    PI: PI
}

// way 2
// module.exports = {
//     sum: sum,
//     mult: mult,
//     g: g,
//     PI: PI
// }

// way 3
// module.exports.sum = (a, b) => a + b;
// exports.mult = (a, b) => a * b;
// module.exports.g = 9.8;
// exports.PI = 3.14;
// All ways work to do the same work.


// module.exports = "hello you, you there?";
module.exports = obj;