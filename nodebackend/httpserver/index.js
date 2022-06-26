/*
HTTP respons status code indicate wheather a specific HTTP request has been successfully complete or not.
informational response(100-199)
successful response(200-299)
redirects(300-399)
client error(400-499)
server error(500-599)
*/
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url == '/') {
        res.end("Hello I am Pritha");
    } else if (req.url == "/about") {
        res.end("THis is about me");
    } else if (req.url == "/contact") {
        // res.write("u can contact me");
        res.end("u can contact me");
    } else {
        res.writeHead(404, { "Content-type": "text/html" });
        res.end("<h1>404 ! error page. Page not found</h1>")
    }
});
server.listen(8000, "127.0.0.1", () => {
    console.log(`Port no is 8000`);
})