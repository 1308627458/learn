// 拦截器

class Interceptor{
  constructor() {
    this.aspects = []; // 存储拦截切面函数
  }

  use(/* async */ functor) { // 注册拦截切面
    this.aspects.push(functor)
    return this
  }

  async run(context) { // 执行拦截切面
    const aspects = this.aspects  // 很多个切面函数

    // 以一个洋葱模型来执行拦截切面
    const proc = aspects.reduceRight(function(a,b) {
      return async() => {
        await b(context, a)
      }
    },() => Promise.resolve());

    try{
     await proc() // 从外到内的执行洋葱模型
    } catch(err) {
      console.log(err.message);
    }

    return context
  }

}

module.exports = Interceptor