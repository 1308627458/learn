
// 高阶函数， 让函数只执行一次
const once = function(fn) {
  let done = false;
  return function() {
    if(!done) {
      fn()
    }else{
      console.log('只能执行一次');
    }
    done = true;
  }

}

function foo() {
  console.log('foo');
}
const bar = once(foo)
bar()
bar()
bar()