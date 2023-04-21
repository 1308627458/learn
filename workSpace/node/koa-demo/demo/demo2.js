const Koa = require('koa')

const app = new Koa()

const main = (ctx) => {  // ctx == context  代表 koa 上下文对象
  ctx.body = 'hello world1'      
}

app.use(main)

app.listen(3000, () => {
    console.log('项目已启动在3000端口');
})
