
import { SphereGeometry, MeshPhongMaterial, Mesh, Object3D,PointLight } from 'three'
import * as THREE from 'three'
// 创建球体
const sphere = new THREE.SphereGeometry(1, 6, 6);

// 太阳单元

const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xFFFF00 })
const sunMesh = new THREE.Mesh(sphere,sunMaterial)
sunMesh.scale.set(4,4,4)

// 地球
const earthMaterial = new THREE.MeshPhongMaterial({ emissive: 0x112244 , color: 0x2233ff})
const earthMesh = new THREE.Mesh(sphere, earthMaterial)

// 月球单元
const moonMaterial = new THREE.MeshPhongMaterial({ emissive: 0x222222, color: 0x888888})
const moonMesh = new THREE.Mesh(sphere, moonMaterial)
moonMesh.scale.set(0.5,0.5,0.5)

// 创建 3D 空间  容纳月球

export const moonOribit = new Object3D();
moonOribit.add(moonMesh)
moonOribit.position.x = 2

// 创建 3D 空间 容纳地球
export const earthOribit = new Object3D()
earthOribit.add(earthMesh)
earthOribit.add(moonOribit)  // 空间合并
earthOribit.position.x = 10

// 创建 3D 空间 容纳太阳
export const sunOribit = new Object3D()
sunOribit.add(sunMesh)
sunOribit.add(earthOribit)

// 光源
export const pointLight = new PointLight(0xFFFFFF, 3)


