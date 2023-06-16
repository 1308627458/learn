const http = require('http');
const urllib = require('url');

http.createServer(function (req, res) {

  res.writeHead(200, {
    "Access-Control-Allow-Origin": 'http://127.0.0.1:5500',
    // "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    // "Access-Control-Allow-Headers": "Content-Type"
  })

  res.end(JSON.stringify({msg: 'hello world'}))


}).listen(3000, () => {
  console.log('listening on port 3000');
});