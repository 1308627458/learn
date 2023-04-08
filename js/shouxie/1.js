// 构造函数
// 那一站？ Function -> Object
function Person (name, age) {
    // 基于原型的封装  {}
    this.name = name
    this.age = age
}
Person.prototype.sayHi = function() {
    console.log(`你好，${this.name}`);
}
const aTao = new