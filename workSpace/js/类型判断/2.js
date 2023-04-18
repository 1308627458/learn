let type = typeof a;

Object.prototype.toString() // undefined null 不具备构造函数，所以没有toString()方法

function foo() {
    console.log(this.a);
}
let obj = {
    a: 1,
    fn: foo
}
obj.fn()
delete obj.fn

console.log(Object.prototype.toString.call(123).slice(8,-1) );

console.log(Object.prototype.toString.call(undefined));
