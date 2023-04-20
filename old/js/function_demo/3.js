// 变量的作用域
var name = '龙'  // 全局  window
// this 指向
// js 变量属于 作用域 
function func() {
     y = 2;
    var name = "jay" // func 内部 局部变量
    {       // 块级作用域
        let x = 1;
        var z = 3; // es5 不支持块级作用域
        let name = '涛' 
      }
      console.log(y, z);
}
func();
console.log(y);