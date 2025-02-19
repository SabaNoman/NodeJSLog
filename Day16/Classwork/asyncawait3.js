async function userFunc() {
    // Simulate fetching users from a database or API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, name: 'Alice' },
                { id: 2, name: 'Bob' },
                { id: 3, name: 'Charlie' }
            ]);
        }, 1000);
    });
}

async function userDataFunc() {
    // Simulate fetching user metadata (e.g., orders) from a database or API
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { userid: 1, order: 'Order 1' },
                { userid: 1, order: 'Order 2' },
                { userid: 2, order: 'Order 3' },
                { userid: 3, order: 'Order 4' },
                { userid: 3, order: 'Order 5' }
            ]);
        }, 1000);
    });
}

async function runMyPromise(){
    try{
        const user = await userFunc();
        const userMeta = await userDataFunc();
        
        const userWithOrders = user.map((userItem) => {

            const orders = userMeta.filter(metaItem => metaItem.userid ===
                userItem.id).map(metaItem => metaItem.order);
            
            return{
                ...userItem, orders
            };               
        });
        
        console.log(userWithOrders)
        return userWithOrders
                
    }    
    catch{
        console.log('Error')
    }
    
}

runMyPromise()