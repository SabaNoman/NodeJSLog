// console.log("Enter something")

// process.stdin.once("data", data=>{
//     console.log(`You typed ${data}`);
//     process.exit()
// })

// process.on('exit', code=>{
//     console.log('Process exit event with code:', code);
// });

console.log("Enter your birth year")

process.stdin.once("data", data=>{
    console.log(`You are ${2024-data} years old`);
    process.exit()
})

process.on('exit', code=>{
    console.log('Process exit event with code:', code);
});
