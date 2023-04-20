# 浅拷贝 -- 复制内存地址指针的操作
    拷贝得到的对象会受到对象的影响

    1.引用类型的赋值也可以称之为浅拷贝
    2. Object.create()
    3.slice
    4.concat
    

# 深拷贝 -- 创建一个新的对象来承接原对象中的原始值
    JSON.parse(JSON.stringify(xxx))
    1. 不能拷贝undefined
    2. 不能拷贝函数
    3. 无法处理循环引用的情况
    4. 不能拷贝 Symbol 类型