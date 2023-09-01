function hello() {
    console.log("Hellooo!");
}

function demo() {
    hello();
}
// call stack
console.log("calling demo()");
demo();
console.log('Okay, bye.');



// visualizing

function one() {
    return 1;
}
function two() {
    return one() + one();
}
function three() {
    // return two() + one();
    let ans = two() + one();
    console.log(ans);
}
three()


// JavaScript JS is single theaded.
// synchrous nature

// setTimeout(() => {
//     console.log("I am written first.");
// }, 2000)
// setTimeout(() => {
//     console.log("I am written second.");
// }, 3000)

// console.log("I am written third.");        // launched on website first



// 

let h1 = document.querySelector("h1")
// h1.style.color = "red"
// vibgor color printer on website

// setTimeout(() => {
//     h1.style.color = "violet";
//     console.log("~Text-color is: violet");
// }, 1000)
// setTimeout(() => {
//     h1.style.color = "indigo";
//     console.log("~Text-color is: indigo");
// }, 2000)
// setTimeout(() => {
//     h1.style.color = "blue";
//     console.log("~Text-color is: blue");
// }, 3000)
// setTimeout(() => {
//     h1.style.color = "green";
//     console.log("~Text-color is: green ");
// }, 4000)
// setTimeout(() => {
//     h1.style.color = "yellow";
//     console.log("~Text-color is: yellow");
// }, 5000)
// setTimeout(() => {
//     h1.style.color = "orange";
//     console.log("~Text-color is: orange");
// }, 6000)
// setTimeout(() => {
//     h1.style.color = "red";
//     console.log("~Text-color is: red");
// }, 7000)



// callback hell

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve ("color changed")
        }, delay);
    })
}

changeColor ("red", 1000)
.then (()=> {
    console.log('Red color was completed');
    changeColor ("orange", 1000)
})
.then (()=> {
    console.log('orange color was completed');
    changeColor ("green", 1000)
})
.then (()=> {
    console.log('green color was completed');
    changeColor ("yellow", 1000)
})
.then (()=> {
    console.log('yellow color was completed');
    changeColor ("blue", 1000)
})
.then (()=> {
    console.log('blue color was completed');
    changeColor ("red", 1000)
})
.then (()=> {
    console.log('red color again');
})



// too much nesting == callback hell, here.

// better code is upside
// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("yellow", 1000, () => {
//                 changeColor("blue", 1000, () => {
//                     changeColor("red", 1000)
//                 });
//             });
//         });
//     });
// });




// Promises in JavaScript

// continution to code (this is from another code.)

// function savetoDb(data, success, failure) {
//   let internetspeed = Math.floor(Math.random() * 10 + 1);
//   if (internetspeed > 4) {
//     // console.log("Data Saved: ", data);
//     success();
//   } else {
//     // console.log("Weak connection! Data NOT Saved.");
//     failure();
//   }
// }

let arr = [2, 6, 53, 65, 23, 97];
//  adding values for two callbacks, succes and failure
// setting up promises.

// savetoDb(
//   arr,
//   () => {
//     console.log("Data Saved: ", arr);
//     // saving another data
//     savetoDb(
//       "hello world",
//       () => {
//         console.log("Data Saved: ", "hello world");
//         // saving another data
//         savetoDb(
//           "Shivam",
//           () => {
//             console.log("Data Saved: ", "Shivam");
//           },
//           () => {
//             console.log("Weak connection! Data NOT Saved.");
//           }
//         );
//       },
//       () => {
//         console.log("Weak connection! Data NOT Saved.");
//       }
//     );
//   },
//   () => {
//     console.log("Weak connection! Data NOT Saved.");
//   }
// );

// Actual Promises-starts from here

function savetoDb(data, success, failure) {
    return new Promise((success, failure) => {
        let internetspeed = Math.floor(Math.random() * 10 + 1);
        if (internetspeed > 4) {
            success("success: data was saved");
        } else {
            failure("failure: weak connection");
        }
    });
}

// savetoDb("Shivam is on github")


// then() and catch() methods

let request = savetoDb("Shivam here");         //req = promise object
console.log(request);

request
    .then((result) => {
        console.log("data1 saved");
        console.log("Result of promise", result);
        return savetoDb("Taj Mahal")
    })
    .then((result) => {
        console.log("data2 saved.");
        console.log("Result of promise", result);
        return savetoDb("Im DAta3")
    })
    .then((result) => {
        console.log('data3 saved.');
        console.log("Result of promise", result);
    })
    // catch is just like in try-catch type, catch is for, after error
    .catch((error) => {
        console.log("Promise was rejected");
        console.log("Error of promise", error);
    })


// promises - improved version

