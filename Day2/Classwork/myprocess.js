let env = process.argv.slice(2)
let myvar = []

env.forEach(element => {
    myvar = element.split("=")
    let [key, value] = myvar    
    console.log(key)
});

console.log(myvar)