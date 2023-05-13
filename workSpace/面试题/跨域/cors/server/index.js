const Koa = require('koa')
const app = new Koa() 
const cors = require('@koa/cors')

app.use(cors({
  origin: 'http://127.0.0.1:5500'
}))
const main = (ctx) => {
  ctx.body = 'hello world'
}

app.use(main)

app.listen(3000, () => {
  console.log('cors项目启动')
})