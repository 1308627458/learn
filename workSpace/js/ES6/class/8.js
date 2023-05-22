class A{
  name = "A"
}


class B extends A{
  constructor() {
    super()
  }
}

let b = new B();
console.log(b.name);