//  QUESTION:

// Add the following elements to the container using only JavaScript and the DOM methods.
// 1. a «p> with red text that says "Hey I'm red!"
// 2. an <h3> with blue text that savs "I'm a blue h3!"
// 3. a «div> with a black border and pink background color with the following elements inside of it:
    // • another <h1> that says "I'm in a div"
    // • a <p> that says "ME TOO!"


let para1 = document.createElement('p');
para1.innerText = "Hey I'm Red";
para1.style.color = "red";

let body = document.querySelector ("body")
body.append (para1)

let h3one = document.createElement ('h3');
h3one.innerText = "I'm a blue h3";
h3one.style.color = "blue";

body.append (h3one)

let div1 = document.createElement ("div")
div1.classList.add ("box")

// styling of the div
div1.style.border = "3px solid black"
div1.style.backgroundColor = "pink"

h1one = document.createElement ('h1')
h1one.innerText = "I'm in a div"
div1.append (h1one)

let para2 = document.createElement ('p')
para2.innerText = "ME TOO!"
div1.append (para2)


body.append (div1)