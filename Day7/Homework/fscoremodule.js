import fs from "fs";
fs.readFile("testfile.txt", "utf8", (err, data) => {
    if (err) {
        console.log("file not found");
        return;
    }
    console.log(data)
}
)

const newfile = "mynewfile.txt"
const data = "Writing content"
fs.writeFile(newfile, data, err => {
//     //you should add err, you could leave it empty, but it is
//     //best practice to write err. 
//     //writefile creates a new file even if it doesnt exist
//     //if I didnt write err in the above line I 'd still have to pass an
//     //empty brackets showing that i am passing the third argument but its empty    
    console.log(data)
})

const newdata = "appending more content"
fs.appendFile(newfile, newdata, 'utf-8', (err) => {
    if (err) {
        console.log("cannot append file")
    }
    else {
        console.log(newdata)
    }
})

fs.rename("mynewfile.txt", "verynewfile.txt", (err) =>
{
    console.log("File renamed")
})

fs.rm("verynewfile.txt", (err) => {
    if (err) {
        console.log("Cannot delete file")
        return
    }
    console.log("File deleted")
})

//I haven't used rmdir because it is deprecated
fs.rm("verynewfolder", {recursive:true, force:true}, (err) => {
    if (err) {
        console.log("Cannot delete folder")
        return
    }
    console.log("Folder deleted")
})
