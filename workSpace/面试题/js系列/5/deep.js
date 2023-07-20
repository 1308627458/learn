let obj = {
  name: '11',
  like: {
    a: '美食',
    b: '旅游'
  },
  sex: 'boy',
  num: [1, 2, 3, 4]
}


function deepClone(obj) {
  return new Promise((resolve, reject) => {
    const {port1, port2} = new MessageChannel() // 创建一个消息通道
    port1.postMessage(obj) // 发送消息
    port2.onmessage = (msg) => {
      resolve(msg.data) // 接收消息
    } 
  })
}

let newObj
deepClone(obj).then(res => {
  newObj = res
  obj.like.a = '喝酒'
  console.log(newObj);
})