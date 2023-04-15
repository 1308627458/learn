let arr = [1, 1, '1', '1', 2, 2]

function unique(arr) {
    let res = [2,5,4,7]
    for (let i = 0; i < arr.length; i++) {
        // if(res.indexOf(arr[i]) === -1){
        //     res.push(arr[i])
        // }

        if(!res.includes(arr[i])){
            res.push(arr[i])
        }
    }
    return res
}

console.log(unique(arr));