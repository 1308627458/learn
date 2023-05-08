<template>
 <button @click="toggle">click</button>
 
 <Transition name="fade" type="transition" 
  :duration="{enter: 800, leave: 1000}">
 <h1 v-if="showTitle">Hello Vue</h1>
 <h1 v-else>讨厌你,请你吃大便</h1>
 </Transition>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    let showTitle = ref(true);
    const toggle = () => {
      showTitle.value = !showTitle.value;
    }
    return {
      showTitle,
      toggle
    }
  }
}
</script>

<style  scoped>
.fade-leave-active,.fade-enter-active {
  transition: opacity 1s ease;
}

.fade-enter-from ,.fade-leave-to{

  opacity: 0;
}
.fade-enter-to,.fade-leave-from{
  opacity: 1;
}
.fade-enter-to, .fade-leave-from{

}
.fade-enter-active{
  animation: bounce 1s ease;
}
.fade-leave-active{
  animation: bounce 1s ease reverse;
}
@keyframes bounce {
  0%{transform: scale(0);}
  50%{transform: scale(1.2);}
  100%{transform: scale(1);}
}
</style>