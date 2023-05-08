<template>
  <div>
   <div class="box" :style="{width:width+'px'}"></div>
   <div class="box2"></div>
   <button @click="change">click</button>
  </div>
</template>

<script>
import { ref } from 'vue';

  export default {
    setup() {
      let width = ref(100)
      const change = () => {
        width.value += 100
      }


      return{
        change,
        width
      }
    }
  }
</script>

<style  scoped>
.box {
  height: 100px;
  background: rgb(241, 128, 128);
  transition: width 1s linear;

}
.box2{
  width: 50px;
  height: 50px;
  background: rgb(176, 230, 176);
  margin: 10px 0;
  position: relative;
  /* left: 100px; */
  animation: move 2s linear infinite;
}

@keyframes move {
  0%{left: 0px}
  50%{left: 200px}
  100%{left: 0px}
}

</style>