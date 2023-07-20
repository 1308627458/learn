Person.prototype.say = function() {
  console.log('hello');
}

function Person(name, age) {
  this.name = 'John';
  this.age = 13;
}

Child.prototype = Object.create(Person.prototype);
Child.prototype.constructor = Child;
function Child(name, age) {
  
  Person.call(this, name, age)

  this.hair = 'black'
}

let c = new Child('小明', 40) 

