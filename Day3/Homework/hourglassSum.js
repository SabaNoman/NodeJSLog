console.log("------HourglassSums------HackerRank")
let tempsum = 0;
const sums=[]
const arr=[
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0]
]
//Start of outer loop, i.e. the vertical loop, going to next line
for (let ver=0; ver<4; ver++){

    //Start of horizontal loop after each hourglass is completed
    for (let hor=0; hor<4; hor++){

        //Loop for each hourglass
        let i = ver, j = hor;
        //arr[i][j], arr[i][j+1], arr[i][j+2]
        //arr[i+1][j+1]
        //arr[i+2][j], arr[i+2][j+1], arr[i+2][j+2]

        tempsum = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2]
        sums.push(tempsum)
        console.log(tempsum)
    }
}

console.log(Math.max.apply(null,sums))












// for (let i=0;i<=3;i++){    
//     for (let j=0;j<3;j++){   
//         let temp=0
//         temp=arr[i][j]
//         console.log(arr[i][j])
//         tempsum += temp        
//     }
//     console.log(tempsum)
// }
// console.log(tempsum)