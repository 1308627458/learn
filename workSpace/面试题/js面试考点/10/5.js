class Parent {
  constructor(value) {
    this.value = value;
  }
  getValue() {
    console.log(this.value);
  }
}

class Child extends Parent {
  constructor(value) {
    super(value)
    // this.value = value
  }
}

let c = new Child(1)
c.getValue()