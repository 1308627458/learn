const http = require('http');
const fs = require('fs')
const path = require('path');
const zlib = require('zlib');

const server = http.createServer((req, res) => {
  const url = path.join(__dirname, req.url);
  const fileStream = fs.createReadStream(url)

  // 压缩
  const compression = zlib.creareDeflate()

  let type = 'text/html'
  if(req.url.endsWith('png')) {
    type = 'image/png'
  }
  res.writeHead(200,{ 'Content-Encoding': 'deflate', 'Content-Type': 'type'})

  fileStream.pipe(compression).pipe(res)
})


server.listen(3000)