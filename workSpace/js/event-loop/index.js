// function a() {
//   console.log(1);
// }
// a()

// setTimeout(() => {
//   console.log(2);
// },1000)

// function b() {
//   console.log(3);
// }
// b()




console.log('start');

async function async1() {
  await async2() // await 会阻塞下一行的代码 
  console.log('async1 end'); // 被挤入微任务队列
}
async function async2() {
  console.log('async2 end');
}
async1()


setTimeout(() => {
  console.log('setTimeout');
}, 0)

new Promise(resolve => {
  console.log('Promise');
  resolve()
})
  .then(() => {
    console.log('Promise1');
  })
  .then(() => {
    console.log('Promise2');
  })

console.log('end');


