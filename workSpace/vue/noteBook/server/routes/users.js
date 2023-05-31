const router = require('koa-router')()
const userService = require('../controllers/mySqlControll.js');

router.prefix('/users')

//登录接口
router.post('/login', async (ctx, next) => {
  console.log(ctx.request.body);
  const { username, password } = ctx.request.body
  //去数据库中的users表，判断值是否和前端的值匹配
  try {
    // 异步操作可能不成功!
    const result = await userService.userLogin(username, password);
    if (result.length) {
      let data = {
        id: result[0].id,
        nickname: result[0].nickname,
        username: result[0].username
      }
      ctx.body = {
        code: '80000',
        data: data,
        msg: '登陆成功!'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: 'error',
        msg: '账号或密码错误!'
      }
    }
  } catch (error) {
    //数据库可能连接不上或出错了
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常！'
    }
  }
})

//注册接口
router.post('/register', async (ctx, next) => {
  const { username, password, nickname } = ctx.request.body
  if (!username || !password || !nickname) {
    ctx.body = {
      code: '80001',
      msg: '账号密码或昵称不能为空！'
    }
    return
  }
  //判断数据库中是否已有账号
  try {
    const findRes = await userService.userFind(username)
    console.log(findRes);
    if (findRes.length) { //查到了相同的
      console.log(111111111);
      ctx.body = {
        code: '80003',
        data: 'err',
        msg: '用户名已存在'
      }
    } else { // 往数据库植入前端传入的数据
      await userService.userRegister([username, password, nickname]).then(res => {
        if (res.affectedRows !== 0) {
          ctx.body = {
            code: '80000',
            data: 'ok',
            msg: '注册成功'
          }
        } else {
          ctx.body = {
            code: '80004',
            data: 'error',
            msg: '注册失败'
          }
        }
      })
        .catch(err => {
          ctx.body = {
            code: '80002',
            data: err,
            msg: '服务器异常！'
          }
        })
    }
  } catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常！'
    }
  }
})

module.exports = router
