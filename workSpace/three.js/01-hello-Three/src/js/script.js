import * as THREE from 'three'

// 创建场景
const scence = new THREE.Scene();
// 创建渲染器
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('canvas') });
// 创建摄像机
const camear = new THREE.PerspectiveCamera(75, 2, 0.1, 5)

// 创建几何体
const geometry = new THREE.BoxGeometry(1, 1, 1)

// 创建材质
const material1 = new THREE.MeshPhongMaterial({ color: 0x44aa88 })
const material2 = new THREE.MeshPhongMaterial({ color: 0xc50d0d })
const material3 = new THREE.MeshPhongMaterial({ color: 0x4c6ab8 })

// 创建网格
const cube1 = new THREE.Mesh(geometry, material1)
cube1.position.x = -2
const cube2 = new THREE.Mesh(geometry, material2)
cube2.position.x = 0
const cube3 = new THREE.Mesh(geometry, material3)
cube3.position.x = 2
scence.add(cube1)
scence.add(cube2)
scence.add(cube3)

// 创建光源
const light = new THREE.DirectionalLight(0xFFFFFF, 1)
light.position.set(-1, 2, 4)
scence.add(light)

camear.position.z = 2

// renderer.render(scence, camear)
const cubes = [cube1, cube2, cube3]

const render = (time) => {
  time = time * 0.001
  // cube1.rotation.x = time
  // cube1.rotation.y = time
  cubes.forEach( cube => {
     cube.rotation.x = time
     cube.rotation.y = time
  })

  renderer.render(scence, camear)
  requestAnimationFrame(render)
}
requestAnimationFrame(render)


