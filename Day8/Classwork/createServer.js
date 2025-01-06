import http from "http";

const writebody = function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("<h1>HELLO WORLD</h1>")
    res.end();
}

http.createServer(writebody).listen(3000);
