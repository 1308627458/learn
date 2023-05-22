// function Person(name) {
//   this.name = name;
// }
// Person.say = function() {
//   console.log('哈哈哈哈');
// }
// let p = new Person('老宋')
// Person.say()


class Person {
  #weight = 120 // 私有属性
  constructor(name) {
    this.name = name;
  }
  static say() {  // 静态方法
    return this.#weight
  }

  
}
let p = new Person()

console.log();