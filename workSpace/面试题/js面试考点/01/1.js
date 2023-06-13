const a = []
const b = a
b.push(1)
console.log(a); // [1]


function test(person) {
person.age = 26,
person = {
  name:'荣荣',
  age:18
}
}

const p1 = {
  name:'老罗',
  age: 25
}

const p2 = test(p1)

console.log(p1) // {name:'老罗',age:26}
console.log(p2) // {name:'荣荣',age:18}