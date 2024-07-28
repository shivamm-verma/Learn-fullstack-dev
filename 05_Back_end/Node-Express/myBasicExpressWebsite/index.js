const express = require("express");
const app = express();
let port = 8080;
app.listen(port, () => {
    console.log(`app is listening on port: ${port}`);
})
// using app.get methods to define for each website page/paths
// >>> Use this first& then Comment Out!
// app.use((req,res) => {
//     console.log("Request recieved");
//     res.send ("Hello there!!")
// })
app.get("/", (req, res) => {
    res.send("<h1>Shivam Verma</h1><p>B. Tech Computer Science Student</p><p>Maharaja Surajmal Institue of Technology, New delhi</p><br><br><a href='localhost:8080/about'>Click to redirect to /about</a>")
})
app.get("/about", (req, res) => {
    res.send("<p>Hello there! Myself Shivam Verma who i keen intrested in Web Development(both frontend and backend), Video Editing, Python/AI/ML, and a lot more crazy tech stuff. Out  of my Working self, i also like playing chess, badminton and Weight Lifting is my Favourite among of them. I've been Weight Lifting since late september, 2020 (it's been more than 3 years of the experience)</p><br><p>Well If i may mention the Skills that I currently have as of right now, they are as following as: </p><br><ul><li>Front end</li><li>Back end</li><li>Basic Python</li><li>content creation</li><li>Video editng(on Davinci Resolve)</li><li>Reading Books</li><li>Communnication Skills</li><li>Gaming</li><li>Chess</li><li>Badminton</li></ul>")
})
// Genrallized path for non existence
app.get("*", (req, res) => {
    res.send("This Page does Not Exist. Check URL.")
})
app.post("*", (req, res) => {
    res.send("you sent a post request.")
})
// app.get("/ig/:username", (req, res) => {
//     let {username} = req.params;
//     res.send(`This account belongs to @${username}`)
// })
//>>> Query strings for searching
app.get("/search", (req, res) => {
    let { q } = req.query;
    res.send(`Search results for query: ${q}`);
})