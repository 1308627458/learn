const Koa = require('koa')
const cors = require('@koa/cors')

const app = new Koa()
app.use(cors())

const main =(ctx) => {
    console.log(ctx.require.header.accept);

    if(ctx.require.header.accept == 'text/html') {
        ctx.response.type = 'html'
        ctx.body = '<h2>Hello World</h2>'
        
    }else if(ctx.require.accepts('json')){
        ctx.response.type = 'json'
        ctx.body = '{data:"hello world"}'
    }

    ctx.body = 'hello world';
}
app.use(main)

app.listen(3000, () => {
    console.log('项目已启动在3000端口');
})