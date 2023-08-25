let arr = [1, 2, 3]

console.log(Object.prototype.toString.call(arr));  // '[object Array]'


// instanceof 通过原型链查找 
console.log(arr instanceof Object) 

console.log(Array.isArray([]));
// call 改变了toString 方法的执行上下文，


