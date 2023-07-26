const add = (a, b) => a + b

const calc = memoize(add)

console.log(calc(10, 20)); // 30
console.log(calc(10, 20)); // 立即得到30


// 闭包
function memoize(fn) {
  let cache = new Map()  // { []: 30 }
  return function(...args) {
    if (!cache.has([args])) {
      cache.set(args, fn.apply(this, args))
    }
    return cache.get(args)
  }
}