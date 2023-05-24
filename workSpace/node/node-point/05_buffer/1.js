const fs = require('fs');
const path = require('path');


const fileName = path.resolve(__dirname, 'data.txt')
const stream = fs.createReadStream(fileName);
console.log(stream);

stream.on('data',(chunk) => {
  console.log(chunk);
})