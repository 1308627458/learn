<template>
  <div>
    <h2>{{ info }}</h2>
    <button @click="changeInfo">change</button>
    <button @click="changLike">changelike</button>
  </div>
</template>

<script>
import {ref, shallowRef, triggerRef} from 'vue'
export default {
  setup () {
    const info = shallowRef({
      name: '小红' ,
      like: {
        n: 1
      }
     
     
      })
    
    const changeInfo = () => {

      // info.value.name = '江总'
      // info.value = {name:'江总'
      info.value.like.n = 2

      triggerRef(info)
    }

    const changLike = () => {
      info.value.like.n = 3
    }

    return {
      info,
      changeInfo,
      changLike
    }
  }
}
</script>

<style  scoped>

</style>