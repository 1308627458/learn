var obj = {} , value = null
Object.defineProperty(obj, 'num', {
  enumerable: true,
  get() {
    console.log('执行了 get 操作');
    return value
  },
  set (newVal) {
    console.log('执行了 set 操作');
    value = newVal
  } 
})

obj.num = 1

console.log(obj.num);


function reactive () {

}
