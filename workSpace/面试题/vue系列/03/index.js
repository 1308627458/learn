class Vue {
  constructor(options) {
    this.$options = options
    this.$data = options.data

    // 对data做响应式处理
    observe(this.$data)

    // 把data代理到vm上
    proxy(this)

    // 执行编译
    new Compile(options.el, this)
  }

}

// 数据劫持
function observe(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return
  }
  new Observer(obj)
}
class Observer{
  constructor(value) {
    this.value = value
    this.walk(value)
  }
  walk(obj) {
    Object.keys(obj).forEach(key => {
      defineReactive(obj, key, obj[key])
    })
  }
}
function defineReactive(obj, key, value) {
  observe(value)
  const dep = new Dep()  //对每一个属性创建一个dep实例
  Object.defineProperty(obj, key, {
    get() {
      Dep.target && dep.addDep(Dep.target) // Dep.target 是一个watcher的实例
    },
    set(newVal) {
      if (newVal !== value) {
        value = newVal
        dep.notify() // 通知dep执行watcher的update方法
      }
    }
  })
}
// Dep 为每个属性创建一个依赖收集器

class Dep {
  constructor() {
    this.deps = [] // 存放很多个watcher实例
  }
  addDep(dep) {
    this.deps.push(dep)
  }
  notify() {
    this.deps.forEach(dep => dep.update())
  }
}



// watcher 观察者
class Watcher {
  constructor(vm,key,updateFn) {
    this.vm = vm
    this.key = key
    this.updateFn = updateFn

    Dep.target = this
    // 读取值， 触发get, 添加依赖
    vm[this.key]
    Dep.target = null
  }
//  未来被Dep调用
  update() {
    // 当页面上的属性发生变化，会更新data数据源
    this.updateFn.call(this.vm, this.vm[this.key]) 
    

  }
}

// 编译器
class Compile {
  constructor() {
    this.$vm = vm
    this.$el = document.querySelector(el)
    if($el) {
      this.Compile(this.$el)
    }
  }
  compile() { //编译模版， 处理文本节点和元素节点
    const childNodes = el.childNodes
    Array.from(childNodes).forEach(node => { // 遍历所有子节点
      if(this.isElement(node)){ // 是否是元素节点
        // 编译元素节点
        if(node.getAttribute('v-model')){
          node.addEventListener('change',e => {
            this.$vm[node.getAttribute('v-model')] = e.target.value
          })
        }
      }
    })
  }
}

let vm = new Vue({
  el: '#app',
  data() {
    return {
      count: 0,
      age: 18,
      sex: 'boy'
    }
  },
  methods: {
    add() {
      this.count++
    }
  }
})