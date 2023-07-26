let fn = (x, y, z) => x + y + z

// let curry = (fn) => {
//   return function(x){
//     return function(y){
//       return fn(x, y)
//     }
//   }
// }

const curry = (fn) => {
  return function curryFn(...args) {
    if(args.length < fn.length) { // 没有拆解完成
      return function() {
        return curryFn(...args.concat([...arguments]))
      }
    }
    return fn(...args)
  }
}

let fn1 = curry(fn)
let fn2 = fn1(1)
let fn3 = fn2(2)


console.log(fn3);
// console.log(curry(fn)(1)(2));