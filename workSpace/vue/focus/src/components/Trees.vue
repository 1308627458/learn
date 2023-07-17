<template>
  <div class="trees">
      <img :src="url " alt="" class="plant">
      <img src="../assets/treesPic/soil.png" alt="" class="soil">
  </div>
</template>
<!-- ../assets/treesPic/songshu.png -->

<script setup>

import { useStore } from 'vuex';
import { computed } from 'vue'

const store = useStore()
const url = computed(() => store.state.url)
</script>

<style lang="less" scoped>
 .trees{
    position: fixed;
    top: 4.47rem;
    left: -0.64rem;
    z-index: 1;
    .plant{
      position: fixed;
      top: 5.3rem;
      left: 2.95rem;
      width: 4rem;
    }
    .soil{
      width: 11.88rem;
      height: 7.6rem;
    }
  }
</style>