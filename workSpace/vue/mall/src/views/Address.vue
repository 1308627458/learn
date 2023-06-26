<template>
  <Header title="添加地址" />
  <div> 
    <van-address-edit
  :area-list="areaList"
  show-delete
  show-set-default
  show-search-result
  :search-result="searchResult"
  :area-columns-placeholder="['请选择', '请选择', '请选择']"
  @save="onSave"
  @delete="onDelete"
  @change-detail="onChangeDetail"
/>

  </div>
</template>

<script setup>
import Header from '../components/Header.vue';
</script>

<style lang="less" scoped></style>