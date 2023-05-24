const fs = require('fs');
const path = require('path');

// 拷贝

const fileName1 = path.resolve(__dirname, 'mv.mp4')
const fileName2 = path.resolve(__dirname, 'mv2.mp4')
// 读取文件的 stream 对象
const readStream = fs.createReadStream(fileName1) 
// 写入 stream 对象
const writeStream = fs.createWriteStream(fileName2)
// pipe拷贝
readStream.pipe(writeStream)
// 监听stream 对象的传输
readStream.on('end', () => {
  console.log('copy success');
})