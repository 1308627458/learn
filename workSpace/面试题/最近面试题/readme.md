1. 文件压缩怎么实现的
-- 将资源读成Buffer流，再使用node中的zlib模块进行压缩， 设置响应头来告诉浏览器以哪种方式进行解压

2. 怎么用JWT生成token的，说说形成token的一个大概流程
    1. 前端发登录请求
    2. 后端接收到账号后，使用jwt进行加密，生成token, 并返回token给前端
    3. 前端登录成功后，将token做本地保存
    4. 前端在之后的所有请求头中携带 token 给后端
    5. 后端通过jwt校验token 是否合法

3. sessionStorage,localStorage，cookie的区别
    时效性: 关闭页面就消失， 永久 ，手动设置
    大小: 5M   5M  4kb
    与后端交互：无  无  自动携带在http的请求头中

4. 数据类型有哪些
  string number boolean null undefined bigInt symbol
  object array function set map date 正则 
5. 组件之间的通信方式有哪些

6. 用过大屏吗？什么是Canvas，基本用法是什么？
  -- 是h5 提供的一个画布标签，可以通过js在该容器上动态的绘制图形
    
7. js中的事件循环？同步代码和异步代码怎么区分的
    - eventLoop 流程
    - 微任务: await后一行代码， promise.then() , process.nextTick(), MutationObserver

    - 宏任务: 
  1. UI-rendering （解析DOM， 计算布局， 绘制）
  2. 用户的交互事件
  3. js 脚本执行这件事 (同步代码script)
  4. 网络请求， 文件读写
  5. setTimeout, setInterval, setImmediate, I/O


8. vue2和vue3的区别
  1. 速度更快 (重写了虚拟dom 的实现，编译模版的优化，初始化组件的效率更高效，update性能提高了1.3到2倍，ssr速度提高了2~3倍)
  2. 体积更小 (更好的tree-sharking, 只打包用的上的代码)
  3. 更易维护 (composition API，函数式编程)
  4. 更接近原生开发 ()
  5. 更灵活的使用 (API可以独立于vue使用)
  6. 更好的TS支持


9. uniapp的页面生命周期有哪些，怎么使用的



10. 聊聊原型链
  - 是什么
    js中对象都拥有一个原型对象，对象中的_proto_指向该原型对象，
    js中的函数都拥有一个原型，prototype, 
    对象的_proto_ 等于创建该对象的构造函数的prototype

    当试图访问一个对象上的属性时，js引擎会先在对象上搜索，找不到的话，会继续去对象的原型上搜索，因为对象的原型中还有原型，所以js引擎会一层一层的往上一个 
    原型中搜索，直到找到该属性或者达到运行的末尾null

    js中查找对象属性的这种链状 查找关系，称之为原型链

  - 作用
    实现继承


11. ts泛型 
  举例: 当函数接收参数的类型不确定时， 我们便无法声明函数的类型，可以使用泛型声明来充当占位符，等到传入参数是，ts会推导3参数的类型


12. 讲下vue-router，它的原理以及怎么使用的



1. 自己的项目layui+jquery为什么选择这个框架

2. vue2和vue3的区别
3. defineProperty和proxy区别
    1. defineProperty可以用于劫持对象，不会返回一个新的对象，可以设置对象中某个属性是否可写，是否可配置，可枚举，和默认值
    2. defineProperty 通过get, set方法可以劫持对象的读取和设置值的行为
    3. proxy 会返回一个对象，该对象称之为代理对象，代理对象上的十三种代理行为都被 proxy 中的get, set, has... 等函数代理

4. defineProperty的实现响应式的原理
  1. 循环劫持对象中每一个属性
  2. 递归中的子对象，实现层层响应
  3. 对于数组，重写数组原型上的方法

5. 浅拷贝和赋值的区别 
6. css中实现一个朝右的直角三角形箭头


7. css中选择器有哪些，优先级

8. 一个大div（没有设置高度）套一个小div（设置高度，浮动），大div有没有高度，怎么让他有高度
9. 说说nextTick 以及和onMounted的区别
    
onMounted 只执行一次  早于nextTick执行
nextTick 会在dom更新后重新执行






1. 讲下盒模型
2. 讲下flex布局，如何垂直居中
3. ref和reactive的区别
4. proxy为什么比Object.defineProperty效率高？
5. slice和splice的区别，哪个会改变原数组？
6. 伪类和伪元素的区别
7. 父组件想要调用子组件的一个方法怎么调用？比如子组件里有一个函数输出hello，怎么让父组件调用并输出hello？
8. threejs里如何判断两个物体是否垂直
9. 讲下threejs里的着色器
10. threejs里将一个正方体从下往上，做出渐变色效果。
11. promise.all()里有三个接口请求，第一个失败了，后面还会执行吗？
12. mysql里有用户表和商品表，如何查询一个用户是否买了某件商品
13. pinia里 判断两个对象是不是同一个(有点忘了，反正是问如何判断两个xxx是不是同一个)




5. 以下方法判断是否是数组，分别有什么区别和优劣？
  Object.prototype.toString.call()   性能最好 js诞生之初就有
  instanceof
  Array.isArray()


# 6. 介绍一下回流重绘，以及如何优化
  - 浏览器渲染机制
    1. DOM树
    2. CSSOM树
    3. render树
    4. 计算布局   (回流)
    5. gup绘制页面  (重绘)

  - 页面元素的几何属性发生变化会回流，
    1. 窗口大小变化
    2. 添加删除dom
    3. 页面初次加载
  
  - 浏览器优化
    现代浏览器通过维护一个队列来批量存放回流行为，至少在下一次页面刷新之后才会清空队列，

    offsetTop, offset...
    clientTop, client...

    读取 width, height
    getBoundingClientRect()

  - css 
    1. 用 transform 代替 top
    2. 用visibility 替代display：none
    3. 减少css 多层内联
    4. 动画的实现应用在 定位元素上 脱离文档流 不触发回流

  - js
    1. 避免频繁操作样式，可以定义css类名
    2. 避免频繁操作DOM, documentFragment, 用虚拟文档片段，一次性渲染







# 7. 全局作用域中，const, let 声明的变量不在window上，那到底在哪里？ 如何获取？

# 8. 合并数组['A1','A2','B1','B2','C1','C2', 'D1', 'D2'] 和 ['A' , 'B'，'C', 'D']

# 9. 对象数组去重

# 10. 封装一个可以设置最大请求次数的函数，请求成功则不再请求，请求失败则一直请求直到达到最大次数
  