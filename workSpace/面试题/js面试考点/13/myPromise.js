

const PENING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise(fn) {
  const that = this
  that.state = PENING
  that.value = null
  that.resolvedCallbacks = []
  that.rejectedCallbacks = []
  
  function resolve(val) {
    if (that.state === PENING) {
      that.state = FULFILLED
      that.value = val
      that.resolvedCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }
  function reject(val) {
    if (that.state === PENING) {
      that.state = REJECTED
      that.value = val
      that.rejectedCallbacks.map(cb => {
        cb(that.value)
      })
    }
  }

  try {
    fn(resolve, reject)
  } catch (e) {
    reject(e)
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  const that = this
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r };

  if (that.state === PENING) {
    that.resolvedCallbacks.push(onFulfilled)
    that.rejectedCallbacks.push(onRejected)
  }

  if (that.state === FULFILLED) {
    onFulfilled(that.value)
  }
  if (that.state === REJECTED) {
    onRejected(that.value)
  }

}



// ---------------------------------------

let p = new MyPromise((resolve, reject) => {
  // throw('err')
  // reject('no')
  // resolve('ok')
  setTimeout(() => {
    console.log('hello');
    resolve('ok')
  }, 1000)
  
})

p.then(
  (res) => {
    console.log(res, '111111');
  },
  (err) => {
    console.log(err, '2222');
  }
)




