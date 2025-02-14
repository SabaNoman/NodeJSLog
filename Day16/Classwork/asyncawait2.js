const user = [
    {'userid':'1','name':'Saba'},
    {'userid':'2','name':'Maria'}
]
const order = [
    {'orderid':'1','userid':'1','itemname':'Jacket'},
    {'orderid':'2','userid':'1','itemname':'Hat'},
    {'orderid':'3','userid':'2','itemname':'Shoes'}
]

// function getUser(userid){
//     return new Promise(function (resolve, reject){
//         const myuserid = user.find((u) => u.userid == userid)
//         if (myuserid){
//             resolve(myuserid.userid)
//         }
//         else {reject("sorry")}
//     })
//     .then(function(msg){
//         console.log("User id is: " + msg)
//     })
//     .catch(function(msg){
//         console.log("No user here: " + msg)
//     })
// }

// async function asyncGetUser(myuser){
//     console.log('calling');
//     const result = await getUser(myuser)
//     // console.log(result)
// }
// asyncGetUser(1)

function getOrder(orderid){
    return new Promise(function (resolve, reject){
        const myorder = order.find(u => u.orderid == orderid)
        console.log(myorder)
        if (myorder) {
            resolve(myorder)
        }
        else {
            reject("No order exits")
        }
    })
}
async function fetchOrderDetails(num){
    try{    
        const result = await getOrder(num)
        // console.log("Order Id issss", result)
    }
    catch{
        console.log('errrror')
    }
}

// console.log(getUser(1))
console.log(fetchOrderDetails(1))

// .then(function (msg){
//     console.log("Order Id is" + msg)
// })
// .catch(function (msg){
//     console.log("Order Id is" + msg)
// })


async function fetchOrderDetails(num){
    try{    
        const result = await getOrder(num)
        // console.log("Order Id issss", result)
    }
    catch{
        console.log('errrror')
    }
}

// console.log(getUser(1))
console.log(fetchOrderDetails(1))

// function userFunc(){}
// function userDataFunc(){}

async function runMyPromise(){
    try{
        const result1 = await userFunc();
        const result2 = await userDataFunc();
        
        const userWithOrders = user.map((userItem) => {

            const orders = userMeta.filter(metaItem => metaItem.userid ===
                userItem.id).map(metaItem => metaItem.order);
            
            return{
                ...userItem, orders
            };               
        });
        return {result1, result2, userWithOrders};
    }    
    catch{
        console.log('error')
    }
}