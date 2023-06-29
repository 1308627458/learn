<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { ref, onMounted } from "vue";
import liveL from './imgs/living/4_l.jpg';
import liveR from './imgs/living/4_r.jpg';
import liveU from './imgs/living/4_u.jpg';
import liveD from './imgs/living/4_d.jpg';
import liveB from './imgs/living/4_b.jpg';
import liveF from './imgs/living/4_f.jpg';

const canvasRef = ref(null);

onMounted(() => {
  // 场景
  const scene = new THREE.Scene();
  // 相机
  const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  // 设置相机位置
  camera.position.z = 0.1;
  const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.value, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const axesHelper = new THREE.AxesHelper(15);
  scene.add(axesHelper);

  // 控制器
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;

  
  
  // 物体
  // const geometry = new THREE.BoxGeometry(10,10,10)
  // const Arr = [liveL, liveR, liveU, liveD, liveB, liveF]
  // const boxMaterial = []
  // Arr.forEach(item => {
  //   let texture = new THREE.TextureLoader().load(item)
  //   if(item === liveU || item === liveD) {
  //     texture.rotation = Math.PI
  //     texture.center = new THREE.Vector2(0.5, 0.5)
  //   }
    
  //   let material = new THREE.MeshBasicMaterial({
  //     map: texture,
  //     side: THREE.BackSide, // 背面可见
  //   })
  //   boxMaterial.push(material)
  // })
  // const mesh = new THREE.Mesh(geometry, boxMaterial)
  // scene.add(mesh)

  const geometry = new THREE.SphereGeometry(5,32,32)
  const loader = new RGBELoader()
  loader.load('src/components/03_house/imgs/hdr/Living.hdr', (texture) => {
    const material = new THREE.MeshBasicMaterial({map: texture})
    const mesh = new THREE.Mesh(geometry, material)
    mesh.geometry.scale(1,1,-1) // 背面可见
    scene.add(mesh)
  })  











  const render = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();

})


</script>

<style lang="css" scoped>
canvas {
  width: 100vw;
  height: 100vh;
}
</style>