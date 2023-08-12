const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')  // 在koa中使用模版文件
const json = require('koa-json')  // 将数据格式化成json
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')  // koa解析post请求的参数
const logger = require('koa-logger')
const cors = require('koa2-cors')


const index = require('./routes/index')
const users = require('./routes/users')
const record = require('./routes/record')


app.use(cors()) // 告诉浏览器不要给我跨域
// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(record.routes(), record.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app





// [
//   {
//     year: 2023,
//     totalTime: 560,
//     months: [
//       {
//         month: 1,
//         totalTime: 230,
//         weeks: [
//           {
//             week: 1,
//             totalTime: 42,
//             days: [
//               {
//                 day: 1,
//                 totalTime: 12,
//                 hours: [
//                   {
//                     h: 1,
//                     totalTime: 5
//                   },
//                   {
//                     h: 1,
//                     totalTime: 5
//                   },{
//                     h: 1,
//                     totalTime: 5
//                   },{
//                     h: 1,
//                     totalTime: 5
//                   },{
//                     h: 1,
//                     totalTime: 5
//                   },{
//                     h: 1,
//                     totalTime: 5
//                   },{
//                     h: 1,
//                     totalTime: 5
//                   },
//                 ]
//               },
//               {
//                 day: 2,
//                 totalTime: 12,
//               },
//               {
//                 day: 3,
//                 totalTime: 12,
//               },{
//                 day: 4,
//                 totalTime: 12,
//               },{
//                 day: 5,
//                 totalTime: 12,
//               },{
//                 day: 6,
//                 totalTime: 12,
//               },{
//                 day: 7,
//                 totalTime: 12,
//               },
//             ]
//           },{
//             week: 2,
//             totalTime: 42
//           },{
//             week: 3,
//             totalTime: 42
//           },{
//             week: 4,
//             totalTime: 42
//           },
//         ]
//       },
//       {
//         month: 2,
//         totalTime: 230,
//         weeks: [
//           {
//             week: 1,
//             totalTime: 42
//           },{
//             week: 2,
//             totalTime: 42
//           },{
//             week: 3,
//             totalTime: 42
//           },{
//             week: 4,
//             totalTime: 42
//           },
//         ]
//       },{
//         month: 3,
//         totalTime: 230,
//         weeks: [
//           {
//             week: 1,
//             totalTime: 42
//           },{
//             week: 2,
//             totalTime: 42
//           },{
//             week: 3,
//             totalTime: 42
//           },{
//             week: 4,
//             totalTime: 42
//           },
//         ]
//       },{
//         month: 4,
//         totalTime: 230
//       },{
//         month: 5,
//         totalTime: 230
//       },{
//         month: 6,
//         totalTime: 230
//       },{
//         month: 7,
//         totalTime: 230
//       },{
//         month: 8,
//         totalTime: 230
//       },{
//         month: 9,
//         totalTime: 230
//       },{
//         month: 10,
//         totalTime: 230
//       },{
//         month: 11,
//         totalTime: 230
//       },{
//         month: 12,
//         totalTime: 230
//       },
//     ]
//   },
//   {
//     year: 2023,
//     totalTime: 560,
//     months: [
//       {
//         month: 1,
//         totalTime: 230,
//         weeks: [
//           {
//             week: 1,
//             totalTime: 42,
//             days: [
//               {
//                 day: 1,
//                 totalTime: 12,
//                 hours: [
//                   {
//                     h: 1,
//                     totalTime: 5
//                   },
//                   {
//                     h: 1,
//                     totalTime: 5
//                   },{
//                     h: 1,
//                     totalTime: 5
//                   },{
//                     h: 1,
//                     totalTime: 5
//                   },{
//                     h: 1,
//                     totalTime: 5
//                   },{
//                     h: 1,
//                     totalTime: 5
//                   },{
//                     h: 1,
//                     totalTime: 5
//                   },
//                 ]
//               },
//               {
//                 day: 2,
//                 totalTime: 12,
//               },
//               {
//                 day: 3,
//                 totalTime: 12,
//               },{
//                 day: 4,
//                 totalTime: 12,
//               },{
//                 day: 5,
//                 totalTime: 12,
//               },{
//                 day: 6,
//                 totalTime: 12,
//               },{
//                 day: 7,
//                 totalTime: 12,
//               },
//             ]
//           },{
//             week: 2,
//             totalTime: 42
//           },{
//             week: 3,
//             totalTime: 42
//           },{
//             week: 4,
//             totalTime: 42
//           },
//         ]
//       },
//       {
//         month: 2,
//         totalTime: 230,
//         weeks: [
//           {
//             week: 1,
//             totalTime: 42
//           },{
//             week: 2,
//             totalTime: 42
//           },{
//             week: 3,
//             totalTime: 42
//           },{
//             week: 4,
//             totalTime: 42
//           },
//         ]
//       },{
//         month: 3,
//         totalTime: 230,
//         weeks: [
//           {
//             week: 1,
//             totalTime: 42
//           },{
//             week: 2,
//             totalTime: 42
//           },{
//             week: 3,
//             totalTime: 42
//           },{
//             week: 4,
//             totalTime: 42
//           },
//         ]
//       },{
//         month: 4,
//         totalTime: 230
//       },{
//         month: 5,
//         totalTime: 230
//       },{
//         month: 6,
//         totalTime: 230
//       },{
//         month: 7,
//         totalTime: 230
//       },{
//         month: 8,
//         totalTime: 230
//       },{
//         month: 9,
//         totalTime: 230
//       },{
//         month: 10,
//         totalTime: 230
//       },{
//         month: 11,
//         totalTime: 230
//       },{
//         month: 12,
//         totalTime: 230
//       },
//     ]
//   }
  
  
// ]

// {
//   month: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
//   data: [23, 43, 44, 45, 46, 47, 48, 49, 50, 51, 78, 32]
// }