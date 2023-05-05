function foo () {
 return  new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log(1);
    resolve()
  }, 1000);
 })
}
function bar () {
  setTimeout(() => {
    console.log(2);
  }, 3000);
}
function baz () {
  setTimeout(() => {
    console.log(3);
  }, 1000);
}
// pending resolved reject
foo()
.then(() => { // then() 也会返回一个 promise 对象
  return bar()
})
.then(() => { // Promise resolved().then()
  baz()
})