// 自定义一个跟ref效果一样的api
import { customRef } from 'vue'

export default function (value, delay = 300) {
  let timer = null
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        clearTimeout(timer)
        timer = setTimeout(() => {
          value = newVal
          trigger()
        }, delay)
      }
    }
  })
}