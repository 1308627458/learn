const Koa = require('koa')
const app = new Koa() 

const main = () => {

}

app.use(main)

app.listen(3000, () => {
  console.log('项目启动')
})