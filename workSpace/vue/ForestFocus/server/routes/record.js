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
  console.log(firstDay, lastDay, month, year);
try {
  const result = await userService.findWeek(firstDay, lastDay, month, year)
  console.log(result);
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

// 上传hour记录接口
router.post('/hourRecord', async(ctx, next) => {
  console.log(ctx.request.body);
  const {time, hour, fromDay, fromMonth, fromYear} = ctx.request.body

  try {
    const findHourRes = await userService.hourFind(hour,fromDay, fromMonth, fromYear)
    if(findHourRes.length) {
      await userService.updateHourRecord(time,hour, fromDay, fromMonth, fromYear)
      .then(res => {
        if (res.affectedRows !== 0) {
          ctx.body = {
            code: '80000',
            data: 'ok',
            msg: '更新成功'
          }
        } else {
          ctx.body = {
            code: '80004',
            data: 'error',
            msg: '更新失败'
          }
        }
      })
      .catch(err => {
        ctx.body = {
          code: '80002',
          data: err,
          msg: '服务器异常'
        }
      })
    } else{

     await userService.hourRecord([time, hour, fromDay, fromMonth, fromYear])
     
     .then(res => {
       if (res.affectedRows !== 0) {
         ctx.body = {
           code: '80000',
           data: 'ok',
           msg: '上传成功'
         }
       } else {
         ctx.body = {
           code: '80004',
           data: 'error',
           msg: '上传失败'
         }
       }
     })
     .catch(err => {
       ctx.body = {
         code: '80002',
         data: err,
         msg: '服务器异常'
       }
     })
   }
}
   catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
})

// 上传day记录接口
router.post('/dayRecord', async(ctx, next) => {
  console.log(ctx.request.body);
  const {time, day, fromMonth, fromYear} = ctx.request.body

  try {

    const findDayRes = await userService.dayFind(day, fromMonth, fromYear)
    if(findDayRes.length) {
      await userService.updateDayRecord(time, day, fromMonth, fromYear)
      .then(res => {
        if (res.affectedRows !== 0) {
          ctx.body = {
            code: '80000',
            data: 'ok',
            msg: '更新成功'
          }
        } else {
          ctx.body = {
            code: '80004',
            data: 'error',
            msg: '更新失败'
          }
        }
      })
      .catch(err => {
        ctx.body = {
          code: '80002',
          data: err,
          msg: '服务器异常'
        }
      })
    }else {
     await userService.dayRecord([time, day, fromMonth, fromYear])
     
     .then(res => {
       if (res.affectedRows !== 0) {
         ctx.body = {
           code: '80000',
           data: 'ok',
           msg: '上传成功'
         }
       } else {
         ctx.body = {
           code: '80004',
           data: 'error',
           msg: '上传失败'
         }
       }
     })
     .catch(err => {
       ctx.body = {
         code: '80002',
         data: err,
         msg: '服务器异常'
       }
     })
   }
}
   catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
})

// 上传month记录接口
router.post('/monthRecord', async(ctx, next) => {
  console.log(ctx.request.body);
  const {time, month,  fromYear} = ctx.request.body

  try {
    const findMonthRes = await userService.monthFind(month, fromYear)
    if(findMonthRes.length) {
      await userService.updateMonthRecord(time, month, fromYear)
      .then(res => {
        if (res.affectedRows !== 0) {
          ctx.body = {
            code: '80000',
            data: 'ok',
            msg: '更新成功'
          }
        } else {
          ctx.body = {
            code: '80004',
            data: 'error',
            msg: '更新失败'
          }
        }
      })
      .catch(err => {
        ctx.body = {
          code: '80002',
          data: err,
          msg: '服务器异常'
        }
      })
    } else {
     await userService.monthRecord([time, month, fromYear])
     
     .then(res => {
       if (res.affectedRows !== 0) {
         ctx.body = {
           code: '80000',
           data: 'ok',
           msg: '上传成功'
         }
       } else {
         ctx.body = {
           code: '80004',
           data: 'error',
           msg: '上传失败'
         }
       }
     })
     .catch(err => {
       ctx.body = {
         code: '80002',
         data: err,
         msg: '服务器异常'
       }
     })
   }
}
   catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
})

module.exports = router