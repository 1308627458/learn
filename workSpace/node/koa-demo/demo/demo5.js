const koa = require('koa')
const fs = require('fs')


const app = new koa()

const main = (ctx) => {
    if(ctx.request.url == '/home'){
        ctx.body = fs.createReadStream('./template.html')  // 创建可读流 
    }
}
app.use(main)


app.listen(3000, ()=>{
    console.log('项目已启动3000');
})