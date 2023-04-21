const Koa = require('koa')
const router = require('koa-route')

const app = new Koa()

// const main = (ctx) => {  // ctx == context  代表 koa 上下文对象

// if(ctx.request.url === '/home'){
//     ctx.body = 'Hello Home'
// }else if(ctx.request.url === '/user') {
// ctx.body = 'Hello User'
// }else {
//     ctx.body = 'Hello User'
// }

// }
// app.use(main)


const home = (ctx) => {
    ctx.body = 'Hello Home'
}
const about = (ctx) => {
    ctx.body = 'Hello About'
}


app.use(router.get('/home',home))
app.use(router.get('/about',about))   // 声明一个get 请求的路径


app.listen(3000, () => {
    console.log('项目已启动在3000端口');
})
