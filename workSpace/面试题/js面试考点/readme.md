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

# 4. this

    1. 默认绑定: 函数在哪个词法环境下生效，函数的this就指向哪里
    2. 隐式绑定: 当函数被上下文对象调用时
    3. 隐式丢失: 当函数被多个对象所拥有且调用时
    4. 显示绑定: call, apply, bind
    
    - 箭头函数: 没有this这个概念，写在箭头函数内的this也是它外层非箭头函数的,且箭头函数不能作为构造函数

# 5. == VS ===

    1. == 判断过程：
    
    先判断两者类型是否相同，相同就比较值
    类型不相同，就需要进行隐式类型转换
    在转换前先判断，是否为undefined 和 null，是的话就返回true
    原始类型往number上转
    如果有一方是对象，那么先将对象转换为原始值，再判断
    2. === 直接判断类型和值是否都相等

# 6. 闭包

    - 什么是闭包： 当函数A内部定义的函数B在A外面被调用，A的执行上下文被销毁时会保留下所引用到的变量集合，这个集合，我们称之为闭包 

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
  
  1. 用 var 声明的变量会存在声明提升，1
1. 寄生组合继承
   es6
2. class

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

- Promise
  
  1. Promise的特点，优缺点
     
     - Promise维护了三个状态，状态一经变更就无法修改
  
  2. Promise链
  
  3. Promise构造函数和then函数执行有什么区别

- async / await
  优点：不需要.then调用链，代码解构清晰，并且也能优雅的解决回调地狱的问题

# 14. Event Loop

- JS 单线程有什么好处 
  
  1. 不会造成线程冲突
  2. 节约内存
  3. 没有死锁的问题

- 什么是执行栈？
   js引擎在执行js代码时维护的一个栈结构空间。用于存储函数的调用(执行上下文)

- 浏览器中的事件循环机制  
  
  1. 执行同步代码(宏任务)
  2. 当执行栈为空，查询是否有异步代码要执行
  3. 执行所有的微任务
  4. 需要的话会渲染页面
  5. 执行宏任务，也是下一次的事件循环的开始

- 宏任务：
  
  1. UI-rendering （解析DOM， 计算布局， 绘制）
  2. 用户的交互事件
  3. js 脚本执行这件事 (同步代码script)
  4. 网络请求， 文件读写
  5. setTimeout, setInterval, setImmdiate, I/O

- 微任务：
  
  1. promise.then()
  2. MutationObserver
  3. process.nextTick()

# 15. 浏览器中的考点
