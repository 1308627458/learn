// function foo() {
//   let name = '邹总'
//   let age = 18
//   let sex = 'boy'

//   return function () {
//     return `${name} 今年 ${age} 岁` 
//   }

// }

// let bar = foo();

// console.log(bar());


// 实现一个累加器函数

function add() {
  let num = 0
  return function () {
    return num++
  }
}
let sum = add()
console.log(sum());
console.log(sum());
console.log(sum());