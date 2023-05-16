<template>
  <Header :title="state.type === 'login' ? '登录': '注册'"/>
  <img class="logo" src="@/assets/vue.svg" alt="">
  <div v-if="state.type === 'login'" class="login-wrapper login" >
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <div class="link-register" @click="toggle('register')">立即注册</div>
        <van-button round block type="primary" native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>

  </div>

  <div v-else class="login-wrapper register">
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username1"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password1"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <van-field
        v-model="state.password2"
        type="password"
        name="密码"
        label="确认密码"
        placeholder="再次输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <div class="link-register" @click="toggle('login')">已有账号？点击登录</div>
        <van-button round block type="primary" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>

  </div>
</template>

<script setup>
import { reactive } from 'vue';
import Header from '../components/Header.vue';
import axios from '@/api/axios.js';
const state = reactive({
  username: '',
  password: '',
  type: 'login',
  username1: '',
  password1: '',
  password2: '',
})
// 登录
const onSubmit = () => {
  console.log('登录');
}
// 去注册
const toggle = (type) => {
  state.type = type
}

</script>

<style lang="less" scoped>
.logo{
  width: 120px;
  display: block;
  margin: 80px auto 20px auto;
}
.login-wrapper{
  padding: 0 20px;
  .link-register{
    font-size: 14px;
    color: #1989fa;
    margin-bottom: 20px;
  }
}
</style>