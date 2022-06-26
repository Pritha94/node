require('dotenv').config();
const express = require('express');
const path = require('path');
const hbs = require('hbs')

const app = express();
const port = process.env.PORT || 3000;

//this is the part of set folder using path module
const staticPath = path.join(__dirname, "../public");
const templatesPath = path.join(__dirname, "../templates/views");
const partialPath = path.join(__dirname, "../templates/partials");

// console.log(path.join(__dirname, "../public"))

app.use(express.static(staticPath)); //To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

app.set('view engine', 'hbs');
app.set("views", templatesPath);
hbs.registerPartials(partialPath);

// app.get("/", (req, res) => {
//     res.writeHead(200, { "Content-type": "text/html" })
//     res.write("<h2>Hello Pritha</h2>");
//     res.send();
// })



app.get("/", (req, res) => {
    res.render("index");
});

app.get("/contact", (req, res) => {
    // res.status(200).render("this is my contact page");
    res.render("contact");
});

app.get("/about", (req, res) => {
    res.render("about");
});
app.listen(port, () => {
    console.log(`Running port is ${port}`);
})