function ajax(options) {
  return new Promise((resolve, reject) => {
    // 创建一个XHR对象
    const xhr = new XMLHttpRequest();

    // 初始化参数内容
    options = options || {}
    options.method = (options.method || 'GET').toUpperCase()
    options.dataType = options.dataType || 'json'
    const params = options.data

    // 发送请求
    if (options.method === 'GET') { // 参数的拼接
      let str = ''
      for (let key in params) {
        str += `${key}=${params[key]}&` // id=1&name=Tom&
      }
      xhr.open('GET', options.url + '?' + str, true) // {id: 1, name: 'Tom'} => url?id=1&name=Tom
      xhr.send()
    } else if (options.method === 'POST') {
      xhr.open('POST', options.url, true)
      xhr.send(params)
    }

    // 监听状态的变化
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        resolve(xhr.responseText)
      }
    }

  })
}