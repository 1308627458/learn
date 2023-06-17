// var names = '小舒'
// function foo() {
//   let age = 18
//   let a = 1
//   let b = 2
//   return function () {
//     console.log(`${names}: ${age}, ${a}`);
//   }
// }
// const bar = foo()
// bar()

// let c = 1  // window.c = 1

function A() {
  let a = 1
  window.B = function(){
    console.log(a);
  }
}
A()
B()