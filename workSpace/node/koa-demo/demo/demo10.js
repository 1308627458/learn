const Koa = require('koa')
const router = require('koa-route')

const app = new Koa()



const home = (ctx) => {
    ctx.body = 'Hello Home'
}
const about = (ctx) => {
    ctx.response.redirect('/home')
    ctx.body = '<a href="/home">go home page</a>'
}


app.use(router.get('/home',home))
app.use(router.get('/about',about))   


app.listen(3000, () => {
    console.log('项目已启动在3000端口');
})
