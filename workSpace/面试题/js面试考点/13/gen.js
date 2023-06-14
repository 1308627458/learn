function* foo(x) {
  let y = 2 * (yield (x + 1))
  let z = yield (y / 3)
  return (x + y + z)
}

let it = foo(5)
it.next()  // {value: 6, done:false}
it.next(12) // {value: 8, done: false}
it.next(13) // 
console.log(it.next(13));  // {value: 42, done: true}

function *fetch() {
  yield ajax(url, () => {})
  yield ajax(url1, () => {})
  yield ajax(url2, () => {})
}
