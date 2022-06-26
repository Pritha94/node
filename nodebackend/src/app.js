const express = require('express');


const app = express();
const port = process.env.PORT || 3000;

app.get('/', function(req, res) {
    // res.send('Hello World')
    res.status(201).write('<h1>This is express</h1>');
    res.status(201).write('<h1>This is Index page</h1>');
    res.send();
})

app.listen(port, () => {
    console.log(`listen the port ${port}`);
})