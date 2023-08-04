const router = require('koa-router')();
const jwt = require('../utils/jwt')
let level = 0

router.post('/login', (ctx) => {
  let user = ctx.request.body
  if (1) { // 模拟数据库检验成功
    let token = jwt.sign({ id: '123', username: user.username, admin: true, level: 1 })
    // console.log(token);
    

    if(user.username === 'admin') {
      level = 3
    }else if(user.username === 'wn') {
      level = 2
    }else {
      level = 1
    }

    ctx.body = {
      code: 0,
      data: user.username,
      level: level,
      token: token
    }
  }
})

router.post('/home', jwt.verify('admin'), (ctx) => {
  console.log(ctx.request.headers.authorization);

  ctx.body = {
    code: 0,
    data: 'this is home data'
  }
})


// 获取菜单
router.post('/menu', jwt.verify(true), (ctx) =>{ 
  const menu = [
    {
      index: '/home',
      title: '首页',
      icon: 'setting',
      level: 1
    },
    {
      index: '/class',
      title: '班级',
      icon: 'setting',
      level: 1
    },
    {
      index: '/statis',
      title: '统计',
      icon: 'setting',
      level: 2
    }
  ]
  let showMenu = menu.filter(item => item.level <= level)
  
  ctx.body = {
    code: 0,
    data: showMenu
  }
})
module.exports = router;