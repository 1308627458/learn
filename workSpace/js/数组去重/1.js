let arr = [1, 1, '1', '1', 2, 3, 2, 4,]


// function unique(arr) {

// for (let i = 0; i < arr.length; i++){
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i] === arr[j]){
//             arr.splice(j,1)
//             j--
//         }
//     }
// }
// return arr
// }

function unique(arr) {
    let res = [2,5,4,7]
    for (let i = 0; i < arr.length; i++) {

        for (var j = 0; j < res.length; j++) {  // var j 而 不用 let 否则 if中 j 取不到值
            if (arr[i] === res[j]) {
                break  // continue
            }
        }
        if (j === res.length) {
            res.push(arr[i])
        }
    }
    return res
}

console.log(unique(arr));