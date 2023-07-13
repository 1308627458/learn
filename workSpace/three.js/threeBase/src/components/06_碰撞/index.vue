<template>
  <div class="canvas" ref="canvasRef"></div>
</template>

<script setup>
import * as THREE from 'three'
import { ref, onMounted } from 'vue';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as CANNON from 'cannon-es'

const canvasRef = ref(null)

// 渲染器
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)

// 场景
const scene = new THREE.Scene()
const axes = new THREE.AxesHelper(100)
scene.add(axes)

// 镜头
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
const orbit = new OrbitControls(camera, renderer.domElement)
camera.position.set(0, 20, 30)
camera.lookAt(0, 0, 0)
orbit.update()

onMounted(() => {
  canvasRef.value.appendChild(renderer.domElement)
  renderer.setAnimationLoop(animate) // 开启循环渲染

  // 地面
  const groundGeo = new THREE.PlaneGeometry(30, 30)
  const groundMat = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    side: THREE.DoubleSide, // 两面可见
    wireframe: true,
  })
  const groundMesh = new THREE.Mesh(groundGeo, groundMat)
  // groundMesh.rotation.x = THREE.MathUtils.degToRad(-90)
  scene.add(groundMesh)


  // 立方体
  const boxGeo = new THREE.BoxGeometry(2, 2, 2)
  const boxMat = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true})
  const boxMesh = new THREE.Mesh(boxGeo, boxMat)
  scene.add(boxMesh)

  // 球体
  const sphereGeo = new THREE.SphereGeometry(2)
  const sphereMat = new THREE.MeshBasicMaterial({
    color: 0xff0000, 
    wireframe: true
  })
  const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat)
  scene.add(sphereMesh)



  // -----------------------------------------------
  // CANNON  灵魂
  const world = new CANNON.World({ // 物理世界
    gravity: new CANNON.Vec3(0, -9.81, 0) // y轴重力向量
  })
  // 地面的灵魂
  const groundPhyMat = new CANNON.Material()  // 地面的物理材质对象
  const groundBody = new CANNON.Body({
    shape: new CANNON.Box(new CANNON.Vec3(15, 15, 0.1)),
    type: CANNON.Body.STATIC, // 静态的灵魂体
    material: groundPhyMat
  })
  world.addBody(groundBody)
  groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)

  // 立方体的灵魂
  const boxPhyMat = new CANNON.Material()
  const boxBody = new CANNON.Body({
    mass: 1, // 质量
    shape: new CANNON.Box(new CANNON.Vec3(1, 1, 1)),
    position: new CANNON.Vec3(1, 20, 0),
    material: boxPhyMat
  })
  world.addBody(boxBody)
  boxBody.angularVelocity.set(0, 10, 0) // 初始角速度
  boxBody.angularDamping = 0.5 // 阻尼

  const groundBoxContactMat = new CANNON.ContactMaterial(
    groundPhyMat,
    boxPhyMat,
    { friction: 0.04 }, // 摩擦力
  )
  world.addContactMaterial(groundBoxContactMat)


  // 球体的灵魂
  const spherePhyMat = new CANNON.Material()
  const sphereBody = new CANNON.Body({
    mass: 4, // 质量
    shape: new CANNON.Sphere(2),
    position: new CANNON.Vec3(0, 10, 0),
    material: spherePhyMat
  })
  world.addBody(sphereBody)
  sphereBody.linearDamping = 0.21
  const groundSphereContactMat = new CANNON.ContactMaterial(
    groundBody,
    sphereBody,
    { restitution: 0.9 }
  )
  world.addContactMaterial(groundSphereContactMat)


  // ----------------------------------------------------------------



  // 循环渲染
  const timeStep = 1 / 60 // 物理世界中的时间步长
  function animate() {
    world.step(timeStep)

    groundMesh.position.copy(groundBody.position) // 地面的灵魂带动了地面这个肉地在运动
    groundMesh.quaternion.copy(groundBody.quaternion)

    boxMesh.position.copy(boxBody.position)
    boxMesh.quaternion.copy(boxBody.quaternion)

    sphereMesh.position.copy(sphereBody.position)
    sphereMesh.quaternion.copy(sphereBody.quaternion)

    renderer.render(scene, camera)
  }

})


</script>

<style lang="css" scoped>
.canvas{
  width: 100vw;
  height: 100vh;
}
</style>