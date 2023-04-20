// 启动http服务
// 提供  / banners 路由服务
// js  宿主环境 browser document
            // node linux 命令行 http
// node 后端开发太快了  中小型项目开发   缺点：弱类型 不太壮  单线程（学起来简单）
// require? 模块化  commonjs 老点
// import form '' es6
const http = require('http'); // node  js 在后端的实现
// web server
const server = http.createServer(function(req, res){
    res.end('hello world')
}) // web 服务
server.listen(3000)