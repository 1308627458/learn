


function _const (key, value) {
  Object.defineProperty(window, key, {
    value,
    writable: false,
  });
}


var obj = {
  a: 1
}


_const('obj', obj)

obj.b = 2
obj = {}