<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { ref, onMounted, render } from 'vue';
import pic from './pic.png';
const canvasRef = ref(null)

onMounted(() => {
  const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias: true });
 

  const camera = new THREE.PerspectiveCamera(45, 2, 0.1, 1000)
  camera.position.set(0, 10, 20)
  camera.lookAt(0, 0, 0)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff)

  const box = new THREE.BoxGeometry(5, 5, 5)
  const material = new THREE.MeshPhongMaterial({ color: 0xff0000 })
  const mesh = new THREE.Mesh(box, material)

  const light = new THREE.SpotLight(0xffffff)
  light.position.set(20,50,10)
  light.castShadow = true;

  const axes = new THREE.AxesHelper(10)
  scene.add(axes)
  scene.add(light)


  const PlaneGeometry = new THREE.PlaneGeometry(60,60)
  const planeMat = new THREE.MeshLambertMaterial({color: 0xffffff})
  const plane = new THREE.Mesh(PlaneGeometry, planeMat)
  plane.position.x = -90 * Math.PI / 180
  plane.position.set(15, 0, 0)
  scene.add(plane)
  

  scene.add(mesh)
  const canvas = renderer.domElement
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.render(scene, camera)
})

</script>

<style lang="css" scoped>
canvas{
  display: block;
  width: 100vw;
  height: 100vh;
}
</style>