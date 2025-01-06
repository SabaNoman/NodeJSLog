console.log("------Reverse the array------HackerRank")
const A = [1,4,3,8,6]

function revArr(arr){
    const newArr = []
    let lenArr = arr.length
    for (let i=lenArr-1;i>=0;i--){
        newArr.push(arr[i])
    }
    return newArr
}

console.log(revArr(A))



function reverseArray(a) {
    // Write your code here
    const newArr = []
    let lenArr = a.length
    for (let i=lenArr-1;i>=0;i--){
        newArr.push(arr[i])
    }
    return newArr
}


// lenA = A.length
// for (i=lenA-1;i>=0;i--){
//     newarr.push(A[i])
// }
// console.log(newarr)