<template>
  <div class="scenes" ref="canvasDom" style="
  position: fixed; 
  left: 0;
  top: 0;
  z-index: 10;
  pointer-events: none;
  transition: all 1s;
  " :style="{
    transform: `translate3d(0,${-index * 100}vh, 0)`
  }">
    <div v-for="item in scenes" class="text" style="width: 100vw; height: 100vh; ">
      <h1 style="padding: 20px 20px; font-size: 50px color: #fff;;">{{item.text}}</h1>
    </div>
  </div>
</template>

<script setup>
import * as THREE from 'three'
import gsap from 'gsap'
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

camera.position.set(50, 50, -100)
camera.lookAt(-900, 50, -150)

// const axesHelper = new THREE.AxesHelper(200);
// scene.add(axesHelper);

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


  // 加载glb模型
  gltfLoader.load('./model/forest_creek.glb', (res) => {
    const model = res.scene;
    // console.log(res.scene);

    const scale = new THREE.Vector3(0.1, 0.1, 0.1)
    model.scale.copy(scale)
    scene.add(model);

  })

  // 添加平行光
  const light = new THREE.DirectionalLight(0xffffff, 5);
  light.position.set(-900, 50, -200);
  // const helper = new THREE.DirectionalLightHelper(light, 5);
  // scene.add(helper);
  scene.add(light);


  // 使用补间动画移动相机
  let timeLine1 = gsap.timeline()
  let timeLine2 = gsap.timeline()


  // 定义相机移动函数

  function translateCamera(position, target) {
    timeLine1.to(camera.position, {
      x: position.x,
      y: position.y,
      z: position.z,
      duration: 1,
      ease: "power2.inOut"
    });

    timeLine2.to(controls.target, {
      x: target.x,
      y: target.y,
      z: target.z,
      duration: 1,
      ease: "power2.inOut"
    });
  }

  let scenes = [
   
    {
      text: '欢迎来到森林',
      callback: () => {
        translateCamera(
          new THREE.Vector3(30, 275, -120),
          new THREE.Vector3(-130, 130, -165)
        )
      }
    },
    {
      text: '愿与你探寻世界的每一个角落',
      callback: () => {
        translateCamera(
          new THREE.Vector3(-300, 150, 300),
          new THREE.Vector3(-320, 50, -250)
        )
      }
    },
    {
      text: '感谢在这么大的世界里遇到了你',
      callback: () => {
        translateCamera(
          new THREE.Vector3(-300, 40, -130),
          new THREE.Vector3(-800, 150, -150)
        )
      }
    },
    {
      text: '继续加油让森林变得更好',
      callback: () => {
        translateCamera(
          new THREE.Vector3(0, 200, -520),
          new THREE.Vector3(-500, 70, -180)
        )
      }
    },

  ]



  let index = ref(0)
  let isAnimate = false;
  // 监听鼠标的滚轮事件
  window.addEventListener('wheel', (e) => {
    if (isAnimate) return
    isAnimate = true
    if (e.deltaY > 0) {
      index.value++
      if (index.value > scenes.length - 1) {
        index.value = 0
      }
    }
    scenes[index.value].callback();
    setTimeout(() => {
      isAnimate = false;
    }, 1000)

  },
    false
  )


})


</script>

<style lang="less" scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}


</style>