const { ipcMain } = require('electron')

class ProcessMessage {
  constructor(win) {
    this.win = win
  }

  init() {
    this.watch()
    this.on()
  }
  watch() { // 监听渲染进程
    ipcMain.on('page-ready', () => {
      this.sendFocus(true)
    })
  }
  on() { // 监听窗口， app, 模块的事件
    this.win.on('focus', () => {
      this.sendFocus(true)
    })
    this.win.on('blur', () => {
      this.sendFocus(false)
    })
  }
  sendFocus(isActive) { // 往窗口里面加载页面
    this.win.webContents.send('win-focus', isActive)
  }

}

module.exports = ProcessMessage