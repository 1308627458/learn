let arr = [
  1, 2, 3, 1, 2, 
  {name: '张三', id: {n: 1}},
  {name: '张三', id: {n: 1}},
  {name: '张三', id: {n: 2}},
];

function uiqueArr(arr) {
  let res = []  

  for (let item of arr) { // 3
    
    let isFind = false  // 定义一个开关变量

    for (let resItem of res) {

      if (equal(item, resItem)) {
        isFind = true
        break;
      }
    }

    if (!isFind) res.push(item)

  }

  return res
}

function equal(v1, v2) { // 1, 2
  if ((typeof v1 === 'object' && v1 !== null) && (typeof v2 === 'object' && v2 !== null)) {
    if (Object.keys(v1).length !== Object.keys(v2).length) return false
    for (let key in v1) {
      if (v2.hasOwnProperty(key)) {
        if (!equal(v1[key], v2[key])){
          return false
        }
      } else {
        return false
      }
    } 
    return true
  } else {
    return v1 === v2
  }
}

console.log(uiqueArr(arr));