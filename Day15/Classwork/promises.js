// let p = new Promise(function (resolve, reject){
//     const x = 1 + 2;
//     if (x===3) {
//         resolve("Success")
//     }
//     else{
//         reject("fail")
//     }
// })
// p.then(function(message)){
//     console.log("This result is now" + message)
// }.catch()

let userIdPromise = new Promise(function (resolve, reject){
    const userId = 2;
    if (userId===2) {
        resolve("correct")
    }
    else{
        reject("incorrect")
    }
})
userIdPromise.then(function(msg){
    console.log("User Id is " + msg);
})
userIdPromise.catch(function(msg){
    console.log("user id is" + msg);
})

let orderPromise = new Promise(function (resolve, reject){
    const orderId = 2;
    if (orderId===2) {
        resolve("correct")
    }
    else{
        reject("incorrect")
    }
})
orderPromise.then(function(msg){
    console.log("Order Id is " + msg);
})
orderPromise.catch(function(msg){
    console.log("Order id is" + msg);
})

console.log("trying chaining")
userIdPromise.then(()=>{
    orderPromise.then()
})
