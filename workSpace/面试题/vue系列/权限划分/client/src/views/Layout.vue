<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row>
          <el-col :span="12">旅梦后台管理</el-col>
          <el-col :span="12" class="textR">
            <el-dropdown>
              <span class="el-dropdown-link">
                欢迎您admin
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>退出登录</el-dropdown-item>
                  <el-dropdown-item>Action 2</el-dropdown-item>
                  <el-dropdown-item>Action 3</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            router
          >
          <div v-for="item in menuList" :key="item.index">
            <!-- <el-menu-item :index="item.index"  v-if=" userLevel >= item.level"> -->
              <el-menu-item :index="item.index" >
              
              <el-icon><setting /></el-icon>
              <span>{{item.title}}</span>
            </el-menu-item>
          </div>
           

            <!-- <el-menu-item index="/class">
              <el-icon><setting /></el-icon>
              <span>班级</span>
            </el-menu-item>
            

            <el-menu-item index="/statis">
              <el-icon><setting /></el-icon>
              <span>统计</span>
            </el-menu-item> -->

          </el-menu>
        </el-aside>


        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
// const menu = [
//   {
//     index: '/home',
//     title: '首页',
//     icon: 'setting',
//     level: 1
//   },
//   {
//     index: '/class',
//     title: '班级',
//     icon: 'setting',
//     level: 1
//   },
//   {
//     index: '/statis',
//     title: '统计',
//     icon: 'setting',
//     level: 2
//   }
// ]


import { menu } from '../api/user.js'
import { ref } from 'vue'
const menuList = ref([])
menu().then(res => {
 menuList.value = res.data
})
const userLevel = localStorage.getItem('level')
</script>

<style lang="css" scoped>
.common-layout {
  height: 100%;
}
.el-container{
  height: 100%;
}
.el-header{
  background-color: #B3C0D1;
}
.el-aside{
  background-color: #D3DCE6;
}
.el-menu, .el-menu-item{
  background-color: #D3DCE6;
}
.el-row{
  height: 100%;
  align-items: center;
}
.textR{
  text-align: right;
}
</style>