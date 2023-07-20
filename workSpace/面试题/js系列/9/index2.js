function Person() {
  this.name = 'John';
  this.age = 13;
}

Child.prototype = new Person();
function Child() {
  this.hair = 'black'

}

let c = new Child()
console.log(c.name);