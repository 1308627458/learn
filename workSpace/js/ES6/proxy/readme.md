# Object.defineProperty(obj, prop, desc);
可以在一个对象上定义一个新的属性， 或者修改对象现有的属性

- obj: 被劫持的对象
- prop: 要定义或修改的属性
- desc: 描述被定义或者修改的属性

# 存取描述符
  - get (getter)
  - set (setter)
  由 getter 和 setter 定义的属性称为 '存取器属性'

  var obj = {a: 1}

  obj.a  ---> getter()

  obj.a = 2 ---> setter(2)

  # proxy 
  defineProperty 只能重定义属性的 读取 和 设置
  proxy 可以重定义更多行为