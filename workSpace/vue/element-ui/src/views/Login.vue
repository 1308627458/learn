<template>
  <div class="login">
    <div class="login-container">
      <h2>旅梦后台管理系统</h2>
      <el-row>
        <el-input v-model="account" class="w-50 m-2" size="large" placeholder="请输入账号:" :prefix-icon="UserFilled" />
      </el-row>
      <el-row>
        <el-input v-model="password" class="w-50 m-2" size="large" placeholder="请输入密码:" :prefix-icon="Lock" />
      </el-row>
      <el-button size="large" type="primary" @click="signIn">登录</el-button>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import { UserFilled, Lock } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import{ useRouter} from 'vue-router'
export default {
  setup() {
    const state = reactive({
      account: '',
      password: '',
    })

    const router = useRouter()

    const signIn = () => {
      //拿到用户输入的账号和密码，发接口请求传给后端
      if(!state.account || !state.password){
        ElMessage.error('账号或密码不能为空')
        return
      }
     router.push('/home') 

    }
    return {
      ...toRefs(state),
      UserFilled,
      Lock,
      signIn
    }
  }
}
</script>

<style  scoped>
.login-container {
  width: 400px;
  height: 360px;
  border: 1px solid #000;
  text-align: center;
  color: white;
}

.login {
  width: 100vw;
  height: 100vh;
  background-color: lightpink;
  display: flex;
  justify-content: center;
  align-items: center;
}

h2 {
  line-height: 3;
}

.el-row {
  width: 80%;
  margin: 0 auto;
  margin-bottom: 30px;
}

.el-button--primary {
  width: 80%;
}
</style>