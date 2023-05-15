<template>
  <div class="user-info">
    <ul>
      <li>姓名: <span>{{ userStore.userInfo.name}}</span></li>
      <li>性别:<span>{{ sex }}</span></li>
      <li>年龄:<span>{{ userStore.doubleAge }}</span></li>
    </ul>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/user'
import { computed } from 'vue';
import {storeToRefs} from 'pinia'
// console.log(useUserStore());
const userStore = useUserStore()
const sex = computed(() => userStore.userInfo.sex)
const { userInfo } = storeToRefs(userStore);


</script>

<style  scoped>
.user-info{
  min-height: 300px;
  background-color: rgb(230, 156, 114);
}
li{
  font-style: 24px;
  padding: 6px 10px;
}
</style>