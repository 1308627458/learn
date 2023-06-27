<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { ref, onMounted } from 'vue';

const canvasRef = ref(null)

onMounted(() => {
  const scene = new THREE.Scene()
  // scene.background = new THREE.Color(0xffffff)
  const camera = new THREE.PerspectiveCamera(40, 2, 0.1, 1000)
  camera.position.set(20, 0, 100)
  camera.lookAt(0, 0, 0)
  const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias: true })

  const geometry = new THREE.SphereGeometry(10, 8, 8)

  // 点材质
  // const material = new THREE.PointsMaterial({ color: 0x0000ff, size: 1 })
  // const point = new THREE.Points(geometry, material)
  // scene.add(point)

  // 线材质
  // const material = new THREE.LineBasicMaterial({ color: 0x000000 })
  // const line = new THREE.Line(geometry, material)
  // scene.add(line)

  // 面材质
  // const material = new THREE.MeshBasicMaterial({ color: 0xFF0000 })
  // const material = new THREE.MeshDepthMaterial()
  const material = new THREE.MeshPhongMaterial({ color: 0xFF0000, emissive: 0xFF0000 })

  const mesh = new THREE.Mesh(geometry, material)
  const light = new THREE.PointLight(0xffffff, 10)
  const axes = new THREE.AxesHelper(50)
  const axes2 = new THREE.AxesHelper(50)
  light.position.set(10, 10, 0)
  light.add(axes2)

  scene.add(mesh, light)
  scene.add(axes)

  // 渲染
  const canvas = renderer.domElement
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.setClearColor(0xb9d3ff, 1)
  renderer.render(scene, camera)
})
</script>

<style lang="css" scoped>
canvas {
  display: block;
  width: 100vw;
  height: 100vh;
}
</style>