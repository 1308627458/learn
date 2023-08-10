const router = require('koa-router')()
const userService = require('../controllers/mySqlControl.js')

router.prefix('/users')

// 登录接口
router.post('/login',  async (ctx, next) => {
  console.log(ctx.request.body);
  const { username, password } = ctx.request.body
  // 读取数据库中的users表，判断读到的值和前端传过来的值是否匹配
 try{
   const result = await userService.userLogin(username, password)
  if(result.length) {
    let data = {
      id: result[0].id,
      nickname: result[0].nickname,
      username: result[0].username
    }
    ctx.body = {
      code: '80000',
      data: data,
      msg: '登录成功'
    }
  } else {
    ctx.body = {
      code: '80004',
      data: 'error',
      msg: '账号或密码错误'
    }
  }
 } catch(error) {
  ctx.body = {
    code: '80002',
    data: error,
    msg: '服务器异常'
  }
 }
})




module.exports = router
