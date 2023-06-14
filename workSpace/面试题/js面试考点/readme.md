# 1. 数据类型
- 原始类型：String number boolean bigint symbol undef
 null




- 引用类型： object
1. 原始类型存在栈中， 引用类型存在堆中


# 2. typeof VS instanceof
1. typeof 能准确的判断除 null 之外的所有原始类型,
 - 因为typeof是通过接收到的值的二进制来区别对象的，前三位为 0 的就是对象，而null 的二进制全为 0 
2. instanceof 通过判断对象的原型是否等于构造函数的原型来判断类型
3. Object.prototype.toString.call(xxx).slice(8, -1)

# 3. 类型转换
  - 转布尔值  - 0 NaN null undefined '' 为 false 
  - 转数字
  - 转字符串

  - 对象转原始类型: 会调用对象内置 [[ToPrimitive]] 函数
    1. 判断接受的值是原始类型，就返回
    2. 调用valueOf(), 如果能转成原始类型，就返回原始类型的值
    3. 调用toString(), 如果能转成原始类型，就返回原始类型的值
    4. 否则，就报错

- 四则运算
  + 为数字和字符串准备的



# 7. 深浅拷贝
  - 浅拷贝: 拷贝引用地址，受原对象的影响
    1. Object.assign(obj) 
    2. {...obj}
  - 深拷贝: 开辟一个新的空间，对原对象进行层层拷贝
    1. JSON.parse(JSON.stringify(obj))
    注意：可能导致性能问题和循环引用问题，无法拷贝 Symbol,和 undefined 和 function
  
  Reflect.ownKeys(obj) // 查看obj上显示具有的属性 

# 8. 原型， 原型链
   - 对象原型(隐式原型) __proto__
   - 原型(显示原型) prototype

   1. Object 是所有对象的祖先， 所有对象都可以通过__proto__ 找到它
   2. Function 是所有的函数的祖先， 所有的函数都可以通过__proto__找到它
   3. 函数的 prototype 也是一个对象， 它是由 Object 创建的
   4. __proto__指向原型，它将对象和原型连接起来组成了原型链 

# 9.  var let const 
  - 什么是提升
    1. 用 var 声明的变量会存在声明提升，提升到当前作用域的顶部
    2. 函数声明会整体提升，提升到当前作用域的顶部

  - 什么是暂时性死区
    用let 和 const 声明的变量，在编译的时候会被限制使用范围，该变量在声明之前是不可访问的
  - var let const 的区别?
   1. let , const 声明的变量不会被挂载到 window 上 var 会
   2. let 和 const 不能重复声明变量
   3. const 声明的变量不允许重新赋值

# 10.继承
  1. 原型链继承  // 修改子类的原型让它等于父类的实例对象
  2. 经典继承
  3. 组合继承 
  4. 寄生组合继承
  es6
  5. class

# 11 proxy
  代理对象上的各种方法，可以实现数据响应式

# 12. map, filter, reduce

# 13. 异步 
  - 并发: 在一段时间之内，通过任务切换来完成所有的任务
  - 并行: 同时完成多个任务


  - 回调：回调地狱
    1. 函数嵌套过深, 牵一发而动全身
    2. 嵌套过多, 很难处理错误

  - Generator: 可以通过yield关键字，暂停代码的执行，在任务通过next控制代码执行的步骤