// jq

function ajax(options) {
  let { 
    method,
    url,
    data,
    async,
    dataType,
    success,
    fail
  } = options


  let xhr = new XMLHttpRequest();

  method = method.toUpperCase()

  if (method === 'GET') {
   const index = url.indexOf('?')

   if (index === -1) {
    url += '?'
   } else if (index !== url.length - 1) {
    url += '&'
   }
   
   let params = [] // [ id=1, name='小帅']
   for (let key in data) {
    params.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
   }
   let encodeData = ''
   encodeData = params.join('&') // id=1&name='小帅'

   url += encodeData

   xhr.open(method, url, async);
   xhr.send()
  } else {
    xhr.setRequestHeader(
      'Content-Type', 'application/x-www-form-urlencoded;charset=utf-8',
      'Accept', dataType
    )
    xhr.open(method, url, async);
    xhr.send(data)
  }

  xhr.onreadystatechange = function() { // 接受到响应时触发
    if (xhr.readyState == 4 && xhr.status == 200) {
      success(JSON.parse(xhr.responseText))
    } else {
      fail(xhr.responseText)
    }
  }
}