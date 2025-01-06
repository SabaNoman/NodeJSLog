import http from 'http';
import fs from 'fs';

const writebody=function(req, res){    
    fs.readFile("nessswhtml.html", "utf8", (err, data) => {
        if (err) {
            fs.readFile("404.html", (error, notFoundData) => {
                if (error){
                    res.writeHead(404, {"content-type":"text/html"});
                    res.end("<h1>Not Found</h1>");                    
                }
                // res.writeHead(200, {"content-type":"text/html"});
                // res.end(notFoundData);
                res.writeHead(301, {'location':'www.google.com'})
                res.end();
            })
            return;
        }            
        res.writeHead(200, {"Content-Type":"text/html"});
        res.end(data);
        })
}

http.createServer(writebody).listen(8000);



// const writebody=function(req,res){    
//     fs.readFile("nessswhtml.html", "utf8", (err, data) => {
//         if (err) {
//             res.writeHead(404);
//             res.end(JSON.stringify(err));
//             return;
//         }            
//         res.writeHead(200, {"Content-Type":"text/html"});
//         res.end(data);
//         })
// }
