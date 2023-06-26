import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import axios  from 'axios'
export const useCounterStore = defineStore('counter', () => {
  // 定义数据（state）
  const count = ref(0)

  // 定义修改数据的方法（action 同步+异步)

  const increment = () => {
    count.value++
  }

  // getter定义
  const doubleCount =  computed(() => count.value * 2)

  // 定义异步action
  const list = ref([])
  const getList = () => {
    axios.get()
  }
  // 以对象的形式return供组件使用
  return {
    count,
    increment,
    doubleCount
  }
})