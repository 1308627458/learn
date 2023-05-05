# Set 
1. 增 add()
2. 取 无
3. 查 has()
4. 删 delete()

- 特点: 不能具有相同值
- key 和 value 是同一个值
- keys() 返回 set 中所有的 key ,且是一个可迭代的对象，只能用 for...or遍历



# Map
1. 增 set()
2. 取 get()
3. 查 has()
4. 删 delete()

- key 可以是任意类型


这两种数据解构都具有 forEach()  keys() values() entries() 遍历方法

# WeakSet
1. 成员只能是对象
2. 用WeakSet 引用一个对象，这次引用在垃圾回收机制的眼里，不算引用，只要垃圾回收机制一生效，该对象的内存空间还是会被回收

# WeakMap
1. key 只能是对象
2. WeakMap的键名所指向的对象，不计入垃圾回收机制。
