# 1. js事件机制

- 事件的触发过程
  
  1. 从window上往事件触发处传播，此过程称之为捕获，遇到的捕获事件会触发
  2. 达到事件触发处，触发注册的事件
  3. 从事件触发处往window上传播，此过程称之为冒泡，遇到的冒泡事件会触发

- 事件代理
  
  1. 节约内存
  2. 提升性能（不需要给子节点注销事件）

# 2. 跨域

- 什么是跨域？
   协议 - 域名 - 端口号  有一个不同都算跨域

- 浏览器为什么要有同源策略？
   禁止第三方站点朝A网站 请求数据，降低CSRF攻击的可能

- 解决跨域的方法
  
  1. jsonp (需要后端配合，只能get请求)
  2. cors (纯后端实现，通过响应头告诉浏览器哪些 源 不需要走同源策略)
  3. node 代理 (同源策略不发生在服务端，通过一段可以跨域的node代码 帮前端请求其他后端的数据)
  4. nginx
  5. postMessage (当页面中使用了iframe嵌套了子页面，父子页面不同源时，postMessage可以实现通信)
  6. domain (通过声明父子页面的 document.domain = 'xxx', 来告诉浏览器无需跨域)
  7. WebSocket (socket协议不受同源策略限制)
     
     

- 请求预检
1. CSRF攻击（Cross-site request forgery）
   黑客引诱用户打开黑客的网站，在黑客的网站中，利用用户的登录状态发情跨站请求

# 3. 存储

cookie        localStorage      sessionStorage      indexDB
后端操作存储     前端端操作存储      前端端操作存储       前端端操作存储

可设置过期时间   一直在除非手动清理   页面关闭自动清理  一直在除非手动清理

  4k              5M                5M                无限

每次携带在header中   不参与             不参与            不参与

cookie 安全性：

1. value  不能使用明文
2. http-Only   不能被js访问，减少XSS攻击
3. secure   cookie 只能携带在https中
4. sameSite    不能在跨域请求中携带cookie，减少CSRF攻击

# 
