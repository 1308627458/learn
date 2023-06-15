// async function test() {
//   // return new Promise((resolve, reject) => {
//   //   resolve ('1')
//   // })
//   // return Promise.resolve('1')
//   // let value = await sleep()
//   // return '1'
//   await a()
//   await b()
//   console.log('c');

//   function a() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('a');
//       resolve()
//     }, 1000)
//   })
// }

// function b() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('b');
//       resolve()
//     }, 500)
//   })
// }
// }
// test()


let a = 0
let b = async () => {
  a = a + await 10 // generator a = 0    Promise.resolve(10)
  console.log('2', a); // 10
}
b()
a++
console.log('1', a); // 1
