import { post } from './index.js'

export const login = (body) => {
 return post('/login', body).then(res => res.data)
}
export const home = (body) => {
  return post('/home', body).then(res => res.data)
 }
 export const menu = (body) => {
  return post('/menu', body).then(res => res.data)
 }