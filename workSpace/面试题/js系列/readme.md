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