// 找出多维数组中的最大值


function findMax(arr) {
  const newArr = []
  arr.forEach((item, index) => {
    newArr.push(Math.max(...item)) 
  })
  return newArr
}

console.log(findMax([
  [1,2,3],
  [45,6,7,8],
  [3,89,7,98],
  [4,6,77,6]
]));


arr = [1,2,3,4,5]
console.log(...arr);