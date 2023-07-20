let obj = {
  name: '11',
  like: {
    a: '美食',
    b: '旅游'
  },
  sex: 'boy',
  num: [1, 2, 3, 4]
}
let newObj = deepClone(obj)
obj.like.a = '喝酒'

function deepClone(obj) { // Object
  if(obj instanceof RegExp) return new RegExp(obj)
  if(obj instanceof Date) return new Date(obj)

  let newObj = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) { // key 是否是Obj显示具有的
      newObj[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}

console.log(newObj);