function instance_of(L, R) {
  let O = R.prototype;
  while(L !== null) {
    if (L.__protp__ === 0){
       return true
    }
   L = L.__proto__
  }
}

console.log(instance_of([], Array));