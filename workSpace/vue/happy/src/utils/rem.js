(function (doc) {
let docEl = doc.documentElement
doc.addEventListener('DOMContentLoaded', () => {
  let clientWidth = docEl.clientWidth
  docEl.style.fontSize = 20 * (clientWidth / 320) + 'px'
})
})(document)