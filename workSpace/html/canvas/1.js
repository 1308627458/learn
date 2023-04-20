function RoundItem(index, x, y, ctx) { // 构造函数
    this.index = index
    this.x = x
    this.y = y
    this.ctx = ctx
    this.r = Math.random() * 2 + 1
    this.color = 'rgba(255,255,255,1)'

}

RoundItem.prototype.draw = function () {
    // 绘制
    this.ctx.fillStyle = this.color
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
    this.ctx.closePath()
    this.ctx.fill()
}