const http = require('http');
const path = require('path');
const fse = require('fs-extra');
const multiparty = require('multiparty');  // 解析 FormData

const resolvePost = () => { // 解析mergr请求
  new Promise((resolve, reject) => {
    
  })
}

const server = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  if (req.method === 'OPTIONS') { // 前端发送的预检请求
    res.status = 200;
    res.end();
    return
  }
  if (req.url === '/upload') {
    // 解析前端传过来的 FormData
    const multipart = new multiparty.Form();
    multipart.parse(req, async(err, fields, files) => {
      if (err) return
      const [file] = files.file
      const [fileName] = fields.fileName
      const [chunkName] = fields.chunkName
      // 把片段保存起来，等到所有的片段都接收完毕后再合并
      const chunkDir = path.resolve(__dirname, `chunks/${fileName}-chunk`)
      // 判断文件夹是否存在，不存在则创建
      if (!fse.exists(chunkDir)) {
        await fse.mkdirs(chunkDir)
      }
      // 把片段从临时目录移动到指定目录
      await fse.move(file.path, `${chunkDir}/${chunkName}`)
      res.end('received file chunk')

    })
  }

  if(req.url === '/merge') {
    // 后端该合并片段了
    const data = await resolvePost(req)
  }

})

server.listen(3000, () => {
  console.log('listening on port 3000');
})