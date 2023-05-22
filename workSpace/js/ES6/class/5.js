// Parent.prototype.say = function () {
//   console.log('哈哈哈');
// }
// function Parent() {
//   this.name = 'Parent';
// }

// Son.prototype = new Parent();
// function Son() {
//   this.name = 'Son';
// }
// let s = new Son();
// s.say()
class Grandfather {
  _gname =  'gname'
  run() {
    console.log('running');
  }
} 

class Parent extends Grandfather {
  _pname = 'pname'
  say() {
    console.log('哈哈哈');
  }
}

class Son extends Parent {
  _sname = 'sname'
}

let s = new Son();
s.run()