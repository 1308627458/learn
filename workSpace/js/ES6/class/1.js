// Person.prototype.say = () => {
//   console.log('hello');
// }

// function Person (name, age) {
//   this.name = name
//   this.age = age
// }
// let p = new Person('小明',18)
// p.say() 


class Person {
  constructor(name, age) {// 默认返回一个实例对象this
    this.name = name
    this.age = age
  }
}
let p = new Person('小明',18)
console.log(p instanceof Object) 