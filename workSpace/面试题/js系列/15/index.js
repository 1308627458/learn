// function Person() {
//   this.name = 'Tom'
//   this.age = 18
//   return 'hello'

//   obj = {
//     name:'Tom',
//     age: 18
//   }

//   obj.__proto__ = Person.prototype
//   Person.call(obj)
//   return obj
// }

// const p = new Person()

// console.log(p);


function Person() {
  this.name = 'Tom'
  this.age = 18
  return {}
}

function myNew(Fn, ...args) {
  let obj = {}
  obj.__proto__ = Fn.prototype
  let res = Fn.call(obj, ...args)
  return res instanceof Object ? res : obj
}
let p = myNew(Person, 'Tom', 18);
console.log(p);