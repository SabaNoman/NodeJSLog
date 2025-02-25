//The following function shows the problem with promises
//We can handle this with .then or async await which makes for cleaner code
function resolveAfter2Seconds() {
    console.log("starting slow promise");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("slow");
            console.log("slow promise is done");
        }, 2000);
    });
}
  
function resolveAfter1Second() {
    console.log("starting fast promise");
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("fast");
        console.log("fast promise is done");
      }, 1000);
    });
}

// resolveAfter2Seconds();
// resolveAfter1Second();

// OUTPUT
// starting slow promise
// starting fast promise
// fast promise is done
// slow promise is done

async function asyncResolve(){
  await resolveAfter2Seconds()
  resolveAfter1Second()
}
asyncResolve()
// now the slow promise will completely finish before starting the fast promise



// function resolveAfterTwoSeconds() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await resolveAfterTwoSeconds();
//     console.log(result);
//     // Expected output: "resolved"
//   }
  
//   asyncCall();
  