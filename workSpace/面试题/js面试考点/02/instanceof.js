// function Person(name) {
//   this.name = name;
// }

// let p = new Person('子建')

// console.log(p instanceof Object);   //p.__proto__ === Object.prototype
// console.log(p instanceof Person);  //p.__proto__ === Person.prototype


const myInstanceof = function (L, R) {
  while (L.__proto__ !== null) {
    if (L.__proto__ === R.prototype) {
      return true
    } else {
      L = L.__proto__
    }
  }
  return false
}

console.log(myInstanceof(p.Person));