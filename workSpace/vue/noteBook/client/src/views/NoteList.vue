<template>
  <div class="note-list">
    <ul v-if="state.noteList.length" >
      <li v-for="(item, index) in state.noteList" :key="item.id" @click="goNoteDetail(item.id)" >
        <div class="img">
          <img :src="item.head_img" alt="">
        </div>
        <p class="time">{{ item.c_time }}</p>
        <p class="title">{{ item.title }}</p>
      </li>
    </ul>
    <p v-else class="empty"> 当前分类下还没有文章</p>
  </div>
</template>

<script setup>
import axios from '@/api';
import { reactive } from 'vue';
import { onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const state = reactive({
  noteList: [],
})
onMounted(async () => {
  const { data } = await axios.post('/note/findNoteListByType', {
    note_type: route.query.title,
  })

  state.noteList = data
  console.log(data);

}) 

const goNoteDetail = (id) => {
  router.push({path:'/noteDetail',query: {id: id}})
}
</script>

<style lang="less" scoped>
.note-list {
  width: 100%;
  padding: 1rem 0.667rem 0;
  box-sizing: border-box;

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      width: 4rem;
      margin-bottom: 0.72rem;

      .img {
        width: 100%;
        height: 4rem;

        img {
          width: 100%;
          height: 100%;
          border-radius: 0.27rem;
        }

      }

      .time {
        font-size: 0.37rem;
        color: rgba(16, 16, 16, 1);
        margin: 10px 0 5px 0;
      }

      .title {
        font-size: 0.37rem;
        color: rgba(16, 16, 16, 1);
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>