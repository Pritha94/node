const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log(req.url);

    if (req.url == '/home') {
        res.end("<h1>This is home page</h1>");
    }
})

server.listen(8000, "127.0.0.1", () => {
    console.log(`Port no is 8000`);
});