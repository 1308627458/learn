[1,2] => [2,1]

<!-- Watcher -->
vm._update(vm._render(xxx))

vm._render() ===> 生成vnode

# 新 vnode 和 旧 vnode  (__path__ 过程)
1. 跟节点不一样， 直接销毁旧 vnode 渲染新 vnode (同层比较)
2. 节点一致， 尽量复用
3. 对children子节点进行比较
4. 如果新的vnode有children 而旧的没有 (新增)
5. 如果新的vnode没有children 而旧的有 (删除)
6. 如果新旧vnode都有children
7. diff 
  <!-- 旧的首节点 -->
  - oldStartIdx = 0
  <!-- 新的首节点 -->
  - newStartIdx = 0
  <!-- 旧的尾结点 -->
  - oldEndIdx = oldChildren.length - 1
  <!-- 新的尾结点 -->
  - oldEndIdx = newChildren.length - 1


  # 没有key 会怎么用？
  - 导致diff对其不生效，diff中的复用优化手段也失效

  # 为什么不要用index做key
  - diff判断的原本可复用的vnode会被视为不可复用，导致优化失效

 # 随机数做key?
 - 所有的节点key都会重新生成导致无节点可复用