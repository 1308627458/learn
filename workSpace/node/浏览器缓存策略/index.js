
const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('mime'); // 接收一个文件后缀，返回一个文件类型

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
      const content = fs.readFileSync(filePath);
      // 前端请求的路径的后缀名
      const { ext } = path.parse(filePath); // .html  .png
      // if (ext === '.png') {
      //   res.writeHead(200, {'Content-Type': 'image/png'});
      // } else {
      //   res.writeHead(200, {'Content-Type': 'text/html;charset=utf-8'});
      // }
      // res.writeHead(200, {'Content-Type': `${mime.getType(ext)};charset=utf-8`});

      // 将文件读成了一个流类型
      const fileStream = fs.createReadStream(filePath) 
      fileStream.pipe(res); // 将文件流导入到res中

      // return res.end(content);
    }

  }

})

server.listen(3000, () => {
  console.log('Server is running on port 3000');
})