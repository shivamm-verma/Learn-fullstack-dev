let gameSeq = [];
let userSeq = [];

let btns = ["red", "yellow", "green", "blue"]
let started = false;
let level = 0;
let highest = 0;
let highestScore = 0;

let h2 = document.querySelector("h2")

let start = document.querySelector(".start-btn");
start.addEventListener("click", function () {
    if (started == false) {
        console.log("game started");
        audioStart();
        started = true;

        levelUp();
    }
});



function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 300)
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash")
    }, 300)
}


function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level: ${level}`;

    let randNo = Math.floor(Math.random() * 4)
    // console.log (randNo)
    let randColor = btns[randNo];
    let randBtn = document.querySelector(`.${randColor}`)

    gameSeq.push(randColor)
    console.log("Game Seq: ", gameSeq);
    gameFlash(randBtn);
}


function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        
        //checking index
        if (userSeq.length == gameSeq.length) {
            //if index were equal, cross checking length
            setTimeout(levelUp, 1000);
            audioClick();                                   // succesfully great play- audio
        }
    } else {
        h2.innerHTML = `Game Over! your score was <b>${level}</b> Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        console.log("wrong value");
        let h3 = document.createElement("h3")
        h2.append(h3)
        h3.classList.add("highscore")

        // Update the highest score
        if (level > highestScore) {

            highestScore = level;
            highest = highScore(level, highest)
        }
        
        h3.innerText = `HighScore: ${highest}`;
        audioFail();                                            // wrong play- audio
        reset();
    }

}




function btnPress() {
    // console.log(this);
    userFlash(this)

    userColor = this.getAttribute("id")
    userSeq.push(userColor)
    console.log("User Seq: ", userSeq);
    // audioClick();
    checkAns(userSeq.length - 1)              //also means same as the size of game&user seq
}

let allBtns = document.querySelectorAll(".btn")

for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

// highest = 0
// let h3 = document.createElement ("h3")
// h3.classList.add("highscore")
function highScore(lvl, high) {
    // h2.append(h3)
    if (lvl >= high) {
        high = lvl;
        // console.log();
        return high;
    }

}

// creating functions for playing music effects in the game.
function audioClick() {
    let msc = new Audio("button-click.mp3")
    msc.play();
}
function audioFail() {
    let msc = new Audio("wrong-buzzer.mp3")
    msc.play();
}
function audioStart() {
    let msc = new Audio("start-button.mp3")
    msc.play();
}
