<template>
  <div class="header">
    <p>header</p>
    <button @click="add">add</button>
  </div>
</template>

<script setup>
import { useStore} from 'vuex'
const store = useStore()
const add = () => {
  //修改仓库中state中的count
  // store.state.count++
  // store.commit('add' , 10);
  store.dispatch('addAction', 5)
}
</script>

<style  scoped>
.header{
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(136, 231, 136);
  height: 60px;
  
}

</style>