<template>
  <div class="home">

    <div class="canvas-container" ref="canvasDom"></div>

    <div class="home-content">
      <div class="home-content-title">
        <h1>汽车展示和选配</h1>
      </div>
      <h2>选择车身颜色</h2>
      <div class="select">
        <div @click="selectColor(index)" class="select-item" v-for="(item, index) in colors" :key="index">
          <div class="select-item-color" :style="{ backgroundColor: item }"></div>
        </div>
      </div>
      <h2>选择贴膜材质</h2>
      <div class="select">
        <div class="select-item" v-for="(item, index) in materials" :key="index">
          <div class="select-item-text">{{ item.name }}</div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import * as THREE from 'three'
import { ref, onMounted } from 'vue'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const colors = ['red', 'green', 'yellow', 'blue', 'pink', 'purple', 'gray', 'orange']
const materials = [
  { name: '磨砂', value: 1 },
  { name: '冰晶', value: 0 },
]

// 车身各部位的材质
const wheelsMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xff0000,
  metalness: 1,
  roughness: 0.1
})
const bodyMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xff0000,
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1, // 清漆
  clearcoatRoughness: 0
})
const frontMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xff0000,
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1, // 清漆
  clearcoatRoughness: 0
})
const hoodMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xff0000,
  metalness: 1,
  roughness: 0.5,
  clearcoat: 1, // 清漆
  clearcoatRoughness: 0
})
const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0,
  roughness: 0,
  transparent: true,
  transmission: 1
})



const canvasDom = ref(null)
// 场景
const scene = new THREE.Scene()
// 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
// 镜头
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.set(0, 2, 6)
const controls = new OrbitControls(camera, renderer.domElement)
// 渲染函数
const render = () => {
  renderer.render(scene, camera)
  controls.update()
  requestAnimationFrame(render)
}


onMounted(() => {
  // 渲染
  canvasDom.value.appendChild(renderer.domElement)
  renderer.setClearColor(new THREE.Color('#fff'))
  render()

  // 网格地面
  const gridHelper = new THREE.GridHelper(10, 10)
  gridHelper.material.transparent = true
  gridHelper.material.opacity = 0.5
  scene.add(gridHelper)

  // 加载gltf模型
  const loader = new GLTFLoader()
  const dracoLoader = new DRACOLoader()
  dracoLoader.setDecoderPath('./draco/gltf/')
  dracoLoader.preload()
  loader.setDRACOLoader(dracoLoader)
  loader.load('./model/bmw01.glb', (gltf) => {
    console.log(gltf.scene);
    const bmw = gltf.scene
    bmw.traverse((child) => { // 遍历整个模型组
      console.log(child);
      if (child.isMesh && child.name.includes('轮毂')) {
        child.material = wheelsMaterial
      }
      if (child.isMesh && child.name.includes('Mesh002')) { // 车身
        child.material = bodyMaterial
      }
      if (child.isMesh && child.name.includes('前脸')) {
        child.material = frontMaterial
      }
      if (child.isMesh && child.name.includes('引擎盖_1')) {
        child.material = hoodMaterial
      }
      if (child.isMesh && child.name.includes('挡风玻璃')) {
        child.material = glassMaterial
      }
    })
    scene.add(bmw) // 整个模型组添加到场景中
  })



})


// 灯光
const light1 = new THREE.DirectionalLight(0xffffff, 1)
light1.position.set(0, 0, 10)
scene.add(light1)
const light2 = new THREE.DirectionalLight(0xffffff, 1);
light2.position.set(0, 0, -10);
scene.add(light2);
const light3 = new THREE.DirectionalLight(0xffffff, 1);
light3.position.set(10, 0, 0);
scene.add(light3);
const light4 = new THREE.DirectionalLight(0xffffff, 1);
light4.position.set(-10, 0, 0);
scene.add(light4);
const light5 = new THREE.DirectionalLight(0xffffff, 1);
light5.position.set(0, 10, 0);
scene.add(light5);
const light6 = new THREE.DirectionalLight(0xffffff, 0.3);
light6.position.set(5, 10, 0);
scene.add(light6);
const light7 = new THREE.DirectionalLight(0xffffff, 0.3);
light7.position.set(0, 10, 5);
scene.add(light7);
const light8 = new THREE.DirectionalLight(0xffffff, 0.3);
light8.position.set(0, 10, -5);
scene.add(light8);
const light9 = new THREE.DirectionalLight(0xffffff, 0.3);
light9.position.set(-5, 10, 0);
scene.add(light9);



const selectColor = (index) => {
  wheelsMaterial.color.set(colors[index])
  bodyMaterial.color.set(colors[index])
  frontMaterial.color.set(colors[index])
  hoodMaterial.color.set(colors[index])
}
</script>

<style lang="css" scoped>
.home-content {
  position: fixed;
  top: 0;
  right: 20px;
}

.select-item-color {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  margin: 10px;
  display: inline-block;
  cursor: pointer;
  border-radius: 50%;
}

.select-item-text {
  margin: 10px;
  cursor: pointer;
  border: 1px solid #ccc;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: aqua;
  font-size: 18px;
}

.select {
  display: flex;
}
</style>