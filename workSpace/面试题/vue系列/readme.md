# 1. 说说你对vue的理解
   - 石器时代    (web报纸)
   - 文明时代    (java + html)
   - 工业革命    (很多框架出现)
   - 百花齐放    (sass, less, stylus, bootstrap, Angular, V8)

   - Vue是什么
     是一个单页应用的渐进式js框架, 目的是简化web开发，关注的核心是MVC模式中的视图层，采用的是MVVM的数据驱动开发方式

   - MVVM  (Model-View-ViewModel)
    1. Model: 模型层，处理业务逻辑和服务端交互
    2. View: 视图层，复杂把数据转为UI展示(html页面)
    3. ViewModel: 视图模型层，主要是用来连接Model层和View层

    - 组件化
      1. 将各种逻辑抽象为一个统一的概念， (.vue)
      2. 降低整个系统的耦合度，提高复用性，可以快速完成模块的替换
      3. 方便调试，因为组件都是单一职责，可以排除法直接移除组件来调试
      4. 提高了代码的可维护性

    - 指令 v-xxx

# 2. 说说你对单页应用(SPA)的理解  single page application
    - 是什么
      只有一个html文件，通过前端路由的方式将多个代码片段模拟成页面。无刷新体验

    - 单页应用的缺点
      1. 首次渲染速度慢
      2. 不利于搜索引擎的抓取    (ssr, 资源静态化)


# 3. 说说你对双向绑定的理解
  - 是什么
    v-model实现了双向绑定，当Model层的数据变化时，View会更新，当View层的数据变化时，Model层状态会更新

    - 原理(ViewModel)
      1. 数据变化更新视图
      2. 视图变化更新数据

      监听器 (Observer)  解析器 (Compiler)


# 4. 说说你对vue生命周期的理解
  - Vue在组件从开始加载到渲染完成的这个时间段内提供的钩子函数
  v2:
    beforeCreate, created
    beforeMount, mounted
    beforeUpdate, updated,
    beforeDestory, destoryed,
    actived, deactivated (缓存)
    errorCaptured (子组件)

  v3: setup
      onBeforeMount, onMounted
      onBeforeUpdate, onUpdated
      onBeforeUnmount, onUnmounted
      onActivated, onDeactivated
      onErrorCaptured


# 5. 组件通讯的方式
  1. props    (父子)
  2. emit     (子父)
  3. v-model  (子父)
  4. refs     (子父)
  5. provide/inject   (父子)
  6. vuex/pinia
  7. eventBus