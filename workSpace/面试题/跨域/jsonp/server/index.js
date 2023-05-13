const Koa = require('koa')
const app = new Koa() 

const data = {
  name: '红红',
  age:18
}

const main = (ctx) => {
// console.log(ctx.query);
const { cb } = ctx.query
const str = `${cb}(${JSON.stringify(data)})`  // 'callback(红红)'
ctx.body = str
}

app.use(main)

app.listen(3000, () => {
  console.log('jsonp项目启动')
})