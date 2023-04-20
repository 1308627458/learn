# typeof
- 能准确的判断出来null之外的所有的数据类型
- 不能判断引用类型，只能判断原始类型
- 引用类型一律判定为Object   function为特例能准确判断  


# Object.prototype.toString
Object.prototype.toString.call([]).slice(8,-1)


1.Object.prototype.toString.call()

2.Object.prototype.toString.call(null)
    "[Object, null]"
3.ToObject(this)

4. O= {
    [[class]]: Number
}
5."[Object" 和 class ]

# Aarry.isArray(arr) {
    console.log(arr)
}

Array.isArray(arr) 

5. instanceof Array
