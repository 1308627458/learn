# vue的世界
    可以从小程序迁移过来
    - 组件思想
    wxml + wxss + js 可复用的组件
    - 数据驱动思想  不需要找DOM 节点， setData() 自动更新？

    - wx:for 指令  v-for
    - 路由
        /pages + app.json tabbar 目录下就是页面路由
        wx.navigator ({
            url:''
        })
        vue ? vue-router
    

- 现代web App  单页应用 (SPA Single Page Application) 10年 6年
    vue  https://unpkg.com/vue@next"
    - 根节点 启动我们的Web App

- Vue 
    1. 现代当红的前端框架， 好学， 简单
    2. 组件化，数据驱动 思想
    3. Vue 是命名空间
        Vue.
    4. Vue.version vue 最新版 vue3
    5. 对照小程序， 迁移学习
        - template wxml
            模版

- Vue 底层源码
    1.data {} 如何被监听， 重新编译模版？ Proxy es6
    2.Vue 世界为什么要杜绝DOM  编程 #app ？
    DOM 编程慢...

- v-on:click  @click  代替
    this.content = ''this  直接引用data 里的数据
    this.$data.content=''
    vue 比react 更友好， 方便入门， 学习成本低
    API 设计人性化