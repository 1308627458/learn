const router = require('koa-router')()
const userService = require('../controllers/mySqlControll.js');

// 文章笔记相关的接口

router.prefix('/note')  //默认接口前缀

// 根据分类查找对应的笔记列表
router.post('/findNoteListByType', async (ctx, next) => {
  // console.log(ctx.request.body);
  const { note_type } = ctx.request.body
  // 去note库中查找所有的类型为note_type的文章

  // console.log(result);
  try {
    const result = await userService.findNoteListByType(note_type)
    ctx.body = {
      code: '80000',
      data: result,
      msg: '查找成功'
    }

  } catch (error) {
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
})

// 根据id查找对应的笔记
router.post('/findNoteDetailById', async (ctx, next) => {
  console.log(ctx.request.body);
  const { id } = ctx.request.body
  // 拿着这个id去数据库中取值
  try {
    const result = await userService.findNoteDetailById(id)
    console.log(result);
    if (result.length) {
      ctx.body = {
        code: '80000',
        data: result[0],
        msg: '查找成功'
      }
    } else {
      ctx.body = {
        code: '80004',
        data: error,
        msg: '查找失败'
      }
    }
  } catch (error){
    ctx.body = {
      code: '80002',
      data: error,
      msg: '服务器异常'
    }
  }
})

module.exports = router