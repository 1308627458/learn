const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const path = require('path')

function rewriteImport(content) {
  return content.replace(/ from ['|"]([^'"]+)['|"]/g, function (s0, s1) {
    // ./ ../  /
    if (s1[0] !== '.' && s1[1] !== '/') {
      return ` from '/@modules/${s1}'`  // http://localhost:5173/@modules/vue
    } else {
      return s0
    }
  })
}

app.use((ctx) => {
  const { request: { url, query } } = ctx
  if (url === '/') {
    ctx.type = 'text/html'
    let content = fs.readFileSync('./index.html', 'utf8')

    ctx.body = content
  } else if (url.endsWith('.js')) { // js 文件  /src/main.js
    const p = path.resolve(__dirname, url.slice(1))
    ctx.type = 'application/javascript'
    const content = fs.readFileSync(p, 'utf8')
    ctx.body = rewriteImport(content)
  } else if (url.startsWith('/@modules')) { // '/@modules/vue'
    const prefix = path.resolve(__dirname, 'node_modules', url.replace('/@modules/', ''))
    const module = require(prefix+'/package.json').module
    const p = path.resolve(prefix, module)
    const ret = fs.readFileSync(p, 'utf8')
    ctx.type = 'application/javascript'
    ctx.body = rewriteImport(ret)
  }

})

app.listen(5173, () => {
  console.log('listening on port 5173');
})