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


5. computed
    - 接收一个参数为函数， 计算结果readOnly
    - 接受一个对象作为参数， 对象中会有get, set函数，get 用于返回值, set 用于修改值


6. watchEffect()
    - 页面刷新默认执行一次, 依赖的数据变化时，会再实时执行
    - watchEffect 的执行结果是一个函数，调用这个函数就能终止 watchEffect 的监听行为
    - 清除副作用，通常用于终止上一个接口请求
    - 第二个参数有 pre post sync 三个值，pre 是默认值，用来设定副作用函数在页面加载前执行，而 post 用来设定副作用函数在页面渲染完成后执行

7. watch
    - 直接监听一个响应式对象时， newVal 和 oldVal 获取到的值都是响应式对象本身
    - 当监听 reactive 对象时，需要返回一个新的对象用于监听
    - 可以监听 ref 原始值，也可以直接监听  ref 对象
    - 可以用数组的形式监听多个数据源
    - 第三个参数{immediate: true}, 设置watch默认触发一次