console.log('script start')
async function async1() {
  await async2() // await 在当前新版浏览器中执行提前了
  console.log('async1 end') // await 会将后续的代码挤入微任务队列中
}
async function async2() {
  console.log('async2 end')
}
async1()
setTimeout(function () {
  console.log('setTimeout')
}, 0)
new Promise(resolve => {
  console.log('Promise')
  resolve()
})
  .then(function () {
    console.log('promise1')
  })
  .then(function () {
    console.log('promise2')
  })
console.log('script end')

// script start
// async2 end
// promise
// script end
// async1 end
// promise1
// promise2
// setTimeout

[async2(),'async1 end' ,promise1, promise2]
[ setTimeout ]