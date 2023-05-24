const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // 文件读取的方式向客户端输出流类型
  const fileName = path.resolve(__dirname, 'mv.mp4')
  let stream = fs.createReadStream(fileName)
  stream.pipe(res)
})

server.listen(3000); 