// 组合继承

Parent.prototype.say = function() {
  console.log('hello');
}

function Parent(name) {
  this.name = name
}
// 继承到父类的原型
Son.prototype = Object.create(Parent.prototype)
function Son(name) {
  Parent.call(this, name) // 继承到父类的实例属性
  this.age = 18
}

let s1 = new Son('Tom') 
let s2 = new Son('Jerry')

console.log(s1.name);
