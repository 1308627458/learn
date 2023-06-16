const http = require('http');
const urllib = require('url');

http.createServer(function (req, res) {
  const {query} = url.parse(req.url,true)
}).listen(3000,() => {
  res.edn
})