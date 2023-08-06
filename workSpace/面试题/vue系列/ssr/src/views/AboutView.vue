<template>
  <div class="about">
    <h1>This is an about page</h1>
    <input type="text" v-model="count">
    <p @click="add">Count is: {{ count }}</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      add() {
        this.count++
      }
    }
  }
</script>