let arr = [1, 1, '1', '1', 2, 2]

function unique(arr) {
    let newArr = [...arr]  // 重新开辟一个内存空间，不影响原数组 
    let res = []
    let seen
    arr.sort((a, b) => a - b)  // n*logn
    for (let i = 0; i < newArr.length; i++) { // n 
        if (newArr[i] !== seen) {
            res.push(newArr[i])
        }
        seen = newArr[i]
    }
    return res
}

console.log(unique(arr));