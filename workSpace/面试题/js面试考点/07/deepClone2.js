
  let obj = {
    name: '老宋',
    like: {
      sports: 'running',
      book: {
        one: 'js',
        two: 'css'
      }
    }
  }

function deepClone(obj) {
  return new Promise((resolve) => {
    const { port1, port2 } = new MessageChannel()
    port1.postMessage(obj)
    port2.onmessage = (msg) => {
      // console.log(msg.data);
      resolve(msg.data)
    }
  })
}


deepClone(obj).then(res => {
  obj.like.book.one = 'html'
  console.log(res)
}
)