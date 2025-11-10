import { useRef, useMemo } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

function Earth() {
  const earthRef = useRef()
  const cloudsRef = useRef()
  
  // Fallback colors since we don't have texture files
  const earthColor = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 2
    canvas.height = 2
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 0, 2, 2)
    gradient.addColorStop(0, '#1e3a8a')
    gradient.addColorStop(1, '#0ea5e9')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, 2, 2)
    return new THREE.CanvasTexture(canvas)
  }, [])

  const cloudsColor = useMemo(() => {
    const canvas = document.createElement('canvas')
    canvas.width = 2
    canvas.height = 2
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, 2, 2)
    return new THREE.CanvasTexture(canvas)
  }, [])

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.001
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += 0.0015
    }
  })

  return (
    <group>
      {/* Stars Background */}
      <Stars 
        radius={100} 
        depth={50} 
        count={5000} 
        factor={4} 
        saturation={0} 
        fade 
        speed={0.5}
      />
      
      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          map={earthColor}
          specular={new THREE.Color(0x333333)}
          shininess={5}
        />
      </mesh>

      {/* Clouds */}
      <mesh ref={cloudsRef} scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial
          map={cloudsColor}
          transparent={true}
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      {/* Satellite Orbits */}
      <OrbitRing radius={3.0} color="#3b82f6" speed={0.35} />

    </group>
  )
}

function OrbitRing({ radius, color, speed }) {
  const ringRef = useRef()
  
  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.x += speed * 0.01
      ringRef.current.rotation.z += speed * 0.005
    }
  })

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.3}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function Satellite({ position, color, speed }) {
  const satelliteRef = useRef()
  const orbitRef = useRef()
  
  useFrame((state) => {
    if (satelliteRef.current && orbitRef.current) {
      const time = state.clock.elapsedTime * speed
      const x = Math.cos(time) * Math.abs(position[0])
      const z = Math.sin(time) * Math.abs(position[2] || position[0])
      const y = Math.sin(time * 0.5) * 0.3
      
      satelliteRef.current.position.set(x, y, z)
      satelliteRef.current.rotation.y = time
      
      // Make satellite always face direction of movement
      satelliteRef.current.lookAt(
        Math.cos(time + 0.1) * Math.abs(position[0]),
        Math.sin((time + 0.1) * 0.5) * 0.3,
        Math.sin(time + 0.1) * Math.abs(position[2] || position[0])
      )
    }
  })

  return (
    <group ref={orbitRef}>
      <mesh ref={satelliteRef}>
        <boxGeometry args={[0.05, 0.02, 0.1]} />
        <meshBasicMaterial color={color} />
      </mesh>
      
      {/* Solar Panels */}
      <mesh position={[0, 0, 0.06]}>
        <planeGeometry args={[0.08, 0.04]} />
      </mesh>
    </group>
  )
}

export default function InteractiveEarth() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -2,
      pointerEvents: 'none'
    }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#0a0a0f']} />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <spotLight
          position={[-10, 10, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1}
        />
        
        <Earth />
        
        {/* Minimal controls for desktop */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0.3}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  )
}