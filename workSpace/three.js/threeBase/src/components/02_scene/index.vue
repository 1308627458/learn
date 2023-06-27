<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three'
import { moonOribit, earthOribit, sunOribit, pointLight } from './create-factor.js'

const canvasRef = ref(null)

onMounted(() => {
  // 场景
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111)

  // 镜头
  const camera = new THREE.PerspectiveCamera(40, 2, 0.1, 1000)
  camera.position.set(0, 30, 50)
  // camera.up.set(0, 0, 1)
  camera.lookAt(0, 0, 0)


  // 渲染器
  const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value });

  scene.add(sunOribit)
  scene.add(pointLight)

  renderer.render(scene, camera);
  const canvas = renderer.domElement
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
 
  // 坐标轴
  const axes1 = new THREE.AxesHelper(10)
  scene.add(axes1)
  const axes2 = new THREE.AxesHelper(5)
  earthOribit.add(axes2)
  const axes3 = new THREE.AxesHelper(3)
  moonOribit.add(axes3)
 
  // 旋转
  const rotate = (time) => {
    time = time * 0.001
    sunOribit.rotation.y = time
    earthOribit.rotation.y = time
    moonOribit.rotation.y = time

    renderer.render(scene, camera);
    requestAnimationFrame(rotate);
  }
  requestAnimationFrame(rotate);
})

</script>

<style lang="css" scoped>
canvas{
  display: block;
  width: 100vw;
  height: 100vh;
}
</style>