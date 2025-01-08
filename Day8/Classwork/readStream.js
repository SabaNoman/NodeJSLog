import fs from 'fs';

//Use fs.createReadStream() method
let reader = fs.createReadStream("fakedata.json",
    {   start: 1, 
        end: 30,
    })
reader.on('data', function(chunk){
    console.log(chunk.toString());
})


let readableforwr = fs.createReadStream('fakedata.json', {
    start: 0, 
    end: 48,
});
let writableStream = fs.createWriteStream('output.txt', {'flags': 'a'});

readableforwr.on('data', function(chunk){
    writableStream.write(chunk);
})