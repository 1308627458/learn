let arr1 = ['A1','A2','B1','B2','C1', 'C2', 'D1', 'D2']
let arr2 = ['A' , 'B', 'C', 'D']

let newarr2 = arr2.map(item => {
  return item + 3
})

let res = [...arr1, ...newarr2].sort().map(item => {
  if(item.includes('3')) {
    return item.split('')[0]
  }
  return item
})

console.log(res);

