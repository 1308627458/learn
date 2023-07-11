const path = require('path')

// 检查路径是否匹配
function check(rule, pathname) {
  // /test/:course/:lecture  ['/test/:course/:lecture', ':course', ':lecture']
  const paraMatched = rule.match(/:[^/]+/g) // 后端定义的路由地址是否合法
  const ruleExp = new RegExp(`${rule.replace(/\/:[^/]+/g, '\\/([^/]+)')}$`)
  // /test/123/abc
  const ruleMatched = pathname.match(ruleExp)

  if (ruleMatched) {
    const ret = {} // {course: 123, lecture: abc}
    if (paraMatched) {
      for (let i = 0; i < paraMatched.length; i++) {
        ret[paraMatched[i].slice(1)] = ruleMatched[i + 1]
      }
    }
    return ret
  }
  return null
}

// 拦截函数
function route(method, rule, aspect) {
  return async (ctx, next) => {
    const req = ctx.req
    if (!ctx.url) ctx.url = new URL(`http://${req.headers.host}${req.url}`)

    rule = rule.split(path.sep).join('/') // win 的反斜杠转换为正斜杠

    const checked = check(rule, ctx.url.pathname) // 检查路径是否匹配
    if (!ctx.route && (method === '*' || req.method === method) && !!checked) {
      ctx.route = checked
      await aspect(ctx, next)
    } else { // 前端请求的路径和后端定义的路由地址不匹配
      await next()
    }
  }
}


class Router {
  constructor(base = "") {
    this.baseURL = base
  }

  get(rule, aspect) {
    return route('GET', path.join(this.baseURL, rule), aspect)
  }

  post(rule, aspect) {
    return route('POST', path.join(this.baseURL, rule), aspect)
  }

  put(rule, aspect) {
    return route('PUT', path.join(this.baseURL, rule), aspect)
  }

  delete(rule, aspect) {
    return route('DELETE', path.join(this.baseURL, rule), aspect)
  }

  all(rule, aspect) {
    return route('*', path.join(this.baseURL, rule), aspect)
  }

}

module.exports = Router;