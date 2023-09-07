//  * Copyright (c) 2023 {{Shivam Verma}}
//  * All rights reserved.
//  * {{Thankyou for exploring my code i hope it makes enough sense.}}



butn = document.querySelector(".butn")
inp = document.querySelector("input")
ol = document.querySelector("ol")

function createTask(str) {
    // str = JSON.stringify(str);
    let elem = document.createElement('li')
    elem.innerText = str;
    elem.classList.add("eachtask")
    let delbtn = document.createElement('button')
    delbtn.innerText  = "Delete"
    delbtn.classList.add("delete")
    delbtn.classList.add("butn")
    // current version
    if (str.length > 53) {
        elem.style.width = "fit-content";
        elem.style.maxWidth = "98%";
    }
    elem.append (delbtn)
    ol.appendChild(elem)
}

// creating delete button

let delBtns = document.querySelectorAll(".delete")

ol.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Number of tasks: ", this.childElementCount);

    }

})



butn.addEventListener("click", (() => {
    // console.log ("clicked")
    if (inp.value != "") {
        createTask(inp.value)
        inp.value = ""
    } else {
        // nothing happens if nothing is in input box
    }
}))





console.log(`

Thankyou for using the to-Do app

author: shivam verma~`)

