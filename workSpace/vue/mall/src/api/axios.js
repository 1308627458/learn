import axios from "axios";
import {  showFailToast } from 'vant';
import router from "../router";
axios.defaults.baseURL = "http://backend-api-01.newbee.ltd/api/v1"

axios.defaults.withCredentials = true  // 允许 axios 在请求的过程中携带 cookie 凭证

axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest' // 开启 axios 在浏览器中的能力

axios.defaults.headers['token'] = localStorage.getItem('token') || '' //

axios.defaults.headers.post['Content-Type'] = 'application/json'

// 拦截后端返回的响应数据 

axios.interceptors.response.use(res => {
  
  if (typeof res.data !== 'object') {
    showFailToast('服务器异常')
    return Promise.reject(res)
  }
  if (res.data.resultCode != 200) {
    if (res.data.message) showFailToast(res.data.message)
    // if (res.data.resultCode == 416) { // 登录失效
    //   router.push('/login')
    // }
    return Promise.reject(res.data)
  }
  return res.data // 正常
})

export default axios 

