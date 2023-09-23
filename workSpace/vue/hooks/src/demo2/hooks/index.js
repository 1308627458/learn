// import { ref }  from 'vue'

// const count = ref(0)

// const add = () => {
//   count.value++
// }

import { ref, computed } from 'vue'

export default function useCount(initVal) {
  const count = ref(initVal)

  


  const add = () => {
    count.value++
  }
  const doubleCount = computed(() => {
    return count.value * 2
  })
  return {
    count,
    add,
    doubleCount
  }
}