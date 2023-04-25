<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changName">改名</button>

    <input type="text" v-model="fullName">
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup () {
    const firstName = ref('张')
    const lastName = ref('三三')
    // const fullName = computed( () => {
    // return  firstName.value + lastName.value
    // })
    
      let fullName = computed( {
        get: () => firstName.value + lastName.value,
        set: (newVal) => {
          console.log(newVal);
          // const names = newVal.split('-')
          // firstName.value = names[0]
          // lastName.value = names[1]

          lastName.value = newVal
        }
      })
      
    const changName = () => {
      // lastName.value = '五五'
      fullName.value = '李-四四'
    }
    return {
      fullName,
      changName
    }
  }
}
</script>

<style scoped>

</style>