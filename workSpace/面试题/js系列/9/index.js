class Car {
  constructor(color) {
    this.color = color;
    this.speed = speed
  }
}

// 货车

class Truck extends Car {
  constructor(color, speed) {
    super(color, speed);
    this.container = true // 货箱
  }
}

let t = new Truck('red','100');

