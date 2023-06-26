// 合并两个有序数组变成新的有序数组

let a = [1, 2, 3, 4]
let b = [2, 4, 5, 6]
// [1,2,2,3,4,4,5,6]

const merge = (a, b) => {
  // let newArr = a.concat(b)
  // return newArr.sort((a, b) => a - b)

  let arr = [], i = 0 , j = 0;
  while(i < a.length && j < b.length) {
    if(a[i] <= b[j]) {
      arr.push(a[i]);
      i++;
    }else {
      arr.push(b[j]);
      j++;
    }
  }

  if(i < a.length) {
  arr =  arr.concat(a.slice(i))
  }
  if(j < b.length){
  arr = arr.concat(b.slice(j))
  }

  return arr
}

console.log(merge(a, b));