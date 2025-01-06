//Using Core Modules Uaing Import: Http, Event, URL
import http from "http";

http.createServer(function (req, res){
    res.writeHead(200, {'content-type':'application/json'});
    let stdobj=[
        {'firstname':'Saba', 'lastname':'Noman'},
        {'firstname':'Maria', 'lastname':'Aftab'},
        {'firstname':'Tooba', 'lastname':'Haris'}
    ];
    res.write(JSON.stringify(stdobj));
    res.end();
}).listen(3000)


const writebody = function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("<h1>HELLO WORLD!</h1>")
    res.end();
}
http.createServer(writebody).listen(8000);



import EventEmitter from "events";
const eventEmitter = new EventEmitter();

eventEmitter.on('greet', (name, lname) => {
    console.log("Hello", name, lname);
});

eventEmitter.emit('greet', 'Ali', 'Haider');



import url from "url";
const adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

/*The parse method returns an object containing url properties*/
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);