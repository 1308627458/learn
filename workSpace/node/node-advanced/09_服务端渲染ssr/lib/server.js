const http = require('http')
const Interceptor = require('./interceptor')

module.exports = class {
  constructor() {
    const interceptor = new Interceptor()

    this.server = http.createServer(async (req, res) => {
      await interceptor.run({req, res})

      if (!res.writableFinished) {
        let body = res.body || '200 OK'
        if (body.pipe) { // 是不是一个流
          body.pipe(res)
        } else { // 普通对象
          if (typeof body !== 'string' && res.getHeader('Content-Type') === 'application/json') {
            body = JSON.stringify(body)
          }
          res.end(body)
        }
      }
    })

    // 监听错误
    this.server.on('clientError', (err, socket) => {
      socket.end('HTTP/1.1 400 Bad Request\r\n\r\n')
    })

    this.interceptor = interceptor
  }

  listen(opts, cb = () => {}) {
    if (typeof opts === 'number') opts = { port: opts }
    opts.host = opts.host || '0.0.0.0'
    console.log(`starting up http-server http://${opts.host}:${opts.port}`);
    this.server.listen(opts, () => cb(this.server))
  }

  use(aspect) { // 向http服务器添加拦截切面
    return this.interceptor.use(aspect)
  }

}

