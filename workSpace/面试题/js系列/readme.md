# 1.js 数组的常用方法有哪些？
  - 增删改
  push, pop, unshift, shift, splice, concat
  - 遍历
  forEach, reduce, filter, every, some, map, 
  - 排序
    sort, reverse
  - 查找
  indexOf, lastIndexOf, includes, findIndex, find

# 2. js字符串的常用方法有哪些
  - 增: concat 
  - 删: slice, substr, substring, 
  - 改: toUpperCase, toLowerCase, repeat(2), trim
  - 查: indexOf, includes, startsWith, endsWith, charAt(n)

  - 转换方法: split('')
  - 匹配: replace, search(正则), match(正则)

# 3. 谈谈js 中的类型转化机制
  - 概述：
  基本类型：string number boolean undefined null symbol bigInt 
  引用类型： object 

  - 显示转换: 人为的转换

  - 隐式转换: 
  1. 原始类型 => 原始类型
  2. 引用类型 => 原始类型
      - 四则运算： + - * / % == !=
      - 条件语句：if while > < 
  - ToPrimitive(obj) 执行过程
  1. 判断obj是否原始值，是则返回
  2. 调用valueOf(obj)

# 4. == 和 === 的区别?
    == 是只判断值是否相等，会发生隐式类型转化
    === 不发生隐式类型转化，判断值相等

# 5. 说说深拷贝和浅拷贝，如何实现一个深拷贝？
  - 是什么
    因为在js中，基本数据类型式保存在栈中，而引用类型式保存在堆当中(指针在栈中)，所以深拷贝和浅拷贝通常只针引用类型来讨论

    浅拷贝： 拷贝原对象，新对象会受原对象修改的影响
    深拷贝： 拷贝原对象，新的对象不会受原对象修改的影响

  - 常见的深浅拷贝方法：
    浅拷贝：Object.assign(), {...obj},slice(0), concat(arr), [...arr]
    深拷贝：JSON.parse(JSON.stringify(obj)) --- (不能拷贝 undefined, symbol, 函数，正则，NaN, Infinity, Date, 不能处理循环引用)

  - 


# 6. 说说你对闭包的理解
  - 是什么
    当调用一个外部函数返回的一个内部函数时，即使外部函数执行完毕，但内部函数引用外部函数的变量，那么这些变量依然会被保存在内存中，我们吧这个变量的集合称之为闭包。

  - 使用场景
    1. 创建私有变量
    2. 延长变量的生命周期

  - 缺点
    会导致内存泄露

# 7. 说说你对作用域的理解
  - 是什么
    变量(上下文) 和函数生效的区域，作用域决定了该区域中的变量和资源的可见性，

  - 有哪几种作用域
    1. 全局作用域 
    2. 函数作用域
    3. 块级作用域: let, const 

  - 作用域链
    在js中，当需要查找一个变量时，js引擎会在当前作用域中查找该变量，如果找不到，就会去上层作用域中查找，直到找到变量或者来到全局作用域下，这种查找关系就称之为作用域链
  
# 8. 说说你对原型，原型链的理解
  - 是什么 
    在js中， 对象具有__proto__属性， 称之为对象原型(隐式原型)，它等于创建该对象的构造函数的显示原型(prototype)

   函数具有prototype属性，我们称之为显示原型(原型)，它是一个对象，在它内部添加的属性会被函数的实例对象所继承

  对象在查找属性时，会先在自己显示属性上查找，找不到再去对象原型上查找，层层往上，直到找到该属性或者达到原型链的末端

  - 原型链：
    对象的原型也是对象，还有原型。对象在原型上层层查找属性的这种链状关系，就称之为原型链，原型链末端是 Object.prototype

# 9. 说说js中的继承
  - 是什么
  是一种可以让 类A访问到B类中所有的属性方法的手段

  - 实现方式
    1. class extends
    2. 原型链继承 // 修改子类的原型让它等于父类的实例对象
    3. 构造函数继承 
    4. 组合继承
    5. 寄生组合继承


# 10. 