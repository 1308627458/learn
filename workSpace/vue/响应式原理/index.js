// 数组的响应式
let oldArrayPrototype = Array.prototype
let proto = Object.create(oldArrayPrototype) // 继承

Array.from(['push', 'pop', 'shift', 'unshift']).forEach(method => {
  // 重写这些方法
  proto[method] = function () { // this =》调用这个方法的数组
    oldArrayPrototype[method].call(this, ...arguments)
    updateView()
  }
})



function observer(target) { // 实时检测data的变化
  // 判断target是否是对象
  if (typeof target !== 'object' || target == null) {
    return target
  }

  // 判断target是否是数组
  if (Array.isArray(target)) {
    // 重写数组的原型
    // target.__proto__ = proto  // Array.prototype
    Object.setPrototypeOf(target, proto)
  }

  for (let key in target) { 
    defineReactive(target, key, target[key])  // 每个属性都能劫持到
  }
}

function defineReactive(target, key, value) { // ['coder', 'driver'] 0 'coder'
  // 判断value是否是对象
  if (typeof value === 'object' && value !== null) {
    observer(value) // 递归
  }

  Object.defineProperty(target, key, { // 数据劫持
    get() {
      return value
    },
    set(newVal) {
      if (newVal !== value) {
        value = newVal
        updateView()
      }
    }
  })
}


function updateView() {
  // diff
  console.log('视图更新');
}


let data = {
  name: '红红',
  age: {
    num: 18,
    n: {
      a: 1
    }
  },
  job: ['coder', 'driver']
}
observer(data) // data被观察中


// data.age.num = 19
// console.log(data.age.num);
// data.name = '江总'
// data.sex = 'girl'
data.job[1] = 'teacher'
// data.job.length = 3


// 1. 对象劫持
// 2. 多层对象的递归
// 3. 数组方法重写


// 缺点：
// 1. 对象上不存在属性无法被劫持
// 2. 改变数组的length属性无效
// 3. 默认递归会有性能问题