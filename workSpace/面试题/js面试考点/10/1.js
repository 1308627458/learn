// 原型链继承

Parent.prototype.say = function() {
  console.log('hello');
}

function Parent(name) {
  this.name = name
}
Son.prototype = new Parent()//Object.create(Parent.prototype)
function Son() {
  this.age = 18
  this.like = {
    book:'html',
    sport:'swimming'
  }
}

let son1 = new Son('Tom') 
let son2 = new Son()
son1.like.book = 'js'

console.log(son2.like.book);

// 子类能继承到父类的所有属性和方法，但是无法给父类传参