聊一下一个软件开发出来有哪些步骤？
产品经理 设计 原型（草稿）
开会了解 需求 敲定开发周期
设计稿 -》 前端 + 后端
联调
测试
部署
链表和数组的区别？
数组是有序的链状存储结构，可以通过索引访问访问任意元素
链表是无序，离散型存储结构，只有通过像一个节点才能访问到下一个节点
说说怎么在你的项目中怎么使用three.js的？
var,let,const的区别，解释一下变量提升
聊聊ES6中的promise
异步发展
then
race
all allSettled
catch
finally
any
ref和reactive的区别

聊一聊同步请求和异步请求 await ajax() xxxx

你项目中的token校验是怎么做的？

浏览器的缓存有哪些？有什么区别？

cookies 4k 人为设置 自动携带在请求头中
localStorage 5M 永久 无
sessionStorage 5M 页面面关闭 无
IndexDB 无限 永久 无
vue组件中的通信有哪些？
props
provide/inject
emits
v-model
ref + defineExpose
EventBus
Vuex
聊聊Vuex
各组件之间的状态共享
state mutations actions getters module
被vue所use，所以需要有install方法，从而拿到vue上下文对象，借助provide、inject来实现将store实例注入到各个组件
聊聊原型
函数都有 prototype 原型
对象都有 proto 对象原型
对象原型 === 创建它的构造函数的prototype