<template>
  <div>
    <h2>{{ person.name }}</h2>
    <button @click="changePerson">change</button>
  </div>
</template>

<script>
import { reactive, watch, ref } from 'vue';
export default {
  setup() {
    const person = reactive({
      name: '红红',
      age: 18
    })
    const name = ref('燕姐')

    const changePerson = () => {
      person.name = '江总'
    }

    // 传入一个getter函数
    // watch(
    //   () => person.name,
    //   (newVal, oldVal) => {
    //     console.log(`newVal: ${newVal}, oldVal: ${oldVal}`);
    //   }
    // )

    // 情况一
    // watch(
    //   () => {
    //     return {...person}
    //   },
    //   (newVal, oldVal) => {
    //     console.log(`newVal: ${JSON.stringify(newVal)}, oldVal: ${JSON.stringify(oldVal)}`);
    //   }
    // )

    // 情况二
    // let info = ref({
    //   name: '红红',
    //   age: 18
    // })
    // watch(
    //   info.value,
    //   (newVal, oldVal) => {
    //     console.log(`newVal: ${newVal}, oldVal: ${oldVal}`);
    //   }
    // )

    // 同时监听对个数据
    watch(
      [() => ({...person}), name],
      ([newPerson, newName], [oldPerson, oldName]) => {
        console.log(newPerson, newName);
        console.log(oldPerson, oldName);
      }
    )
    return {
      person,
      changePerson
    }
  },
  // watch: {
  //   name() {
  //   }
  // }
}
</script>

<style lang="scss" scoped></style>