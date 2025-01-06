// Passing Json to the browser using CreateServer
const http = require('http');
http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type':'application/json'});
    stdobj=[
        {'firstname':'Saba', 'lastname':'Noman'},
        {'firstname':'Maria', 'lastname':'Aftab'},
        {'firstname':'Tooba', 'lastname':'Haris'}
    ]
    res.write(JSON.stringify(stdobj));
    res.end();

}).listen(8000)


//Using Event Emitter
// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('greet', (name, lname) => {
//     console.log("Hello", name, lname);
// });


// eventEmitter.emit('greet', 'Ali', 'Haider');
