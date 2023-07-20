
Person.prototype.say = function() {
  console.log('hello');
}

function Person(name, age) {
  this.name = 'John';
  this.age = 13;
}

function Child(name, age) {
  Person.call(this, name, age)

  this.hair = 'black'
}

let c = new Child('小明', 40) 
console.log(c.name);