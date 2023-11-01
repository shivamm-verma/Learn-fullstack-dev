const express = require("express");
const app = express();
// console.dir(app)

//>>> Handling requests
let port = 3000;
// using app.listen & app.use to create a new port

app.listen(port, () => {
    console.log('Learning Page---');
    console.log(`App is listening on port ${port}`);
})

// app.use((req, res) => {
//     console.log("request recieved.");
//     // Actually connecting between localhost:port by this
//     //>>> Sending a Response

//     res.send("This is a basic response that Shivam is trying to send it to you.. <333")
//     // res.send ({
//     //     name: "Shivam",
//     //     class: "BTech CSE"
//     // })
//     // res.send(~HTML TAGS~)
//     // Only once such res.send is possible
// })

// using app.use sucks, same website is for every /paths




//>>> Routing (creating /... for the web server) using app.get

app.get("/", (req, res) => {
    res.send("This is a basic response that Shivam is trying to send it to you.. <333")
})
app.get("/author", (req, res) => {
    res.send({
        name: "Shivam",
        class: "BTech CSE"
    })
})


// Genrallized path for non existence of any inputted path

// app.get("*", (req, res) => {
//     res.send("This Page does Not Exist. Check URL.")
// })

// installing nodemon, to automatically refresh server everytime code changes appears
// npm install -g nodemon


//>>> Path parameters

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    htmlStr = `This account belongs to @${username}!`
    res.send(htmlStr)
})

//>>> Query strings
app.get("/search", (req, res) => {
    let { q } = req.query;
    res.send(`Search results for query: ${q}`);
})
