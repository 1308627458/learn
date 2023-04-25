1. vue3 目前兼容 optionsAPI 和 compositionAPI
2. optionsAPI 写法的缺点
3. 使用setup 函数
    - 使用 props接受父组件的传值
    - 有两个参数 props , context
4. ref 的一些补充
    - 解构的语法会导致数据变成非响应式
    - toRef() 将响应式对象中的某一个值提取出来使用，该值依然是响应式的
    - toRefs() 将响应式对象中的某一些值提取出来使用，该值依然是响应式的
    - shallowRef() 和ref 不一样， ref 能让整个对象变响应式，shallowRef() 只能让最外层对象变响应式
    - triggerRef() 配合shallowRef() 使用， 让对象深层也能变响应式
    - customRef() 让我们可以人为的定义一些特殊功能的ref 