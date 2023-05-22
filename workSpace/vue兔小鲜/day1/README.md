# ref vs reactive

1. reactive 不能处理简单数据类型，只能处理复杂数据类型
2. ref 参数类型支持更好，可以处理简单数据类型，也可以处理复杂数据类型
3. ref 函数的内部实现依赖于 reactive 函数 

# watch

1. watch 可以监听单个或多个数据
  - watch (age,(newVal,oldVal) => {

  })
  - watch ([age, name], ([newVal1, oldVal1] , [newval2, oldVal2]) => {

  })

2. watch 可以携带两个参数 ( immediate: true  ,  deep: true )
  - immediat 立即执行 watch 监听
  - deep 默认不开启deep , 只能是浅层监听 , 对象里面数据的改变无法监听到

3. 不开启deep, 想在某个层次比较深的属性变化时执行回调
  - 可以把第一个参数写成函数的写法，返回要监听 具体属性
        watch(
    **    () => state.count,
          () => {
        console.log('数据变化了');
      }, {
        immediate: true
      })

# 生命周期

1. 选项式API
  - beforeCreate/created
  - beforeMount
  - mounted
  - beforeUpdate
  - updated
  - beforeUnmount
  - unmounted
2. 组合式API
  - setup
  - onBeforeMount
  - onMounted
  - onBeforeUpdate
  - onUpdated
  - onBeforeUnmount
  - onUnmounted

  # 父子组件间的通信

  1. 父传子
    - defineProps({属性名: 类型})
    - 先引入 import Son from '@/components/Son.vue'  --- 父组件
    - <Son message = "这是父组件传来的数据"/>   

    - const props = defineProps({             --- 子组件
      message: String  
    }) 
  2. 子传父 
    - defineEmits(['事件名'])

    - <Son @message = ""/> 