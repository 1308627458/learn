// var proxy = new Proxy(target, handler)


var proxy = new Proxy({}, {
  get(obj, prop) {
    console.log('get');
    return obj[prop];
  },
  set(obj, prop, value) {  
    console.log('set');
    obj[prop] = value;
  },
  has(obj, prop) {
    if(prop[0] === '_') {
      return false
    }
  }
})

proxy.age = 18
console.log(proxy.age);