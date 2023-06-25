const http = require('http');
const url = require('url');

const server = http.createServer((req,res) => {
  const { pathname } = url.parse(`http://${req.headers.host}${req.url}`) // 把一个http里面的url地址解析出来
  if(pathname === '/') {
    res.writeHead(200,{'Content-Type': 'text/html'})
    res.end('<h1>Hello, world!</h1>')
  } else {
    res.writeHead(404,{'Content-Type': 'text/html'})
    res.end('<h1>Not Found</h1>')
  }
});


server.on('clientError', (err,scoket) => {
  scoket.end('HTTP/1.1 400 Bad Request');
})

server.listen(3000, () => {
  console.log('listening on port 3000', server.address());
})