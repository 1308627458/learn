const http = require('http');
const urllib = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {
    "Access-Control-Allow-Origin": "*"
  })

  http.request({
    host: '192.168.31.253',  // 江总的后端
    port: 3000,
    method: 'GET',
  }, result => {
    result.on('data', function (msg) {
      console.log(msg.toString());

      res.end(msg.toString());
    })
  }).end()

}).listen(3000, () => {
  console.log('listening on port 3000');
});