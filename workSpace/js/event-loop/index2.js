function executor(resolve, reject) {
  let rand = Math.random();
  console.log(1)
  console.log(rand)
  if (rand > 0.5)
      resolve()
  else
      reject()
}
var p0 = new Promise(executor);

var p1 = p0.then((value) => {
  console.log("succeed-1")
  return new Promise(executor)
})


var p3 = p1.then((value) => {
  console.log("succeed-2")
  return new Promise(executor)
})

var p4 = p3.then((value) => {
  console.log("succeed-3")
  return new Promise(executor)
})


p4.catch((error) => {
  console.log("error")
})
console.log(2)   


// 全>0.5
// l
// xxx
// 2
// s-1
// 1
// xxx
// s-2
// 1
// xxx
// s-3
// 1
// xxx



// 第一个rand<0.5

// 1
// xxx
// 2
// error