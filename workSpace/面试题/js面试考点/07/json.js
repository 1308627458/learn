let obj = {
  a: 1,
  fn: function() {},
  b: {
    c: 2,
    d: 3,
  },
  c: Symbol('hello') // 无法拷贝
}

// obj.c = obj.b
// obj.e = obj.a
// obj.b.c = obj.c
// obj.b.d = obj.b
// obj.b.e = obj.b.c


let newObj = JSON.parse(JSON.stringify(obj))
console.log(newObj);