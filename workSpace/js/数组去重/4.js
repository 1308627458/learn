let arr = [1, 1, 'a', 'A', 2, 2, '3', '4']

function unique(array, isSorted, iteratee) {
  let res = []
  let seen = []

  for (let i = 0, len = array.length; i < len; i++) {
    let value = array[i]

    let computed = iteratee ? iteratee(value, i, array) : value

    if (isSorted) {
      if (!i || seen !== computed) {
        res.push(value)
      }
      seen = computed
    } else if (iteratee) {
      if (seen.indexOf(computed) === -1) {
        res.push(value)
        seen.push(computed)
      }
    } else if (res.indexOf(value) === -1) {
      res.push(value)
    }
  }

  return res
}


let ult = unique(arr, false, function(item, index, arr) {
  return typeof item == 'string' ? item.toLowerCase() : item
})

console.log(ult);