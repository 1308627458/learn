// 
const arr = ['a', 'b', 'c', 'd']
const arr1 = {'a': 1, 'b': 2, 'c': 3}
// function convert(arr) {
//   const obj = {}
//   let n = 1 
//   for(let key in arr) { 
//       obj[arr[key]] = n
//       n++
//   }
//   return obj
// }

// console.log(convert(arr));

// {'a': 1, 'b': 2, 'c': 3}

for(let index in arr1) {
  console.log(index);
}


for(let index in arr) {
  console.log(index);
}

for(let item of arr) {
  console.log(item);
}