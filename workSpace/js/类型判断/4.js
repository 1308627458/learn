console.log([
 {} instanceof Object
]);
// 原型链
[].__proto__ == Array.prototype
Array.prototype.__proto__ = Object.prototype
Object.prototype.__proto__ = null

a instanceof b 
// a 的隐式原型是否等于 b 的显示原型   a 的隐式原型的隐式原型 一直往上找，直到为 null
