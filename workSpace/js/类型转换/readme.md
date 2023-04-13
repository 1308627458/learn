# 对象转原始类型

- 转字符串 -- 会执行自带的 ToPrimitive(obj, String) 的方法
    1. 判断 obj 是否为基本类型, 是则返回
    2. 调用对象自带的 toString方法， 如果能得到一个原始类型则返回
    3. 调用对象自带的 valueOf 方法， 如果能得到一个原始类型则返回
    4. 报错


- 转数字 -- 会执行自带的 ToPrimitive(obj, Number) 的方法
    1. 判断 obj 是否为基本类型, 是则返回
    2. 调用对象自带的 valueOf 方法， 如果能得到一个原始类型则返回
    3. 调用对象自带的 toString方法， 如果能得到一个原始类型则返回
    4. 报错


# 一元操作符 + 

- 当 + 运算作为一元操作符使用时， 会调用 ToNumber() 处理该值 (相当于Number)
+[]  结果为 0 
1. [] 为对象，要调用 ToPrimitive() 方法 , 调用 toString() 方法转为一个空字符串''
2. 此时结果就为+'' , 再调用ToNumber()方法得到结果为 0 
 
# 二元操作符 + 
- v1 + v2
1. lprim = ToPrimitive(v1)
2. rprim = ToPrimitive(v2)
3. 如果 lprim 或 rprim 是字符串，则返回ToString(lprim) 和 ToString(rprim)的拼接结果
4. 返回 ToNumber(lprim) + ToNumber(rprim)

# == (隐式转换) 

If Type(x) is the same as Type(y), then

If Type(x) is Undefined, return true.

If Type(x) is Null, return true.

If Type(x) is Number, then

If x is NaN, return false.

If y is NaN, return false.

If x is the same Number value as y, return true.

If x is +0 and y is −0, return true.

If x is −0 and y is +0, return true.

Return false.

If Type(x) is String, then return true if x and y are exactly the same sequence of characters (same length and same characters in corresponding positions). Otherwise, return false.

If Type(x) is Boolean, return true if x and y are both true or both false. Otherwise, return false.

Return true if x and y refer to the same object. Otherwise, return false.

If x is null and y is undefined, return true.

If x is undefined and y is null, return true.

If Type(x) is Number and Type(y) is String,
return the result of the comparison x == ToNumber(y).

If Type(x) is String and Type(y) is Number,
return the result of the comparison ToNumber(x) == y.

If Type(x) is Boolean, return the result of the comparison ToNumber(x) == y.

If Type(y) is Boolean, return the result of the comparison x == ToNumber(y).

If Type(x) is either String or Number and Type(y) is Object,
return the result of the comparison x == ToPrimitive(y).

If Type(x) is Object and Type(y) is either String or Number,
return the result of the comparison ToPrimitive(x) == y.

Return false.

# === (数值和类型全相等)
