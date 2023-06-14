// 经典继承

Parent.prototype.say = function() {
  console.log('hello');
}

function Parent(name) {
  this.name = name
}


function Son(name) {
  Parent.call(this, name) //  this.name = name
  this.age = 18
}

let s1 = new Son('Tom') 
let s2 = new Son('Jerry')

console.log(s1.name);
console.log(s2.name);

// 子类只能继承到父类实例上的属性，无法继承到父类原型上的属性