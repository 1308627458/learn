let arr =  [1,2,3]

if(Array.isArray(arr)) {
    console.log('这是一个数组');
}


Array.myIsArray = function(o) {
  return Object.prototype.toString.call(o) === '[object Array]';
}