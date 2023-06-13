let obj = {
  name: '老宋',
  like: {
    sports: 'running',
    book: {
      one: 'js',
      two: 'css'
    }
  }
}

function deepClone(obj) {
  function isObject(o) {
    if ((typeof o === 'object' || typeof o === 'function') && o !== null) {
      return true
    }
    return false
  }

  let newObj = Array.isArray(obj) ? [] : {}
  for (let key in obj) {
    // if (!isObject(obj[key])) {
    //   newObj[key] = obj[key]
    // } else {  // 此时遍历到的是对象 
    //   newObj[key] = deepClone(obj[key])
    // }

    // Object.prototype.hasOwnProperty(key)
    if (Reflect.ownKeys(obj).includes(key)) { // obj 显示具有的属性才拷贝
      newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
    }
  }
  return newObj
}

let newObj = deepClone(obj)
newObj.like.book.one = 'html'
console.log(obj);
console.log(newObj);



