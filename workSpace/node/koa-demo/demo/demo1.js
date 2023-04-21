// 后端的逻辑主要是跟服务器交互
// 给前端提供数据
const Koa = require('koa')

const app = new Koa()

app.listen(3000, () => {
    console.log('项目已启动在3000端口');
})