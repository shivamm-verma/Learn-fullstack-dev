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

let body = document.querySelector("body")
body.append(para1)

let h3one = document.createElement('h3');
h3one.innerText = "I'm a blue h3";
h3one.style.color = "blue";

body.append(h3one)

let div1 = document.createElement("div")
div1.classList.add("box")

// styling of the div
div1.style.border = "3px solid black"
div1.style.backgroundColor = "pink"

h1one = document.createElement('h1')
h1one.innerText = "I'm in a div"
div1.append(h1one)

let para2 = document.createElement('p')
para2.innerText = "ME TOO!"
div1.append(para2)


body.append(div1)

body.append((document.createElement('hr')))
body.append((document.createElement('hr')))
body.append((document.createElement('hr')))
body.append((document.createElement('br')))
body.append((document.createElement('br')))



// ASSIGNMENT QUESTIONS;

// JS (Part 9)
// Practice Questions


// Qs1. Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me":

let btn1 = document.createElement('button')
let inp1 = document.createElement('input')

btn1.classList.add("id")
inp1.classList.add("for")

btn1.setAttribute("id", "btn")
inp1.setAttribute("for", "btn")

btn1.innerText = "Click me"
body.append(inp1)
body.append(btn1)


// Qs2. Add following attributes to the element :
// - Change placeholder value of input to "username"
// - Change the id of button to "btn"

inp1.classList.add("placeholder")
inp1.style.color = "black"
inp1.style.border = "2px solid black"
btn1.style.border = "2px solid black"
inp1.setAttribute('placeholder', 'username')



// Qs3. Access the btn using the querySelector and button id. Change the button
// background color to blue and text color to white.

let btn = document.querySelector("button")
btn = document.querySelector('#btn')               //#btn is ID
btn1.style.backgroundColor = 'blue'
btn1.style.color = 'white'



// Qs4. Create an h1 element on the page and set its text to "DOM Practice" underlined
// Change its color to purple.

let h1two = document.createElement ('h1')
h1two.innerText = "DOM Practice"
h1two.style.textDecoration = "underline solid black"
h1two.style.color = 'purple'
body.append (h1two)




// Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice"
// where Delta is bold.


let para3 = document.createElement ('p')
para3.innerHTML = "Apna College <b>Delta</b> Practice"
body.append (para3)





