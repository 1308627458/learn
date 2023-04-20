   
   
   
   - 9*9 星
        for (var j = 1; j <=9; j++) {
        for ( var i = 1; i <=9; i++ ) {
        document.write("*")
        }
        document.write("<br>")
        }

   - 九九乘法表
        for (var j = 1; j <=9; j++) {
        for ( var i = 1; i <=j; i++ ) {
        document.write(i +"*"+j + "=" +i*j + " ")
        }
        document.write("<br>")
        }

    - 最大公约数
        var max = 24
        var min = 12
        for (i = min ; i >= 1; i--) {
        if (max % i == 0 && min % i == 0) {
        console.log (i)
        break
        }
        }

    - 最大公倍数
        var max = 15
        var min = 10
        for (i = max ; i <= max*min; i = max + i) {
        if (i % min == 0) {
        console.log (i)
        break
        }
        }

    - 用函数求10 的阶乘
         function a( n) {
        var total = 1
        while(n>=1) {
            total= total*
            n--
        }
        console.log(total)
        }
        a (12)
        a (10)
    - 递归函数 求斐波那契数列
        function fn(n) {
        if (n==1 || n==2) return 1
        return fn (n-1) + fn (n-2)
    }
    var a=fn(10)
    console.log(a)
    
    - 冒泡排序
<!-- 准备一个乱序数组 -->
        var arr = [9, 6, 5, 8, 7, 4, 1, 2, 3]
        <!-- 输出一下 -->
    console.log (arr)
<!-- 进行长度少 1 轮的比较  -->
    for (var j =0 ; j < arr.length-1; j++) {
<!-- 循环遍历数组 -->
    for (var i = 0; i< arr.length-1-j; i++) {
        <!-- 依次比较当前和下一个的数字 -->
        if (arr[i] > arr[i+1] ) {
<!-- 条件为 true 的时候交换变量 -->
    var temp = arr [i]
    arr[i] = arr[i+1] 
    arr[i+1] = temp
    } 
    }
    }
    console.log(arr)

- 选择排序

        // 准备一个乱序的数组
    var arr = [9, 6, 5, 8, 7, 4, 1, 2, 3]
    // 输出一下
    console.log (arr)
    for (var j = 0; j < arr.length-1; j++) {
    // 假设最小的数组索引为 0 (j)
    var minIndex = j 
    // 循环遍历数组， 从索引 1 位置开始
    for (var i = j +1 ; i < arr.length; i++) {
        // 判断是不是比我假设的索引位置的数字小
        if (arr[i] < arr[minIndex]) {
            // 如果条件为 true, 那么替换 minIndex
            minIndex = i
        }
    }
    // }交换索引 0 (j)位置和 minIndex 位置
    var temp = arr[j]
    arr[j] = arr[minIndex]
    arr[minIndex] = temp
    // 输出最小数字的索引
    // console.log (minIndex)
    }
    console.log(arr)

- 数组常用方法
    1. push()          从后面追加                
    2. pop()           从后面删除
    3. unshift()       从前面添加
    4. shift()         从前面删除
    5. reverse()       反转数组
    6. splice()        截取并添加
    7. sort()          数组排序
    8. join()          数组连接为字符串
    9. concat()        拼接数组
    10. slice()        截取数组
    11. indexOf()      查找数据在数组中的索引
    12. forEach()      遍历数组
    13. map()          映射数组
    14. filter()       过滤数组
    15. every()        判断是否全部满足条件
    16. some()         判断是否有满足条件的项

- 字符串常用方法
    1. charAt(3)       按照索引获取字符     输出索引 3 位置的字符
    2. toLowerCase()   转小写           
    3. toUpperCase()   转大写 
    4. replace('哥哥', '弟弟')       替换字符串            第一个满足的字符被换下   将'哥哥' 换成 '弟弟'
    5. trim()          去除首尾空额
    6. split()         切割字符串
    7. substr(1, 6)    截取字符串     从索引 1 往后截取 6 位
    8. substring(1, 6) 截取字符串     截取索引 1 到 索引 6    前包后不包  不包括索引 6
    9. slice(1, 6)     截取字符串     截取索引 1 到 索引 6    前包后不包  不包括索引 6
      

- 数字的常用方法
    1. random()        0~1 之间的小数
    2. round()         四舍五入取整
    3. ceil()          向上取整
    4. floor()         向下取整
    5. pow()           取幂
    6. sqrt()          二次方根
    7. abs()           取绝对值
    8. max()           取最大值
    9. min()           取最小值
    10. PI             近似π 的值
     - 想要获取0~10 之间的随机整数
     Math.random() * 11, 然后向下取整

     想要获取x~y 之间的随机数 (x < y)
     function randomNum(x, y) {
        var res = Math.floor (Math.random(), (x - y+1) )
        var res2 = res + x
        return res2
     }
     var res = randomNum(10 ,20)        获取10 到 20 之间的随机数

   