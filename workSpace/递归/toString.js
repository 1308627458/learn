let arr = [1, [2,[3]]]
console.log(arr.toString()); // '1,2,3'
let str = arr.toString()
let newArr = str.split(',').map((item) => {
    return Number(item)
})

console.log(newArr);