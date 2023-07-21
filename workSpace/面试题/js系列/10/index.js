var name = '小舒'
function person() {
  console.log(this.name);
}
person()

// 函数在那个词法环境下生效，this就指向谁

var a = 1
function foo() {
  console.log(this.a);
}

var obj = {
  a: 2,
  fn: function foo() {
    console.log(this.a); // a
  }
}
obj.fn()

var obj2 = {
  a: 3,
  bar: obj
}
obj2.bar.fn()

// 当一个函数被一个对象拥有时，对象在调用该函数，函数内部的this指向该对象
// 就近指向拥有该函数的对象



// var obj = {
//   a: 2
// }
// function foo() {
//   console.log(this.a);
// }
// foo.call(obj) // 2
// foo.apply(obj) // 2
// let bar = foo.bind(obj)
// bar() // 2

let a  = 1
const obj = {
  a: 2,
  foo: () => {
    console.log(this.a);
  }
}
obj.foo()