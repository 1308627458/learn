# 1. 盒子模型
1. 标准盒模型 
content + padding + border + margin === 宽度
width/height === content 

2. IE盒模型
(content + padding + border) + margin === 宽度
width/height ==== content + padding + border

- box-sizing 属性
context-box: W3C的标准盒模型，width/height === content 
border-box: IE传统盒模型，width/height ==== content + padding + border


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