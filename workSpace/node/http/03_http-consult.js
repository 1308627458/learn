const http = require('http');
const url = require('url');

const responseData = {
  ID: '1',
  name: '张三',
  registerDate: '2023年6月1日'
}
function toHTML(data) {
  return `
    <ul>
      <li><span>账号：</span><span>${data.ID}</span></li>
      <li><span>昵称：</span><span>${data.name}</span></li>
      <li><span>注册时间：</span><span>${data.registerDate}</span></li>
    </ul>
  `
}


const server = http.createServer((req,res) => {
  const { pathname } = url.parse(`http://${req.headers.host}${req.url}`) // 把一个http里面的url地址解析出来
  if(pathname === '/') {
    const accept = req.headers.accept
    if(req.method === 'POST' || accept.indexOf ('application/json')>= 0) {
      res.writeHead(200,{'Content-Type': 'application/json'})
      res.end(JSON.stringify(responseData))
    } else{
      res.writeHead(200,{'Content-Type': 'text/html; charset=utf-8'})
      res.end(toHTML(responseData))
    }
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