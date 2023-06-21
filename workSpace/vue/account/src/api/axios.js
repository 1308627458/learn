import axios from "axios";
import { showFailToast } from 'vant';
import router from '../router'

axios.defaults.baseURL = 'http://47.99.134.126:7009/api'
axios.defaults.withCredentials = true  // 允许携带凭证
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['Authorization'] = `${localStorage.getItem('token') || null}`
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 响应拦截
axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    showFailToast('服务端异常')
    return Promise.reject(res)
  }
  if (res.data.code != 200) {
    if (res.data.msg) showFailToast(res.data.msg)
    if (res.data.code == 401) { // 没有权限
      router.push('/login')
    }
    return Promise.reject(res.data)
  }
  return res.data
})

export default axios