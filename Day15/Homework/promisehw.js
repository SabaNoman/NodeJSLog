// Promise Chaining using then (performing in the class)
// Promise all using catch then finally (use any example)
// Same function for Promise Race, allSettled

//Promise Chaining
const myPromise = new Promise((resolve, reject) => {
    const error = false;
    if (!error) {
        resolve(1);
    }
    else {
        reject(0);
    }
})
myPromise
.then(value => {
    return value
})
.then(newValue => {
    console.log(newValue)
})
.catch(error => {
    console.log(error)
})

//Promise.all
const p1 = Promise.resolve('one');
const p2 = 2;
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3rd Promise");
  }, 5000);
});
const p4 = Promise.reject('Promise rejected')

Promise.all([p1, p2, p3])
.then((values) => {
  console.log(values); //Prints all the values after 5 seconds are complete
})
.catch(msg => {
    console.log(msg)
})
.finally(() => {
    console.log('Gets printed even if resolved')
});

Promise.all([p1, p2, p3, p4]) //promise will get rejected because p4 is rejected
.then((values) => {
  console.log(values); 
})
.catch(msg => {
    console.log(msg)
})
.finally(() => {
    console.log('Get printed even if rejected')
}
);

//Promise Race
const promiseRace1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, 'raceone')
})

const promiseRace2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('racetwo')
    }, 100);
})

Promise.race([promiseRace1, promiseRace2]).then(value => {
    console.log(value) //two will be shown
})

//Promise AllSettled
const promise1 = Promise.resolve(3);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(reject, 100, 'sorry'),
);
const promises = [promise1, promise2];

Promise.allSettled(promises).then((results) =>
  results.forEach((result) => console.log(result.status)),
);

// Expected output:
// "fulfilled"
// "rejected"