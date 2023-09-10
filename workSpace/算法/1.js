// 数组去重

let arr = [1,2,5,3,4,3,5,4,'a','a','b','b',null,null,undefined,undefined]

// 第一种用set
// console.log([...new Set(arr)]);


// 第二种，用indexOf
function unique(arr) {
  const newarr = []
  for(let i =0; i< arr.length; i++) {
    if( newarr.indexOf(arr[i]) == -1) {
      newarr.push(arr[i])
    } 
  }
  return newarr
}

console.log(unique(arr));

// 第三种
// let arr3 = [1,2,5,3,4,3,5,4]

// function unique(arr) {
//   arr = arr.sort()
//   const arr1 = []
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] !== arr[i-1]) {
//       arr1.push(arr[i])
//     }
//   }
//   return arr1
// }


// console.log(unique(arr3));