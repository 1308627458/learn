// let arr = [2, 4, 7, 9, 21, 43, 1]
// let arr2 = arr.map((item, index, arr) => {
//   return item * 2
// })
// console.log(arr2);
// 将数组中的每一项都 * 2

// [1, 2, 3].map(parseInt)
// parseInt(1, 0)   1
// parseInt(2, 1)  NaN
// parseInt(3, 2)  NaN 

// let arr = [2, 4, 7, 9, 21, 43, 1]
// // 找出大于 10 的值
// let arr2 = arr.filter(item => item > 10)
// console.log(arr2);

let arr = [2, 4, 7, 9, 21, 43, 1]
// 计算和
// pre 上一次 reduce 的执行结果
let arr2 = arr.reduce((pre, item, index, arr) => {
  return pre + item
}, 0)
console.log(arr2);