const myPromise = new Promise((resolve,reject) => {
    const bool = 1;
    if (bool) resolve(1)
    else reject(0)
})
myPromise.then(msg=>console.log(msg))