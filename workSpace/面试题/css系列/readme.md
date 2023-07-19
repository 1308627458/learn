# 1. 盒子模型
1. 标准盒模型 
content + padding + border + margin === 宽度
width & height === content 

2. IE盒模型
(content + padding + border) + margin === 宽度
width & height ==== content + padding + border

- box-sizing 属性
context-box: W3C的标准盒模型，width & height === content 
border-box: IE传统盒模型，width & height ==== content + padding + border


# 2. css 选择器有哪些？优先级？css中可以继承的属性有哪些？

CSS选择符: 
1. id选择器(#id) 
2. 类选择器(.class)
3. 标签选择器(div)
4. 群组选择器(div, p)
5. 后代选择器(#box div)
6. 子选择器(.one > .one_1)
7. 相邻选择器(li + p)
8. 伪类选择器(a:hover, li:nth-child) 
9. 伪元素选择器(a::after)
10. 属性选择器(input[name="account"])
11. 通配符选择器(*)

优先级(就近原则): ！important > 行内样式 > [id > class > tag] > 通配符 > 继承 > 浏览器默认属性

可继承属性： 
1. 字体系列属性 例如：font-size, font-family
2. 文本系列属性 例如：color line-height
2. 表格布局属性 


# 3. 说说em/px/rem/vh/vw
em, rem, vh, vw 都是相对单位，em 相对于父容器的字体大小，rem相对于页面根字体大小(html) ,vw, vh相对于视窗的大小 px是绝对单位, 是以屏幕的物理发光点为准

# 4. 说说设备像素， css像素， 设备独立像素，dpr，ppi 之间的区别？
1. css像素:1px === 1设备独立像素 
2. 设备像素(物理像素) (pt)
3. 设备的独立像素 (分辨率) 
4. device pixel ratio (dpr)  设备像素 / 设备独立像素
5. pixel per inch 像素的密度

# 5. css 中有哪些可以隐藏页面的元素的属性？它们之间有什么区别

1. display:none                    脱离文档流不占空间  不能响应事件  无交互        
2. visibility:hidden               占用空间           不能响应事件   无交互
3. opacity:0                       占用空间           能响应事件  有交互
4. position:absolute top:-9999px   绝对定位脱离文档流，相对定位占用空间  不能响应事件  无交互
5. clip-path:circle(0%)            占用空间           不能响应事件  无交互

- 是否触发重排和重绘
触发重排: display
触发重绘: display, visibility, opacity

# 6. 谈谈你对BFC的理解?
- 解释是什么? 
BFC 全称叫做块级格式化上下文(Block Fromatting Context )。它的目的是形成一个完全独立的空间(布局环境)，让内部空间里的子元素不会影响到外面的布局。
BFC内的相邻容器之间的margin不会重叠，BFC容器的高度计算会将浮动元素的高度也计算在内
- 怎么触发
1. overflow除了 visible 以外的值(hidden,auto,scroll)
2. display 为 inline-xxx table, flex, grid
3. position(absolute, fixed) 
4. float 除none 以外的值
- 应用场景
1. 防止magin重叠
2. 清除浮动

# 7. 水平垂直居中
- 已知容器宽高: magin, transform, position + 负margin
- 未知容器宽高: flex, position + transform, grid(+place-items:center;兼容性不如flex), table-cell (display:table-cell;vertical-align:middle;text-align:center) + display:inline-block 

# 8. 两栏布局，右侧自适应？ 三栏布局，中间自适应？
  两栏: 
    1.固定宽度 + float 
    2.flex布局
  三栏: 
    1.左右浮动 + 中间BFC/magin (左右中) (content最后加载)
    2.左右定位 + 中间magin
    3.flex(左中右) (content没有最先加载)
    4.table        (content没有最先加载)
    5.grid         (content没有最先加载)
    6.float + 负magin (双飞翼布局) 最优雅

# 9. 说说flexbox
- 是什么 
  我们称之为弹性布局，是一种可以简便，完整，响应式的实现各种页面布局的方式，采用了 flex 布局的容器，子元素会自动去到同一行，容器中存在弹性主轴和交叉轴的概念，默认主轴方向是x轴方向，也能通过flex-direction修改主轴方向
- 属性
  1. 写在父容器上的属性:
  flex-direction
  flex-wrap
  (flex-flow: row wrap)

  justify-content
  align-items

  align-content 多条轴对其方式
  2. 写在子容器上的属性:
  flex-grow  如果有剩余空间，是否扩大 0为不扩大
  flex-shrink  如果有剩余空间，是否缩小 1为缩小
  flex-basis  项目本身的大小，默认auto

  flex: 0 0 200px
- 应用场景
1. 实现多栏布局
2. 水平垂直居中

# 10. 说说grid布局
- 是什么？
  是一个二维的布局方式， 由纵横相交的网格线形成的框架性布局结构，能同时处理行和列，擅长将一个页面划分成几个区域以及定义这些区域的大小，位置，层次的关系

- 属性
 grid-template-columns: 100px 100px 100px ;   控制行和列
 grid-template-rows:100px 100px 100px ;

 grid-auto-flow: column;       控制排列的顺序，    1，2 3   or   1
 grid-gap: 5px;                单元格之间的间隙                  2
                                                                3 
 start center end 
 justify-items: start;         每个单元格的水平对齐方式 
 align-items: center;          每个单元格的垂直对齐方式 
 place-items: center; 

 justify-content: center;      整个内容区域在容器中水平方向的对齐方式 
 align-content: center;        整个内容区域在容器中垂直方向的对齐方式 
 place-content: center; 

- 应用场景
1. 实现多栏布局
2. 水平垂直居中


# 11. CSS3 新增了哪些新特性？
  1. 选择器: a[src$=".pdf"]  ...
  2. 属性: border radius, box-shadow, border-image, transform, transition, animation, 颜色渐变

# 12. CSS常见的动画实现有哪些？
  1. transition  过渡动画
  2. transform 转变动画
  3. animation 自定义动画

 
# 13. 聊聊回流和重绘
   - 是什么
      - 回流是指浏览器在加载页面过程中，需要对每个盒子进行布局计算这个过程
      - 重绘是指浏览器在加载页面过程中，对已经计算好布局的盒子进行GPU绘制的过程

   - 如何触发
     回流: 
     1. 页面存在容器的几何属性发送变化
     2. 页面初次刷新
     3. 视窗大小变化
     4. 所有的offsetxxx, scrollxxx, clientxxx     会强制执行队列触发回流
     5. 添加/删除可见的DOM元素
     重绘:
     1. 元素的非几何属性变化: color, background, text-decoration, box-shadow, 

   - 浏览器的优化策略
      大多数浏览器都会通过维护一个任务队列来存放需要回流的操作，一段时间之后，或者队列到达阈值，才会一次性执行所有的回流，这样做的目的是为了尽可能的减少页面的回流次数，提升页面渲染效率，但是 offsetxxx 会强制执行队列

   - 如何减少
      1. 让动画元素脱离文档流
      2. 尽量减少 js 操作元素的 css
      3. 当页面需要循环添加元素的时候，可以使用虚拟文档片段
      4. 尽量减少offsetxxx的使用
      5. 将 DOM 离线: 当对 DOM 节点有较大改动的时候,需要频繁操作DOM 修改style，我们将元素设置成 display:none 临时将此节点从文档流中脱离，然后 display:block 再恢复 

# 14. 什么是响应式布局？ 基本原理是什么？
  - 页面布局根据用户的设备环境的变化进行相应的调整

  - 实现方式:
    1. 媒体 查询
    2. rem + 媒体查询
    3. rem + flexible
    4. %
    5. vw/vh
  
#  15. 如何实现视差滚动
   1. background-attachment (固定背景图的位置)
   2. perspective (让视角变成3D效果，从而实现近大远小， 距离眼镜越近看起来会滚动的越快)
  
# 16. 如果要做优化， css上能做些什么？
  1. 使用合理的选择器
  2. 异步加载css
      js控制
      (rel="alternate" onload="this.rel = 'stylesheet")
      (media="noeixs" onload="this.media ='screen'")
  3. css压缩
  4. 不要使用@import() 引入css 而是用link标签

# 17. 如何实现单行，多行文本溢出的省略
    1. 单行省略
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    
    2. 多行省略
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

# 18. 如何画一个三角形

# 19. 让Chrome支持小于12px的文字怎么实现？
    1. transform: scale();
    2. zoom: 0.5;
    3. 
    

# 20. 说说你对css预编语言的理解？
  - 是什么
    是一种css 的一种扩展语言，主要增加了变量，混合，函数等功能，使css 更易维护

  - 有哪些
    sass

    less
    
    stylus