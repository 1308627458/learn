// 定义 (封装) 了这个类
// 两种类的封装方法
// js 正宗写法 效果一样的
// es5 基于对象的原型模式

function Person (name, age) {
    this.name = name ;
    this.age = age ;
}
// 函数都有一个Protype 对象
// 函数也是对象
Person.prototype = {
    sayHi() {
        console.log('hello');
    }
}