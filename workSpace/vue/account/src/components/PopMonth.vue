<template>
<van-cell title="展示弹出层" is-link @click="showPopup" />
<van-popup round position="bottom" v-model:show="show" :style="{ height:'46%' }">
  <van-date-picker
  v-model="currentDate"
  title="选择年月"
  :min-date="minDate"
  :max-date="maxDate"
  :formatter="formatter"
  :columns-type="['year','month']"
  @confirm="chooseMonth"
/>
</van-popup>
</template>

<script setup>
import { ref } from 'vue';

  const show = ref(false)
  const date = new Date()
  const currentDate = ref([date.getFullYear(), date.getMonth() + 1])
  const formatter = (type, option) => {
      if (type === 'year') {
        option.text += '年';
      }
      if (type === 'month') {
        option.text += '月';
      }
      return option;
    };

const emits = defineEmits(['select'])
const chooseMonth = ({selectedValues}) => {
  // console.log(selectedValues);
  show.value = false
  emits('select', selectedValues)
}


// 暴露属性让父组件获取到
defineExpose({
  show
})
</script>

<style lang="less" scoped>

</style>