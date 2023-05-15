<template>
  <div class="child2">
    child2--{{ msg }}
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
  setup() {


    return {}
  }
}
</script>

<style  scoped>
.child2 {
  width: 100px;
  height: 100px;
  background: lightpink;
}
</style>