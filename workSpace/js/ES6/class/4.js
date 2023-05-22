// let obj = {
//   a: 1,
//   get num() {
//   return 2
// },
// }
// console.log(obj.num());
// console.log(obj.mun);


let h = 'handle'


class Counter {
  _count = 0

  get value() {
    return this._count
  }

  set setVal(val) {
    this._count = val
  }

  [h] () {
    console.log('hhhhh');
  }
}

let c = new Counter()
c[h]()
// c.setVal = 1
// console.log(c.value);