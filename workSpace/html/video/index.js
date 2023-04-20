const bar = document.querySelector('.speed-bar')
const speed = document.querySelector('.speed')
const video = document.querySelector('.video')

speed.addEventListener('mousemove', function (e){
    // console.log(e.pageY - speed.offsetTop);
    const y = e.pageY - speed.offsetTop
    const percent = y / speed.offsetHeight
    const height = Math.round(percent * 100) + '%'
    const rate = percent * (4 -0.5) + 0.5
    bar.style.height = height
    bar.textContent = rate.toFixed(2) + 'x'
    video.playbackRate = rate
})
