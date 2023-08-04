
<template>
  <div class="login">
    <el-form label-width="80px" class="demo-ruleForm">
      <el-form-item label="用户名">
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="loginForm.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { login } from '../api/user.js'
import { useRouter } from 'vue-router'


const router = useRouter()
const loginForm = reactive({
  username: '',
  password: ''
})

const submit = () => {
  console.log(loginForm.username, loginForm.password);
  login({
    username: loginForm.username,
    password: loginForm.password
  }).then(res => {
    console.log(res);
    window.localStorage.setItem('jwtToken', res.token)
    window.localStorage.setItem('level', res.level)
    router.push('/home')
  })
}
</script>

<style lang="css" scoped>
.login{
  width: 500px;
  position: fixed;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
}
</style>