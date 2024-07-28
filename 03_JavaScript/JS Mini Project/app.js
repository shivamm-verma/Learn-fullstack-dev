let div = document.querySelector(".vid1");
let ul = document.querySelector(".vid1 ul");
let lis = document.querySelectorAll(".vid1 li");

// if nesting is there, then on clicking, all parent "click" will pass through that Child.

div.addEventListener("click", function () {
    console.log("Div was clicked.", " -not needed stopPropagation() property")
})

ul.addEventListener("click", function (event) {
    event.stopPropagation()                             // new to learn
    console.log("UL was clicked.", " -used stopPropagation() property")
})

for (li of lis) {
    li.addEventListener("click", function (event) {
        event.stopPropagation()                             // new to learn
        console.log("LI was clicked.", " -used stopPropagation() property")
    })
}


// To Do App- activity

let btn = document.querySelector("button")
let inp = document.querySelector("input")
let ol = document.querySelector("ol")
let liTdo = document.querySelector("ol li")

// ol.append (inp.innerText)

btn.addEventListener("click", function (event) {
    let item = document.createElement("li")
    if (!(inp.value === "")) {
        item.innerText = inp.value
        let delBtn = document.createElement("button")
        delBtn.innerText = "Delete"
        delBtn.classList.add("delete")
        item.append(delBtn)
        ol.appendChild(item);
    }
    inp.value = "";
})

let delBtns = document.querySelectorAll(".delete")
// Event Deligation.

ol.addEventListener("click", function (event) {
    // console.log(event.target);
    // console.log(event.target.nodeName);

    if (event.target.nodeName == "BUTTON") {
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Number of tasks: ", this.childElementCount);

    }

})

// for (delbtn of delBtns) {
//     delbtn.addEventListener("click", function () {
//         let par = this.parentElement;
//         par.remove()
//     })
// }

