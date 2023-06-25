
const net = require('net')

function responseData(str) {
  return `HTTP/1.1 200 OK
  Connection: keep-alive
  Date: ${new Date()}
  Content-Length: ${str.length}
  Content-Type: text/html

  ${str}
  `

}

const server = net.createServer((socket) => {
  socket.on('data',(data) => {
    console.log(`DATA: \n\n${data}`);
  })

  socket.on('close',() => {
    console.log('连接断开');
  })
})


server.on('error',(err) => {
  throw err
})

server.listen({
  host: '0.0.0.0',
  port: 3000
}, () => {
  console.log('server listening on port 3000', sever.address());
})