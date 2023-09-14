const http = require('http');
const path = require('path');
const fs = require('fs');


const server = http.createServer((req, res) => {
  if(req.url === '/favicon.ico') return 
  let filePath = path.join(__dirname, `${req.url}`)

  const fileStream = fs.createReadStream(filePath)
  const stats = fs.statSync(filePath) // 读取文件详细参数
  const timeStamp = req.headers['if-Modified-Since']

  let status = 200

  if(timeStamp && Number(timeStamp) === stats.mtimeMs) {
    // 这份资源没有被修改过
    status = 304 
  }
  console.log(stats);
  if (req.url.endsWith('.png')) {
    // 在响应头中设置资源的类型
    res.writeHead(200, {
      'Content-Type': 'image/png',
      // 'Cache-Control': 'max-age=86400',
      'Expires': new Date(Date.now() + 30000).toUTCString()
    })  
  } else {
    
    res.writeHead(status,{
      'Content-Type': 'text/html',
      'Cache-Control': 'max-age=86400',
      // 'Last-Modified': stats.mtimeMs,
      'etag': '文件的签名', // 更好一点
    })
  }
  

  fileStream.pipe(res) 
})

server.listen(3000, () => {
  console.log('listening on port 3000');
})