# 路由
1. 有办法改变 url 地址

2. url 改变后能展示对应的页面

# 使用
1. <router-link to="/home">首页</router-link>
2. 配置映射
3. <router-view></router-view>

- useRoute() 代表当前的url地址
- useRouter() 代表路由的实例对象，具有路由的各种方法

- 路由传参
1. query 会在路径后面拼接问号
2. params 以 / 的方式拼接 