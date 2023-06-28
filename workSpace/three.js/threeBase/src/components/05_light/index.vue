<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { onMounted, ref } from 'vue';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
const canvasRef = ref(null)

onMounted(() => {
  // 场景
  const scene = new THREE.Scene()
  const axes = new THREE.AxesHelper(100)
  scene.add(axes)
  // 镜头
  const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(20, 20, 50)

  // 渲染器
  const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, anitialias: true })

  // 镜头控制器
  const controls = new OrbitControls(camera, renderer.domElement) // 控制哪一个镜头和渲染器
  controls.addEventListener('change', () => {
    renderer.render(scene, camera)
  })
  // 物体
  const box = new THREE.BoxGeometry(10, 10, 10)
  const material = new THREE.MeshPhongMaterial({
    color: 0xd6e0eb,
    transparent: true,
    opacity:0.7
  })
  // 网格
  const mesh = new THREE.Mesh(box, material)
  scene.add(mesh)

  // 灯光
  const directionLight = new THREE.DirectionalLight(0xffffff, 1)
  directionLight.position.set(20,20,0)
  directionLight.target = mesh // (0,0,0)

  const directionLight2 = new THREE.DirectionalLight(0xffffff, 1)
  directionLight2.position.set(0,-20, 20)
  directionLight2.target = mesh // (0,0,0)

  const helper = new THREE.DirectionalLightHelper( directionLight, 1 );
  const helper2 = new THREE.DirectionalLightHelper( directionLight2, 1 );
  scene.add(helper, helper2);
  scene.add(directionLight, directionLight2);

  // 渲染
  
  const canvas = renderer.domElement
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.render(scene, camera)

  


})
</script>

<style lang="css" scoped>
canvas {
  width: 100vw;
  height: 100vh;
}
</style>