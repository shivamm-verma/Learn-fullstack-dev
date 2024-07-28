
// //  DOM Event in JavaScript.


// let btns = document.querySelectorAll("button")
// // console.dir(btns)

// // btn.onclick = function () {
// //     console.log("Single Click Only?")
// // }

// for (btn of btns) {
//     btn.onclick = sayHello;                         //only assign function name not ()
//     btn.onmouseenter = function () {
//         console.log ("you hovered Mouse in one of these Switches.")
//     }
//     btn.ondblclick = function () {
//         console.log ("ayy? you double clicked.")
//     }
// }

// function sayHello() {
//     alert ("...umm Hey?")
// }


// //  button.addEventListener (event, callback)
// // (for same event)



// let div = document.querySelector ("div")

// div.onclick = function () {
//     console.log ("clciked once on white div")
// }
// div.addEventListener ("click", instr)
// // div.addEventListener ("mouseenter", instr)


// function instr() {
//     console.log ("After addEventListener, twice actions performed in same event (click)")
// }



//  activity (A Program that genrates random colour into a Div rectangular block.)

let btn = document.querySelector(".genrat")
btn.addEventListener("click", function () {
    let head3 = document.querySelector("h3");
    colorGen = randomColor();
    head3.innerText = colorGen;

    let div1 = document.querySelector(".colorbox")
    div1.style.backgroundColor = colorGen;

    console.log("Colour updated.")
})

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red}, ${green}, ${blue})`;
    return color;
}
randomColor()






let p = document.querySelector("p")

p.addEventListener("click", function () {
    console.log("Parah was clicked.")
})

let box = document.querySelector(".box")
box.addEventListener("mouseenter", function () {
    console.log("Mouse inside the box.");
})


// "this" in event listener

box.addEventListener("click", function () {
    console.log(this)                        //returns the whole .box tag
    console.log(this.innerText);                //returns inner text of this .box tag
    this.style.backgroundColor = "yellow";
})




// KEYBOARD EVENTS.


let newbtn = document.querySelector(".newbtn");
let inp = document.querySelector("input");

newbtn.addEventListener("click", function (e) {
    console.log(e);
})
newbtn.addEventListener("dblclick", function (e) {
    console.log(e);
})


inp.addEventListener("keydown", function (event) {
    console.log("_________________________________");
    console.log("Key: ", event.key);
    console.log("Code: ", event.code);
    console.log("Key was pressed.");
    console.log("_________________________________");
})

// inp.addEventListener ("keyup", function () {
//     console.log("Key was released.");
// })

gameinp = document.querySelector("#gameinp")

gameinp.addEventListener("keydown", function (event) {
    // console.log("Key: ",event.key);
    // console.log("Code: ",event.code);

    if (event.code == "ArrowUp" || event.code == "KeyW") {
        console.log("Character moves Forward.");
    } else if (event.code == "ArrowDown" || event.code == "KeyS") {
        console.log("Character moves Backward.");
    } else if (event.code == "ArrowLeft" || event.code == "KeyA") {
        console.log("Character moves Left.");

    } else if (event.code == "ArrowRight" || event.code == "KeyD") {
        console.log("Character moves Right.");

    } else if (event.code == "ControlLeft" || event.code == "ControlRight") {
        console.log("Shooting...🚀🔥");
    }
})
// key actually means value entered from the Keyboard.
// And, event.code means the button (that can enter 2 different from a single button)




//  form EVents


form1 = document.querySelector ("#form1")

form1.addEventListener ("submit", function(event) {
    event.preventDefault ();
    let usern = this.elements[0];
    let passw = this.elements[1];
    console.log("your username: ",usern.value);
    console.log("your password: ",passw.value);
    
    alert (`Hi ${usern.value}, your password is set to: ${passw.value}`)



    let inp1 = document.querySelector ("#inp1");
    console.log(inp1.value,"-was Donated. $$$");

    alert ("Data Submitted.")
})

// Extracting Data from forms.        



// more events


// change-event
usern.addEventListener ("change", function () {
    console.log("Input chahnged.");
    console.log("New value: ",this.value);
})
usern.addEventListener ("input", function () {
    console.log("value changes to: ",this.value);
})


// input-event



