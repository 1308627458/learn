# day1
- 输出方式
1. alert()  以浏览器弹出层的形式出现
2. console.log()  将内容输出在浏览器的控制台上
3. document.write()  将内容直接输出在页面上

- js 中的数据
    - 基本数据类型
        1. 数值类型    number
            var n = 100 
            var n = 0x100  0x 开头是16进制
            var n = 0o100  0o 开头是8进制
            var n = 0b100  0b 开头是2进制
        2. 字符串类型  string
            var a = "hello"  var a = 'hello'      
        3. 布尔类型    boolean
            true  false
        4. 空类型  undefined  和  null   null 类型返回object
            var a         没有值
            var a = null  有值 值为空
    - 引用数据类型
        1.
    - typeof 关键字 进行数据类型检测


    - 数据类型转换
        - 转数值
            1. Number() 
            2. parseInt() 
            将转换内容一位一位查看 只有第一位不是数字时会出现 NaN(no a number) ，否则把前面的数字内容保留
            3. parseFloat()
        - 转字符串
            1. String()
            2. toString()
            3. Boolean() 
                false : 0 NaN '' undefined null 五种情况为false 其他全为 true
        - 比较运算符
           1. == 等于 只比较值是不是相等，不考虑数据类型
           2. === 全等于 必须要值 和 数据类型都相等 才为 true
    - 函数
     定义：
        function a( 形参 ) {    形参 是定义在 函数内部 使用的变量
            ...                 实参 是函数调用时给 形参赋值 的内容
                       
             return  返回值     return 给函数添加一个结果 作为函数的 返回值                      
        } 
    调用：
        a( 实参 )
    - 递归函数
     一个函数调用了自身， 并设置了结束条件， 这个函数才是一个正确的递归函数

    - 作用域
     - 范围  全局作用域(页面)  和  私有作用域(只有函数能生成)
     - 使用 
        1. 定义  声明在什么位置就是哪一个作用域的变量
        2. 访问  自己有的 用自己的， 自己没有的 用父级的， 以此类推，到全局都没有就报错
        3. 赋值  自己给自己的赋值， 自己没有就给父级赋值， 以此类推，到全局都没有，定义为全局再赋值
    
    - 对象 object
     - 创建  var obj = {tt : '嘿嘿'， xx : '哈哈'} 
            tt(键/key)   '嘿嘿'(值/value)   tt : '嘿嘿' (一对键值对)
     - 操作
        1. 增  对象名.键 =  值 or 对象名 ['键'] = 值
        2. 删  delete 对象名.键 or delete 对象名['键']
        3. 改  对象名.键 = 值 or 对象名['键'] = 值   不除名特点， 有就改，没有就增
        4. 查  对象名.键 or 对象名['键'z] 

