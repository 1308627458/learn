

# 进程和线程
1. 都是cpu工作时间片的描述
2. 进程描述的是cpu在运行指令以及加载和保存上下文所需要的时间
3. 线程描述进程中执行一段指令所需要的时间

# 线程
浏览器新开一个tab页，相当于是新建了一个进程，该进程中有，渲染线程（GPU绘制），js 引擎线程， http 请求线程，等等 


- 渲染线程 和 js 引擎线程 互斥  

# event loop
1. 异步代码就会去到任务队列
2. 任务队列分为 
          宏任务队列(macrotask)，(task) 
          微任务队列(microtask)  (jobs)

宏任务：
1. UI-rendering  （解析DOM， 计算布局， 绘制）
2. 用户的交互事件
3. js 脚本执行这件事 (同步代码script)
4. 网络请求， 文件读写 
5. setTimeout, setInterval, setImmdiate, I/O

微任务：
1. promise.then()
2. MutationObserver
3. process.nextTick()

- Event loop:
1. 执行同步代码  (这属于宏任务)
2. 当调用栈为空后，查询是否有异步代码需要执行
3. 执行所有的微任务
4. 有必要的话会渲染页面
5. 开始下一轮的Event loop, 也就是执行宏任务