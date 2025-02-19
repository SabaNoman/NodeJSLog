const user = [
    {'userid':'1','name':'Saba'},
    {'userid':'2','name':'Maria'}
]
const order = [
    {'orderid':'1','userid':'1','itemname':'Jacket'},
    {'orderid':'2','userid':'1','itemname':'Hat'},
    {'orderid':'3','userid':'2','itemname':'Shoes'}
]

function getUser(userid){
    return new Promise(function (resolve, reject){
        const myuserid = user.find((u) => u.userid == userid)
        if (myuserid){
            resolve(myuserid.userid)
        }
        else {reject("sorry")}
    })
    .then(function(msg){
        console.log("User id is: " + msg)
    })
    .catch(function(msg){
        console.log("No user here: " + msg)
    })
}
// console.log(getUser(1))

async function asyncGetUser(myuser){
    console.log('Calling the User ... ');
    await getUser(myuser)
}
asyncGetUser(1)

function getOrder(orderid){
    return new Promise(function (resolve, reject){
        const myorder = order.find(u => u.orderid == orderid)
        if (myorder) {
            resolve(myorder.orderid)
        }
        else {
            reject("No order exits")
        }
    })
    .then(function (msg){
        console.log("Order Id is " + msg)
    })
    .catch(function (msg){
        console.log("Order Id is" + msg)
    })
}

async function fetchOrderDetails(num){
    try{    
        // const result = await getOrder(num)
        // console.log(result)
        // The issue with the above lines is that console.log(result) will output as undefined
        // because it will get stored later in result and we are trying to show it before that
        console.log('Calling the Order ... ');
        await getOrder(num)
    }
    catch{
        console.log('errrror')
    }
}

// console.log(fetchOrderDetails(1)) This gives output as promise pending
// I don't need to console it. when i run fetchOrderDetails, I will recieve a promise
fetchOrderDetails(1)