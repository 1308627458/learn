function fn(n) {
  console.log(`val值改为: ${n}`);
}

var obj = { num: 1 }

// 数据劫持
let val = 0
Object.defineProperty(obj, 'num', {
  // value: 2,
  // writable: true,
  enumerable: true,   // 是否可枚举
  // configurable: true,  // 是否可以被配置
  get() {
    return val
  },
  set(newVal){
    val = newVal
  }
})
// { num: 1 , count : 2}

// delete obj.count
// for( let key in obj) {
//   console.log(key);
// }
obj.num =  10
console.log(obj.num);