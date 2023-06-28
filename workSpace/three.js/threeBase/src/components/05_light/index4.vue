<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three'
import { onMounted, ref } from 'vue';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RectAreaLightHelper } from 'three/addons/helpers/RectAreaLightHelper.js';
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
  const material = new THREE.MeshPhysicalMaterial({
    color: 0xffc0cb,
    transparent: true,
    opacity:1
  })
  // 网格
  const mesh = new THREE.Mesh(box, material)
  mesh.castShadow = true //  让模型可以产生阴影
  scene.add(mesh)

  // 灯光
  const light = new THREE.DirectionalLight(0xffffff, 1)
  light.castShadow = true //  开启光源阴影的计算功能
  light.position.set(20,20,20)
  const lightHelper = new THREE.DirectionalLightHelper(light)
  scene.add(lightHelper)
  scene.add(light)
  // 展示阴影的平面
  const plane = new THREE.PlaneGeometry(50,50)
 
  
  const planeMaterial = new THREE.ShadowMaterial({
    color:0x000000, // 阴影的颜色
    transparent: false,
    
  })
  plane.rotateX( - Math.PI / 2 );
  const planeMesh = new THREE.Mesh(plane, planeMaterial)
  planeMesh.position.y = -5
  planeMesh.receiveShadow = true;
  scene.add(planeMesh)

  
    
  // scene.add( AmbientLight );

  // 渲染
  
  const canvas = renderer.domElement
  renderer.setSize(canvas.clientWidth, canvas.clientHeight)
  renderer.shadowMap.enabled = true // 渲染器能渲染阴影
  renderer.render(scene, camera)
  
  


})
</script>

<style lang="css" scoped>
canvas {
  width: 100vw;
  height: 100vh;
}
</style>