<template>
  <div class="trees">
    <img :src="url" alt="" class="plant" :class="{ [props.className] : props.isGone}">
    <!-- <img :src="url" alt="" class="plant" :class="{ showUp : true}"> -->
    <img src="../assets/treesPic/soil.png" alt="" class="soil">
  </div>
</template>
<!-- ../assets/treesPic/songshu.png -->

<script setup>

import { useStore } from 'vuex';
import { computed } from 'vue'


const props = defineProps({
  isGone: Boolean,
  className: String,
})

console.log(props.isGone);


const store = useStore()
const url = computed(() => store.state.url)


</script>

<style lang="less" scoped>
.trees {
  position: fixed;
  top: 4.47rem;
  left: -0.64rem;
  z-index: 1;

  .plant {
    position: fixed;
    top: 5.3rem;
    left: 2.95rem;
    width: 4rem;
  }

  .soil {
    width: 11.88rem;
    height: 7.6rem;
  }
}

.gone {
  transform-origin: bottom;
  animation: gone 0.5s linear;
}

.showUp {
  transform-origin: bottom;
  animation: showUp 0.5s linear;
}

@keyframes gone {

  50% {
    transform: scaleY(1.3);
  }

  100% {
    transform: scale(0);
  }
}


@keyframes showUp {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  80% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>