function foo() {
  console.log(this.a);
}
var a = 1 
// foo()
// const obj = {
//   a: 2,
//   foo: foo
// }

// const obj2 = {
//   a: 3,
//  obj: obj
// }
// obj2.obj.foo() 

// const c = new foo()  // this 被绑定在new的实例对象上


const obj = {
  a: 4
}

foo.call(obj)
foo.apply(obj)
const bar = foo.bind(obj)
bar()