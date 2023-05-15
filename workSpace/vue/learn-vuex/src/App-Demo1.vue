<template>
  
  <child1 @send="handle"></child1>
  <child2 :msg = "msgFromChild1"></child2>

</template>

<script>
import { ref } from 'vue'
import child1 from './components/demo1/child1.vue'
import child2 from './components/demo1/child2.vue'

export default {
  name: 'App',
  setup() {

    let msgFromChild1 = ref('')
    const handle = (val) => {
      console.log(val);
      msgFromChild1.value = val
    }


    return {
      handle,
      msgFromChild1,
    }
  },

  components : {
    child1,
    child2
  }
  
}
</script>

<style>

</style>
