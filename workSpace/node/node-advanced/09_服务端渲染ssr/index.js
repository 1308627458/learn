const Server = require('./lib/server.js')
const Router = require('./lib/middleware/router.js')
const param = require('./aspect/param.js')
const fs = require('fs')

const handlebars = require('handlebars')
const app = new Server()
const router = new Router()


app.use(({req}, next) => {
  console.log(`${req.method} ${req.url}`);
  next()
})

app.use(param)

// 配置路由
app.use(router.get('/coronavirus/index', async({route, res}, next) => {
  const { getCoronavirusKeyIndex } = require('./module/mock.js')
  const index = getCoronavirusKeyIndex()
  // 获取模板文件
  const source = fs.readFileSync('./view/coronavirus_index.html', {encoding: 'utf-8'})
  // 解析模板
  const template = handlebars.compile(source)
  // 数据和模板结合
  const result = template({data: index})

  res.setHeader('Content-Type', 'text/html')
  res.body = result
  await next()
}))
app.use(router.get('/coronavirus/:date', async({route, res}, next) => {
  const { getCoronavirusByDate } = require('./module/mock.js')
  const data = getCoronavirusByDate(route.date)
 // 获取模板文件
 const source = fs.readFileSync('./view/coronavirus_date.html', {encoding: 'utf-8'})
 // 解析模板
 const template = handlebars.compile(source)
 // 数据和模板结合
 const result = template({data})

  res.setHeader('Content-Type', 'text/html')
  res.body = {data: data}
  await next()
}))

// 默认路由
app.use(router.all('.*', async({req, res}, next) => {
  res.setHeader('Content-Type', 'text/html')
  res.body = '<h1>Not Found</h1>'
  res.statusCode = 404
  await next()
}))


app.listen({port: 3000, host: 'localhost'})