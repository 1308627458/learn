<template>
  <Header :seller ="sellerData"></Header>

  <router-view/>
</template>

<script setup>
import { ref , onMounted} from 'vue';
import Header from './components/header/header.vue';
import { getSeller } from '@/api'

let sellerData = ref({})

onMounted(() => {
  // console.log(onMounted);
  getSeller().then(seller => {
    console.log(seller);
    sellerData.value = seller
  })
})


</script>
<style lang="less">


</style>
