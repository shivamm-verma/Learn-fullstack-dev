
// promise using async function;

async function greet() {
    console.log("hello");
}
async function greet2() {
    throw "shivam-made-error-101";      //throws error
    console.log("hello");
}
// greet();
// greet2();


// un-comment this, if needed again!
// greet()
//     .then((result) => {
//         console.log("promise resolved-greet1")
//         console.log("result: ", result);
//     })
//     .catch((error) => {
//         console.log("promise Failed.-greet1");
//         console.log("error: ", error);
//     })

// greet2()
//     .then((result) => {
//         console.log("promise resolved-greet2")
//         console.log("result: ", result);
//     })
//     .catch((error) => {
//         console.log("promise Failed.-greet2");
//         console.log("error: ", error);
//     })


let five = async () => { return 5 };


// Await keyword;

function getNum() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.floor(Math.random() * 10) + 1;
            // return num;
            console.log(num);;
            resolve()
        }, 1000)
    })

}

async function demo() {
    // await waits a Task for a second, and let nothing runs before a tasks get completed

    // error fixing
    try {
        await getNum();
        await getNum();
        await getNum();
        await getNum();
        getNum();
    } catch (err) {
        console.log("Caught error: ", err);
    }

}
console.log("-------------------------------------------");

// API in javascript [important]

// Application programming interface
// JSON: javascript object notation

let jsonRes = '{"fact":"A cat can jump 5 times as high as it is tall.","length":45}';
// console.log(jsonRes);
// now converting this string JSON into a real JSON - JS object (accesible)

let validRes = JSON.parse(jsonRes)
console.log(validRes);
console.log(validRes.fact);

// popular API website examples;
// ...
// ...
// ...




// First API request

console.log("-------------------------------------------");

let url = "https://catfact.ninja/fact";

fetch(url)
    .then((res) => {
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data.fact)
        return fetch(url);
    })
    .then((res) => {
        return res.json();
    })
    .then((data2) => {
        console.log(data2.fact);
    })
    .catch((err) => {
        console.log("Error- ", err);
    })


console.log("-------------------------------------------");


let newUrl = url;

async function getFacts() {
    try {
        let res = await fetch(newUrl);
        let data = await res.json()
        // console.log(data);
        console.log(data.fact);
    }
    catch(err) {
        console.log("Error: ", err);
    }
    console.log("async function ended");
}

console.log("-------------------------------------------");
getFacts();
console.log("-------------------------------------------");