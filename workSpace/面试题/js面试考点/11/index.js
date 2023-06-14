// let p = new Proxy(target, handle)

let obj = {
  a: 1
}

// obj.a
// console.log(obj.hasOwnProperty('a') );

function observer() {
  console.log('a变化了');
}

obj.a = 2
obj.a = 3