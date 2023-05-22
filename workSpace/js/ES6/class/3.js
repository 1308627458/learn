class Person {
 _count = 0
 constructor(name, age){
  this.name = name
  this.age = age
  console.log(this);  // this._proto === Person.pog
 }
 say() {
  console.log(this._count);
 }
}

let p = new Person('小明',18)
// console.log(p);