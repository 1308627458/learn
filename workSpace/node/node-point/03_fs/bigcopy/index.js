// 文件拷贝 

const path = require('path');
const fs = require('fs');

const fileName1 = path.join(__dirname, '/1.webp')

fs.readFile(fileName1,'utf-8', (err, data) => {
  if (err) return
  // console.log(data);
  // 写入
  const fileName2 = path.join(__dirname, '/2.png')
  fs.writeFile(fileName2, data, (err) => {
    if (err) return
    console.log('copy success'); 
  })  

})