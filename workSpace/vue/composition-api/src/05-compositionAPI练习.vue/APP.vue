<template>
  <div>
    <h2>当前计数:{{ counter }}</h2>
    <h2>计数乘2:{{ doubleCounter }}</h2>
    <button @click="add">+1</button>
    <button @click="sub">-1</button>

    <div class="mouse">
      <p>mouseX: {{ mouseX }}</p>
      <p>mouseY: {{ mouseY }}</p>
    </div>
  </div>
</template>

<script>
import { useCounter,useMousePosition, useTitle} from './hooks'

export default {
  setup() {

    const { counter, doubleCounter, add, sub } = useCounter() // hooks 函数
    const { mouseX, mouseY } = useMousePosition()
    useTitle('首页')
    setTimeout(() => {
      useTitle('关于')
    }, 2000);

    return {
      counter,
      doubleCounter,
      add,
      sub,
      mouseX,
      mouseY,
    
    }
  }
}
</script>

<style  scoped></style>