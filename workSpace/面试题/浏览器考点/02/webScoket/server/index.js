const WebSocket = require('ws')

const ws = new WebSocket.Server({ port:3000 }) 

ws.on('connection', (obj) => { // 前端和我建立了联接
  obj.on('message', (msg) => { // 前端给我传递了数据
    console.log(msg.toString);
    const data = JSON.parse(msg.toString)
    let age = data.age
    setInterval(() => {
      obj.send(`${data.name} 今年 ${age++}岁了`)
    },2000)

    // obj.send(`${data.name} 今年 ${data.age}岁了`)
  })
})