

let smallImages = document.getElementsByClassName("oldImg")

for (let i = 0; i < smallImages.length; i++) {
    console.log(`Object No.${i + 1};`);
    console.dir(smallImages[i]);
    console.log(`SRC of Object No.${i + 1};`);
    console.dir(smallImages[i].src);

    // updation of image src to spiderman (all)
    // smallImages[i].src = "assets/spiderman_img.png";
    console.log("--------------------------------------");
}

// Querry Selector (Just like CSS selector can pass through it.)
console.dir(document.querySelector("h1"))

// console.dir (document.querySelectorAll ("p"))
let paras = (document.querySelectorAll("p"));
// for (let i = 0; i < paras.length; i++) {
//     paras[i].innerText = "ahh hey? how you doing."
// }


// changing innerText and innerHTML of tags

let heading = document.querySelector("h1");
// console.dir (heading.innerText)
heading.innerHTML = `<i>${heading.innerText}</i>`;
heading.innerHTML = `<u><i>${heading.innerText}</i></u>`;


// changing Styling using javascript.

heading.style.color = "black";
heading.style.backgroundColor = "red";



// changing color of anchor tag redirecting links

let linksBox = document.querySelectorAll(".box a")
for (let i = 0; i < linksBox.length; i++) {
    linksBox[i].style.color = "purple";
}


// classList of a HTML Tag
let image = document.querySelectorAll("img")
for (let i = 0; i < image.length; i++) {
    console.dir(image[i].classList)
}


// classList Methods
// classList.add() ----- to add new classes
// classList.remove() ----- to remove classes
// classList contains() ----- to check if class exists
// classList.toggle() ----- to toggle between add & remove
// ?: toggle is like a switch (if class exists, it'll add it
// , else it'll remove it.)


let topLine = document.querySelector("h1")
console.dir(topLine.classList.add("headding"))
console.dir(topLine.classList.add("h1TagOfHTML"))
console.dir(topLine.classList.add("GOAT"))
console.dir(topLine.classList.add("geek"))
console.dir(topLine.classList.contains("goat"))       //case sensitve
console.dir(topLine.classList.contains("GOAT"))       //case sensitve
console.dir(topLine.classList.remove("geek"))
// console.dir (topLine)

console.log("-----Class Names of H1 Tag--------------")
for (char of (topLine.classList)) {
    console.dir(char)
}

function greenPara() {
    for (let i = 0; i < paras.length; i++) {
        paras[i].classList.toggle("green")
    }
}

// using toggle
let blocks = document.querySelector(".box");
function yellowBlock() {
    blocks.classList.toggle("yellowBg");
}


let box = document.querySelector(".box")
console.dir(box.parentElement)        //returns body tag itself
console.dir(box.children)      //returns h4&ul

box.previousElementSibling.style.color = "violet";
box.previousElementSibling.style.fontWeight = "bolder";
box.previousElementSibling.style.textDecoration = "underline darkgreen solid";



// adding elements using JS into HTML file
// document.createElement'p')

// • appendChild( element)
// • append( element)
// • prepend( element )
// • insertAdjacent( where, element)


let newP = document.createElement("p");
newP.innerText = "Hey! it's new P, btw.";

let body = document.querySelector("body")
// only one such activity is possible.

// body.append (newP)
box.appendChild(newP)
// body.prepend (newP)


let btn = document.createElement('button');

btn.innerText = "Click ME!";
btn.style.color = "black"
btn.style.fontWeight = "bold"
btn.style.padding = "0.65rem 2rem 0.65rem 2rem"
btn.style.backgroundColor = "crimson"
btn.style.border = "2.5px solid black"
btn.style.borderRadius = "0.5rem"

// box.prepend (btn)
box.append (btn)


// Also strings can be passed.
// box.prepend ("Hi it's shivam actually.")
// box.append ("Hi it's shivam actually.")




// Removing elements
// <parent>.remove (elem)
// <parent>.removeChild (elem)


// box.removeChild (btn)
