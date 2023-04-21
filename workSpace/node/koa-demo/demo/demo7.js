const Koa = require('koa')

const app = new Koa()

const main = (ctx) => {  // ctx == context  代表 koa 上下文对象

if(ctx.request.url === '/home'){
    ctx.body = 'Hello Home'
}else if(ctx.request.url === '/user') {
ctx.body = 'Hello User'
}else {
    ctx.body = 'Hello User'
}

}

app.use(main)

app.listen(3000, () => {
    console.log('项目已启动在3000端口');
})
