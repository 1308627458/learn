let verify = (isAdmin) => (ctx, next) => {
  let jwtToken = ctx.request.headers.authorization
  if (jwtToken) {
    jwt.verify(jwtToken, '666', function(err, decoded) {
      if (err) { // token 不合法
        ctx.status = 401
        ctx.body = {
          code: 1,
          message: 'token不合法'
        }
      } else {
        if (isAdmin) {
          let { admin } = decode
          if (admin) {
            next()
          } else {
            ctx.body = {
              code: 1,
              message: '你不是管理员！权限不够'
            }
          }
        }
        
      }
    })
  } else {
    ctx.body = {
      code: 1,
      message: '请提供token'
    }
  }
}