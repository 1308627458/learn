const koa = require('koa');
const cors = require('koa2-cors')
const bodyParser = require('koa-bodyparser')
const userRouter = require('./routers/user')
const app = new koa() 
app.use(bodyParser())

app.use(cors())

app.use(userRouter.routes(), userRouter.allowedMethods())

app.listen(3000, () => {
  console.log('服务已启动在3000端口');
})