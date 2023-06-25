const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // /xxx/xxx/xxx/xxx  + /www/index.html
  const filePath = path.resolve(__dirname, 'www/${req.url}')

  if (fs.existsSync(filePath)) { // 判断路径是否真实有效
    const stats = fs.statSync(filePath)
    const isDir = stats.isDirectory()

    if (isDir) {
      filePath = path.join(filePath, 'index.html')
    }
    if (!isDir || fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath) // 读取文件内容
      const { ext } = path.parse(filePath)
      if(ext === '.html') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      }else if(ext === '.css') {
        res.writeHead(200, { 'Content-Type': 'text/css'})
      }else if(ext === '.png') {
        res.writeHead(200, { 'Content-Type': 'image/png'})
      }

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      return res.end(content)
    }

  }

  res.writeHead(404, { 'Content-Type': 'text/html' })
  res.end('<h1>Not Found</h1>')
})

server.listen(3000, () => {
  console.log('listening on port 3000', server.address());
})