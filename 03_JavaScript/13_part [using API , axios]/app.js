
// using Axios

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        console.log(res.data.fact);
    }
    catch (err) {
        console.log("Error: ", err);
    }
    // console.log("async function ended");
}

console.log("-------------------------------------------");
getFacts();
// getFacts();
// getFacts();
// getFacts();
// getFacts();
console.log("-------------------------------------------");


// printing random facts on to website

async function uploadFact() {
    try {
        let res = await axios.get(url);
        return (res.data.fact);
    }
    catch (err) {
        console.log("Error: ", err);
        return "No Fact found"
    }
}

let btn = document.querySelector('button');
btn.addEventListener('click', async () => {
    // console.log('Button was clicked.');
    let fact = await uploadFact();
    let para = document.querySelector('#result')
    para.innerText = fact
})


let url2 = "https://dog.ceo/api/breeds/image/random";

async function dogImages() {
    try {
        let res = await axios.get(url2);
        source = res.data.message;
        // console.log(source);
        return (res.data.message);
    } catch (err) {
        console.log("error: ", err);
        // return "No  Image Found"
        return "/"
    }
}

let dogbtn = document.querySelector('#dogbtn')

dogbtn.addEventListener('click', async () => {
    let imageLink = await dogImages();
    console.log(imageLink);
    let imageWeb = document.querySelector('#dogimg')
    imageWeb.setAttribute("src", imageLink)                     //consider right syntax

})




// AXIOS:  sending headers

const url3 = "https://icanhazdadjoke.com";

async function getJokes() {
    try {
        const config = { headers: { Accept: "application/json" } }
        let res = await axios.get(url3, config);            // now in the form of json
        console.log(res.data);
        // console.log(res.data.joke);
    } catch (err) {
        console.log("Error: ", err);

    }
}
getJokes();


// Activity using query settings

// let url4 = "http://universities.hipolabs.com/search? name="

// let country = "nepal";
// async function getCollege() {
//     try {
//         let res = await axios.get (url4);
//         console.log(res.data);
//     } catch (err) {
//         console.log('error: ', err);
//     }
// }
// getCollege()




//  get Colleges project using axios and APIs 

let clgbtn = document.querySelector("#clgbtn")

clgbtn.addEventListener ('click', async () => {
    list.innerText = "";
    let country = document.querySelector("input").value;
    console.log(country);

    let colArr = await getCollege(country);
    // console.log(colArr);

    show (colArr)
})
function show(colArr) {
    for (col of colArr) {
        console.log(col.name);

        let list = document.querySelector ("#list")
        let li = document.createElement ("li")
        li.innerText = col.name;
        list.appendChild(li)
    }
}


let url5 = "http://universities.hipolabs.com/search?name="

async function getCollege(country) {
    try {
        let res = await axios.get (url5 + country);
        // console.log(res.data);
        return (res.data);
    } catch (err) {
        console.log('error: ', err);
        return [];
    }
}