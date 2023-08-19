<template>
  <div ref="canvasDom"></div>
</template>

<script setup>
import * as THREE from 'three'
import { onMounted, ref } from 'vue';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';


const canvasDom = ref(null)
// 场景
const scene = new THREE.Scene()
// 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
// 镜头
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 5000)

camera.position.set(0, 50, -100)

const axesHelper = new THREE.AxesHelper( 200 );
scene.add( axesHelper );

const controls = new OrbitControls(camera, renderer.domElement)
controls.target.set(-180, 0, -180);
controls.distance = 100;
// 渲染函数

const render = () => {
  renderer.render(scene, camera)
  controls.update()
  requestAnimationFrame(render)
}


onMounted(() => {
  // 渲染
  canvasDom.value.appendChild(renderer.domElement)
  renderer.setClearColor(new THREE.Color('#000'))
  render()


  // 初始化loader 
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath('../public/draco')

  const gltfLoader = new GLTFLoader()
  gltfLoader.setDRACOLoader(dracoLoader)


  // const geometry = new THREE.PlaneGeometry(10, 10, 10, 10);
  // const material = new THREE.MeshBasicMaterial({ color: 0xfbe9ab }); // 地面的材质
  // const ground = new THREE.Mesh(geometry, material);
  // ground.rotation.x = THREE.MathUtils.degToRad(-90)
  // scene.add(ground);


  //  加载gltf模型
  // gltfLoader.load('./model/forest1.glb', (res) => {
  //   const model = res.scene;
  //   const scale = new THREE.Vector3(4,4,4)
  //   model.scale.copy(scale)
  //   const position = new THREE.Vector3(0,0.75,0)
  //   model.position.copy(position)
  //   scene.add(model);
  // })



  gltfLoader.load('./model/forest_creek.glb', (res) => {
    const model = res.scene;
    console.log(res.scene);

    const forest = gltf.scene
    forest.traverse((child) => {  // 遍历
      console.log(child);
    })


    const scale = new THREE.Vector3(0.1, 0.1, 0.1)
    model.scale.copy(scale)
  
    scene.add(model);
  })

  // 添加平行光
  const light = new THREE.DirectionalLight(0xffffff, 5);
  light.position.set(-900, 50, -200);
  const helper = new THREE.DirectionalLightHelper(light, 5);
  scene.add(helper);
  scene.add(light);




})
</script>

<style lang="css" scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
</style>