class EventEmitter {
  constructor() {
    this.events = new Map()
  }
  on (type , fn) {
    if(!this.events.get(type)) {
      this.events.set(type, fn)
    } else {
      this.events.get(type).push(fn) // 同一事件多人订阅
    }

  }

  emit(type, ...args) {
    const handles = this.events.get(type)  
    handles.forEach(fn => {
      fn.apply(this, args)
    });
  }
}

const emits = new EventEmitter();

emits.on('sell', () => {// 订阅房子开售
  console.log('老罗来买房子了');
})

emits.on('sell', () => {// 订阅房子开售
  console.log('老宋来买房子了');
})

emits.on('sellcarplace', () => {// 订阅房子开售
  console.log('我来买停车位了');
})


// emits.emit('sell') // 发布sell 房子开售 事件