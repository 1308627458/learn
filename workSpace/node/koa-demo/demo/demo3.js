const Koa = require('koa')
const cors = require('@koa/cors')

const app = new Koa()
app.use(cors())


const main = (ctx) => {  // ctx == context  代表 koa 上下文对象
    console.log(ctx.request.url);

    //   if(ctx.request.url === '/home') {
    //     ctx.body = '这是home页面的数据'
    //   }else if (ctx.request.url === '/about'){
    //     ctx.body = '这是about页面'
    //   }
    //   ctx.body = 'hello world1' 
    if (ctx.request.url === '/user') {
        ctx.body = {
            name: '张三'
        }
    }

}

app.use(main)

app.listen(3000, () => {
    console.log('项目已启动在3000端口');
})