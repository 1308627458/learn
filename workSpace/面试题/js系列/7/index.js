// let a = 1

// if(1) {
//   console.log(a);
//   let a = 2 
// }

// function foo() {
//   console.log(a);
// }

var a = 2
function foo() {
  console.log(a);
}
function bar() {
  var a = 3
  foo()
}
bar()