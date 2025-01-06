import fs from 'fs';

//Use fs.createReadStream() method

let reader = fs.createReadStream("fakedata.json",
    {
        start: 110, 
        end: 300,
    })

reader.on('data', function(chunk){
    console.log(chunk.toString());
})

let readableforwr = fs.createReadStream('fakedata.json', {
    start: 2, 
    end: 48,
});
let writableStream = fs.createWriteStream('output.txt', {'flags': 'a'});

readableforwr.on('data', function(chunk){
    writableStream.write(chunk);
})