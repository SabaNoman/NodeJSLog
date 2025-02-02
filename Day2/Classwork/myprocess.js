let env = process.argv.slice(2)
let myvar = []
console.log(env)

env.forEach(element => {
    myvar = element.split("=")
    let [key, value] = myvar    
    console.log(key)
    console.log(value)
});

console.log(myvar)
//to run i typed node myprocess.js saba=32, noman=33