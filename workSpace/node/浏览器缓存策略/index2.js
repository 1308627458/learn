const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('mime'); // 接收一个文件后缀，返回一个文件类型
const md5 = require('crypto-js/md5')

const server = http.createServer((req, res) => { 
  const filePath = path.resolve(__dirname,  `www/${req.url}`)  //http://localhost:3000/index.html

  if (fs.existsSync(filePath)) {  // 路径是否合法
    const stats = fs.statSync(filePath);  // 获取文件信息
    const isDir = stats.isDirectory();  // 判断是否是文件夹
    if (isDir) {
      filePath = path.join(filePath, 'index.html');
    }
    // 读取文件
    if (!isDir || fs.existsSync(filePath)) {
      // 前端请求的路径的后缀名
      const { ext } = path.parse(filePath);
      const content = fs.readFileSync(filePath);
 
      let status = 200
      // 判断文件是否修改过
      if (timeStamp && Number(timeStamp) === stats.mtimeMs) {
        status = 304
      }
      res.writeHead(status, {
        'Content-Type': `${mime.getType(ext)};charset=utf-8`,
        'Cache-control': 'max-age=3600', // 缓存一小时
        'Etag': md5(content) // 文件资源的md5值
      });

      if (status === 200) {
        const fileStream = fs.createReadStream(filePath) 
        fileStream.pipe(res);
      } else {
        res.end()
      }

      
    }

  }

})

server.listen(3000, () => {
  console.log('Server is running on port 3000');
})