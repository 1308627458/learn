
# 图元


# 场景图
1. 场景是场景图里的一部分
2. Scene创建的普通场景，普通场景中可以添加辅助效果（雾化），所有场景都可以添加 Oject3D, Mesh

3. Object3D 创建空白空间 - 可以添加 Mesh

- 一个局部的相对空间， 就是一个场景 
- 一个空间又可能是由几个子空间组成的
- 空间合并 SceneA.add(SceneB) 

SceneB.add(lightB)
SceneC.add(lightC)

SceneA.add(SceneB)
SceneA.add(SceneC)


# 材质

1. 线段属性或物体表面的颜色，贴图，光亮程度，反光特性，从粗糙度等属性
2. 点材质，线材质，面材质，阴影材质，自定义材质
3. 

# 纹理

# connonJS
1. 3D的物理引擎(计算三维场景中力的作用)