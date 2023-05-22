// new foo()
// function foo() {}

// new foo()
// class foo {}   // 类不存在变量提升,报错

Foo.prototype.baz = function() {
  function Foo() {
    this.b = 2
  }
}

class foo {
  #a = 1
  constructor() {
    this.b = 2
  }

baz() {
  console.log(this.#a);
}

static bar () {
  console.log(this.#a);
}
}

let f = new Foo();

for (let i in f ) {
  console.log(i);
}