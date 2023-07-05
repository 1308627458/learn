function isObject(obj) {
  return typeof obj === 'object' && obj !== null
}

let toProxy = new WeakMap()  // 原对象和代理对象
let toRaw = new WeakSet() // 代理过的对象： 原对象


function reactive(target) { // 返回一个响应式的对象
  return createReactiveObject(target)
}

function createReactiveObject(target) { // 把对象变成响应式
  if (!isObject(target)) {
    return target
  }

  // target 是否已经被代理过，如果已经被代理过了，就不要再代理了
  let isProxy = toProxy.get(target)
  if(isProxy) {
    return isProxy
  }

  let handler = {
    get(target, key, receiver) {
      console.log('获取');
      // return target[key]
      let result = Reflect.get(target, key, receiver)
      return isObject(result) ? reactive(result) : result // 递归
    },
    set(target, key, value, receiver) {
      let hasKey = target.hasOwnProperty(key)
      let oldValue = target[key]

      if (!hasKey) {
        console.log('新增');
      } else if (oldValue !== value) {
        console.log('修改');
      }
    
      // 设置代理对象中的值
      let res = Reflect.set(target, key, value, receiver)
      updateView()
      return res
    }
  }

  let proxy = new Proxy(target, handler)
  toProxy.set(target, proxy)
  return proxy
}





let data = {
  name: '红红',
  age: {
    num: 18
  },
  job: ['corder', 'driver']
}
let state = reactive(data)
// state.age.num = 19
state.job.push('teacher') // push  length + 1 

console.log(state.job);

let state1 = reactive(state) // 无意义 重复代理






function updateView() {
  console.log('视图更新')
}

