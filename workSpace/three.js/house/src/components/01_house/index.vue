<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
import * as THREE from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { ref, onMounted } from "vue";

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

  // 添加立方体
  // const box = new THREE.BoxGeometry(10, 10, 10);

  const cubeTextureLoader = new THREE.CubeTextureLoader();
  const texture = cubeTextureLoader.load([
    'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-x.jpg',
    'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-x.jpg',
    'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-y.jpg',
    'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-y.jpg',
    'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/pos-z.jpg',
    'https://threejsfundamentals.org/threejs/resources/images/cubemaps/computer-history-museum/neg-z.jpg'
  ], (texture) => {
    scene.background = texture
    handleSize(texture)
  });

  // const material = new THREE.MeshPhongMaterial({
  //   map: texture
  // })

  // const mesh = new THREE.Mesh(box, material);
  // scene.add(mesh);


  const render = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  };
  render();

})

const handleSize = (bgTexture) => {
  console.log(bgTexture);
  const imgAspect = bgTexture.image[0].width / bgTexture.image[0].height
  const canvasAspect = window.innerWidth / window.innerHeight
  const resAspect = imgAspect / canvasAspect

  bgTexture.offset.x = resAspect > 1 ? (1 - 1 / resAspect) / 2 : 0
  bgTexture.repeat.x = resAspect > 1 ?  1 / resAspect : 1 

  bgTexture.offset.y = resAspect > 1 ? 0: (1 - 1 / resAspect) / 2
  bgTexture.repeat.y = resAspect > 1 ? 1: resAspect
}

</script>

<style lang="css" scoped>
canvas {
  width: 100vw;
  height: 100vh;
}
</style>