import axios from 'axios'
import router from '../router'

const BASE_URL = 'http://localhost:3000'

// 请求拦截
axios.interceptors.request.use((config) => {
  let jwtToken = window.localStorage.getItem('jwtToken') || ''
  if (jwtToken) {
    // 设置统一的请求头
    config.headers.Authorization = jwtToken
  }
  return config
})

// 响应拦截
axios.interceptors.response.use(
  (res) => {
    if (res.data.code !== 0) {
      return Promise.reject(res.data)
    }
    return res
  },
  (error) => {
    if (error.response.status >= 400 && error.response.status < 500) {
      router.push('/login')
    }
    return Promise.reject(error.response.data.error)
  }
)

export function post(url, body) {
  return axios.post(BASE_URL + url, body)
}