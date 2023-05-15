<template>
  <div class="list">
    <p>list</p>
    <p>{{ $store.state.count }}</p>
    <p>{{ $count }}</p>
    <p>{{ $square }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()

const $count = computed (() => store.state.count)

const $square = computed(() => store.getters.countSquare)  

</script>

<style  scoped>
.list{
   min-height: 300px;
   background-color: #29b4f0;
}
</style>