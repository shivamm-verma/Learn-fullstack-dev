//>>> What is Templating? [EJS]

const express = require("express");
const app = express();
const port = 8080;
const path = require("path");           //for accessing from outside


app.use (express.static(path.join (__dirname, "public/css")))
app.use (express.static(path.join (__dirname, "public/js")))
app.set("view engine", "ejs");          //connecting EJS (already required by Express)
// Do this As Always
app.set("views", path.join(__dirname, "/views"))   //for accessing from outside

app.get("/", (req, res) => {
    // res.send ("Looks like we're Connected Now!")
    res.render("home.ejs")
})
app.get("/hello", (req, res) => {
    // res.send ("Looks like we're Connected Now!")
    res.send("Hello, You!")
})


// passing data to EJS

app.get("/rolldice", (req, res) => {
    // res.send("Launching...")
    // storing value of dice
    let diceVal = Math.floor(Math.random() * 6) + 1
    res.render("rolldice.ejs", { diceVal })
})



// INSTAGRAM EJS

app.get("/ig/:username", (req, res) => {
    // const followers = ["adam", "rohan", "manav", "sohan", "mohit", "daksh"]
    let { username } = req.params;
    console.log(username);


    const instaData = require("./data.json");

    const data = instaData[username];
    const userPosts = instaData[username].posts;
    console.log(userPosts);
    console.log(data);

    if (data) {
        res.render("instagram.ejs", { username, data })
    } else {
        res.render("error.ejs");
    }

})




app.listen(port, () => {
    console.log(`Server running on Port: ${port}`);
})