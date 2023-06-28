<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { onMounted, ref } from 'vue';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// import earthPic from './img/earth.jpeg'
import Pic1 from './img/1.png'
import Pic2 from './img/2.png'
import Pic3 from './img/3.png'
import Pic4 from './img/4.png'
import Pic5 from './img/5.png'
import Pic6 from './img/6.png'
const canvasRef = ref(null)

onMounted(() => {
  // 场景
  const scene = new THREE.Scene()
  // 镜头6
  const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(10, 10, 50)
  camera.lookAt(0, 0, 0)

  // 渲染器
  const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias: true })

  // 镜头控制器
  const controls = new OrbitControls(camera, renderer.domElement)
  // controls.addEventListener('change', () => {
  //   console.log(camera.position);
  //   renderer.render(scene, camera)
  // })
  
  // 物体&材质
  const box = new THREE.BoxGeometry(5, 5, 5)
 // 加载皮肤
  const texLoader = new THREE.TextureLoader()

  const PicArr = [Pic1,Pic6,Pic2,Pic5,Pic3,Pic4]
  const materialArr = [] // 一组材质

  PicArr.forEach(src => {
    materialArr.push(new THREE.MeshBasicMaterial({
      color:0xffffff,
      map: texLoader.load(src)
    }))
  })
 
  // const texture = texLoader.load(PicArr)

  // const material = new THREE.MeshBasicMaterial({
  //   color:0xffffff,
  //   transparent: true, // 允许设置透明
  //   opacity: 1,
  //   map: texture
  // })

  const mesh = new THREE.Mesh(box, materialArr)
  // *添加进场景
  scene.add(mesh)
  // 坐标系
  const axes = new THREE.AxesHelper(100)
  scene.add(axes)
  // *渲染
  const canvas = renderer.domElement
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
 
  renderer.setClearColor(0xfff1f1, 1)
  function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }
  render();


}) 





</script>

<style lang="css" scoped>
canvas {
  width: 100vw;
  height: 100vh;
}
</style>