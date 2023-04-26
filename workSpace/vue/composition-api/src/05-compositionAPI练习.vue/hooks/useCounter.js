import { ref, computed } from 'vue'

export default function () {

  const counter = ref(0)
  const doubleCounter = computed(() => counter.value * 2)

  const add = () => counter.value++

  const sub = () => counter.value--

  return {
    counter,
    doubleCounter,
    add,
    sub
  }

}