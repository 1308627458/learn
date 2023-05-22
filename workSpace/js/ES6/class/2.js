class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  say() {
    console.log('hello')
  }
}
let p = new Person('小明',18)
p.say()