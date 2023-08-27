# 1. parseInt()

# 2. setTimeout、promise.then、async/await 的区别
    1. 同步 （宏任务）
    2. 微任务
    3. 渲染页面
    4. 宏任务 （下一次循环开启）

# 3. 数组扁平化

# 4. 聊聊HTTP2的多路复用

# 5. 以下方法判断是否是数组，分别有什么区别和优劣？
 Object.prototype.toString.call()
 instanceof
 Array.isArray()

# 6. 介绍一下回流重绘，以及如何优化
   - 浏览器渲染机制
    1. DOM树 
    2. CSSOM树
    3. render树
    4. 计算布局 （回流）
    5. gup绘制页面 （重绘）

  - 页面元素的几何属性发生变化会回流
    1. 窗口大小变化
    2. 添加删除dom
    3. 页面初次加载

  - 浏览器优化
    现代浏览器拖过维护一个队列来批量存放 回流行为，至少在下一次浏览器刷新之后才会清空队列，减少回流的次数

    offsetTop, offset...
    clientTop, client...
    读取 width, height 
    getBoundingClientRect()

  - css 
    1. 用 transform  替代 top
    2. 用 visibility 替代 display: none
    3. 减少 css 多层内联
    4. 动画的实现应用在 定位元素上

  - js 
    1. 避免频繁操作样式,可以定义css类名
    2. 避免频繁操作DOM, documentFragment

# 7. 全局作用域中，const，let声明的变量不在window上，那到底在哪里？如何获取？

# 8. 合并数组

# 9. 对象数组去重

# 10. 封装一个可以设置最大请求次数的函数，请求成功则不再请求，请求失败则一直请求直到达到最大次数


# 11. css选择器的优先级
  important > 内联 >  id > class = 属性 = 伪类 > 标签选择 = 伪元素 > 通配符(*)

# 12. forEach, map, filter 的区别？

# 13. 继承

# 14. link 和 @import 的区别？
  1. link 是 html 提供的标签， @import是css提供的引入方式
  2. link 可以引入不同的资源， @import 只能引入css
  3. link 引入的css 会在页面加载时，同步被加载， @import 会等到页面加载完毕再加载css

# 15. DNS劫持是什么？
  - 因为计算机在通讯之前需要通过DNS解析先确定对方的IP地址，建立连接才能数据传输
  - DNS解析1：向本地域名服务器查询对方的IP地址，该过程被劫持成为本地劫持，通常是计算机被安装了木马病毒

  - 路由器DNS劫持：在路由器中设置DNS，从而让用户访问到错误的ip

  - 中间DNS攻击：在用户的电脑向根域名，顶级域名。。查询ip的过程被拦截

  - 流氓DNS服务器：直接攻击DNS服务器，修改DNS记录


# 16. js跨域方案中的jsonp 和 Cors 各自的优缺点，应用场景？
  1. jsonp 对浏览器支持良好，只发一次请求， 只支持get，没有错误处理机制
  2. cors支持所有的请求类型，通过 onerror 监听错误，对于复杂的请求，会发两次请求

  - 兼容低版本的IE： josnp
  - 对服务端资源写入： cors

# 17. DOM事件模型

# 18. 什么是自定义事件？
  - new Event()  创建简单的自定义事件
  - new CustomEvent()  支持给自定义事件传递参数

# 19. ES5下实现let，const

# 20. 说说 HTTP3.0

# 21. 扑克牌算法

# 22. js如何将图片转为base64
  - 创建canvas画布，将图片绘制在画布上，再借助canvas的 toDataURL 方法装画布资源转成 url地址，而canvas默认转化的就是base64

# 23. 浏览器上传图片前的预览效果怎么实现？
  - 在读取到本地图片资源之后，借助 FileReader() 将图片资源读取成base64格式，再渲染在页面上

# 24. doctype 的作用？

# 25. css实现一个扇形

# 26. css中 transition 和 animate 有什么区别？
  - transition 作用于简单的过渡动画，没有时间轴概念，没有中间状态,多用于和用户交互
  - animate 多用于复杂动画的实现，有时间轴概念（帧可控），有中间状态，多用于活动页

# 27. 虚拟DOM的优势？
 - 直接操作DOM：js作兴DOM API时，js引擎会被挂起，让渲染引擎先工作完，然后再继续工作， 如果js平凡操作DOM，那么引擎之间的切换代价就上升，如果其中还有强制刷新任务队列的代码，那么回流重绘又会引起更大的性能消耗
 - 虚拟DOM：
  1. 操作虚拟DOM不会导致立刻回流重绘
  2. 可以在多次操作虚拟DOM完毕之后再比较真实DOM中需要修改的部分，一次性回流重绘
  3. 虚拟DOM 夸平台开发

# 28. 图片懒加载
1. 页面上的img默认src不给值，这样浏览器就不会发送请求
2. 获取可视区域的高度，判断图片是否存在于可是区域内，来设置src的值

# 29. 用setTimeout模拟setInterval
 1. 递归
 2. 借助setTimeout回调参数中的 callee 函数

# 30. async 和 defer 的区别？
  - async 让js的加载和html的渲染并行进行，当js加载完毕后立即执行，此时html的渲染需要等待
  - defer 让js的加载和html的渲染并行进行， 当js加载完毕后，等待html渲染完成才 执行js

# 31. locaStorage 过期时间？

# 32. let, const
 - const 的本质只是保证 变量的内存地址不得改动
 - Object.freeze() == Object.defineProperty + Object.seal()

# 33. 事件模型
  1. DOM0级 事件模型  只有冒泡 this === window
  2. DOM1级 IE事件模型  只有冒泡 this === window
  3. DOM2级 事件模型  有捕获和冒泡 this === 绑定的元素

# 34. 如何判断js脚本是否加载完毕了？
  - 用js创建一个script标签用来加载js脚本，然后监听该标签上的onload事件

# 35. typeof && instanceof 区别以及缺陷？解决方案？
 - Object.prototype.toString.call(val)   // '[object Object]'

# 36. 惰性函数

# 37. 你知道怎么计算首屏白屏时间吗？

# 38. web Worker ?
 - 前端多线程执行js

# 39. noscript 标签？

# 40. promise

