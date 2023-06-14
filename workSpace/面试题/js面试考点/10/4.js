// 寄生组合继承

Parent.prototype.say = function() {
  console.log('hello');
}

function Parent(name) {
  this.name = name
}
let proto = Object.create(Parent.prototype)
proto.constuctor = Son
Son.prototype = Object.assign(proto,Son.prototype)
function Son(name) {
  Parent.call(this, name) // 继承到父类的实例属性
  this.age = 18
}
let s1 = new Son('Tom')
console.log(s1.say());
let p = new Parent('Tom')