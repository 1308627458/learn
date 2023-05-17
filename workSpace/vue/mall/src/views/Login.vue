<template>
  <Header :title="state.type === 'login' ? '登录' : '注册'" />
  <img class="logo" src="@/assets/vue.svg" alt="">
  <div v-if="state.type === 'login'" class="login-wrapper login">
    <van-form @submit="onSubmit">
      <van-field v-model="state.username" name="用户名" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="state.password" type="password" name="密码" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
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
      <van-field v-model="state.username1" name="用户名" label="用户名" placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="state.password1" type="password" name="密码" label="密码" placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
      <van-field v-model="state.password2" type="password" name="密码" label="确认密码" placeholder="再次输入密码"
        :rules="[{ required: true, message: '请填写密码' }]" />
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
import { register, login } from '@/api/service/user.js'
import { showSuccessToast } from 'vant';
import md5 from 'js-md5'
import { useRouter } from 'vue-router';

// showSuccessToast('成功文案');
// showFailToast('失败文案');
const router = useRouter()
const state = reactive({
  username: '',
  password: '',
  type: 'login',
  username1: '',
  password1: '',
  password2: '',
})
// 登录
const onSubmit = async() => {
  // console.log('登录');
  if (state.type == 'login') { // 登录
    const {data} = await login({
      loginName: state.username,
      passwordMd5: md5(state.password)
    })
    console.log(data);
    localStorage.setItem('token', data)
    router.push('/home')

  } else {
    if (state.password1 == state.password2) {
      // console.log(state.username1, state.password1);
      await register({
        loginName: state.username1,
        password: state.password1
      })
        showSuccessToast('注册成功')
        state.type = 'login'
      
    }
  }
}
// 去注册
const toggle = (type) => {
  state.type = type
}

</script>

<style lang="less" scoped>
.logo {
  width: 120px;
  display: block;
  margin: 80px auto 20px auto;
}

.login-wrapper {
  padding: 0 20px;

  .link-register {
    font-size: 14px;
    color: #1989fa;
    margin-bottom: 20px;
  }
}
</style>