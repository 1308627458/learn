// let obj = {} // new Object

// // obj.__proto__ === Object.prototype

// Object.prototype.hasOwnProperty(key)
// obj.hasOwnProperty(key)

// Object.prototype.__proto__ == null 

Person.prototype.run = function() {
  console.log('I am running');
} 

function Person(name, age) {
  this.name = name,
  this.age = age
}

const p1 = new Person('老宋', 19)
const p2 = new Person('小明', 20)

console.log(p1, p2);
console.log(p1.run());