<template>
  <Header :seller ="sellerData"></Header>

  <div class="tab">
    <div class="tab-wrapper">
      <router-link to="/goods" >商品</router-link>
    </div>
    <div class="tab-wrapper">
      <router-link to="/comment">评论</router-link>
    </div>
    <div class="tab-wrapper">
      <router-link to="/seller">商家</router-link>
    </div>
  </div>

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
    // console.log(seller);
    sellerData.value = seller
  })
})


</script>

<style lang="less">
@import '@/common/variable.less';
.tab{
  width: 100%;
  display: flex;
  height: 36px;
  line-height: 36px;
  &-wrapper{
    flex: 1;
    text-align: center;
   a{
      color: #666;
      width: 100%;
      height: 100%;
      display: block;
      &.active{
        color: @color-red;
        border-bottom: 2px solid @color-red;
      }
    }
  }
}

</style>
