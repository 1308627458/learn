var constantize = (obj) => {
  Object.freeze(obj)
  Object.keys(obj).forEach(key => {
    if(typeof obj[key] === 'object' && obj[key] !== null) {
      constantize(obj[key])
    }

  })
}


function myFreeze(obj) {
  if(obj instanceof Object) {
    Object.seal(obj)
    for(let key in obj) {
      if(obj.hasOwnProperty(key)) {
        // if(typeof obj[key] === 'object' && obj[key] !== null) {
        //   myFreeze(obj[key])
        // }
        Object.defineProperty(obj, key, {
          writable:false
        })
      }
    }
  }
}


const obj = {
  a: 1,
  b: {
    n: 2
  }
}

// Object.freeze(obj)  // 冻结对象， 不能修改，不可新增，不可修改 
Object.seal(obj) // 封闭对象  不可以新增，不可以删除，可以修改

myFreeze(obj)

obj.a = 11
obj.b.n = 22
obj.c = 3


// constantize(obj)

console.log(obj);