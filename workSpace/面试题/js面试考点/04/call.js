function foo(x, y) {
  console.log(this.a, x + y);
}

const obj = {
  a: 1
}

// foo.call(obj, 1, 2)

Function.prototype.myCall = function (context, ...args) {
  if (typeof (this) !== 'function') return new TypeError(`${this}.call is not a function`)
  const fn = Symbol('fn')
  context[fn] = this
  context[fn](...args) // 解构
  if (context.hasOwnProperty(fn)) {
    delete context[fn]
  }
}

foo.myCall(obj, 2, 3)
console.log(obj);
