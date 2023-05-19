 // 跟用户相关的接口请求
 import axios from '../axios'

 export function register(params) {
  return axios.post('/user/register', params)
 }

 export function login(params) {
  return axios.post('/user/login', params)
 }

