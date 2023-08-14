const router = require('koa-router')()
const userService = require('../controllers/mySqlControl.js')

// 用户专注记录数据接口

router.prefix('/record')  // 路由前缀

// 日接口
router.post('/dayData', async(ctx, next) => {
  console.log(ctx.request.body);
  const { day, month, year} = ctx.request.body
  // 去hour库中找日期对应的数据

try {
  const result = await userService.findHour(day, month, year)
  // console.log(result);
  if(result.length) {
    ctx.body = {
      code: '80000',
      data: result,
      msg: '查找成功'
    }
  } else {
    ctx.body = {
      code: '80000',
      data: [],
      msg: '无数据'
    }
  }
} catch (error) {
  ctx.body = {
    code: '80002',
    data: error,
    msg: '服务器异常'
  }
}

})


// 周接口
router.post('/weekData', async(ctx, next) => {
  console.log(ctx.request.body);
  const { firstDay, lastDay, month, year} = ctx.request.body
  // 去hour库中找日期对应的数据

try {
  const result = await userService.findWeek(firstDay, lastDay, month, year)
  // console.log(result);
  if(result.length) {
    ctx.body = {
      code: '80000',
      data: result,
      msg: '查找成功'
    }
  } else {
    ctx.body = {
      code: '80000',
      data: [],
      msg: '无数据'
    }
  }
} catch (error) {
  ctx.body = {
    code: '80002',
    data: error,
    msg: '服务器异常'
  }
}

})


// 月接口
router.post('/monthData', async(ctx, next) => {
  console.log(ctx.request.body);
  const { month, year} = ctx.request.body
  // 去day库中找对应月份的数据

try {
  const result = await userService.findMonth( month, year)
  // console.log(result);
  if(result.length) {
    ctx.body = {
      code: '80000',
      data: result,
      msg: '查找成功'
    }
  } else {
    ctx.body = {
      code: '80000',
      data: [],
      msg: '无数据'
    }
  }
} catch (error) {
  ctx.body = {
    code: '80002',
    data: error,
    msg: '服务器异常'
  }
}

})


// 年接口
router.post('/yearData', async(ctx, next) => {
  console.log(ctx.request.body);
  const { year} = ctx.request.body
  // 去day库中找对应月份的数据

try {
  const result = await userService.findYear( year)
  // console.log(result);
  if(result.length) {
    ctx.body = {
      code: '80000',
      data: result,
      msg: '查找成功'
    }
  } else {
    ctx.body = {
      code: '80000',
      data: [],
      msg: '无数据'
    }
  }
} catch (error) {
  ctx.body = {
    code: '80002',
    data: error,
    msg: '服务器异常'
  }
}

})



module.exports = router