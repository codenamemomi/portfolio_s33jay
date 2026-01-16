import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars, Float } from '@react-three/drei'
import * as THREE from 'three'

function Earth() {
  const earthRef = useRef()
  const wireframeRef = useRef()
  const glowRef = useRef()

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime()
    if (earthRef.current) earthRef.current.rotation.y = elapsed * 0.05
    if (wireframeRef.current) wireframeRef.current.rotation.y = elapsed * 0.05
    if (glowRef.current) {
      glowRef.current.rotation.y = -elapsed * 0.02
      glowRef.current.scale.setScalar(1.1 + Math.sin(elapsed * 0.5) * 0.02)
    }
  })

  return (
    <group>
      {/* Stars Background */}
      <Stars
        radius={100}
        depth={50}
        count={2000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Core Sphere */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshStandardMaterial
          color="#1e3a8a"
          emissive="#06b6d4"
          emissiveIntensity={0.2}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Primary Wireframe */}
      <mesh ref={wireframeRef}>
        <sphereGeometry args={[2.01, 40, 40]} />
        <meshBasicMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Atmospheric Glow */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[2.05, 32, 32]} />
        <meshBasicMaterial
          color="#3b82f6"
          wireframe
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Data Rings */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <DataRing radius={2.8} color="#06b6d4" rotation={[Math.PI / 4, 0, 0]} />
        <DataRing radius={3.2} color="#3b82f6" rotation={[-Math.PI / 3, 0.5, 0]} />
      </Float>

    </group>
  )
}

function DataRing({ radius, color, rotation }) {
  const ringRef = useRef()

  useFrame(({ clock }) => {
    if (ringRef.current) {
      ringRef.current.rotation.z = clock.getElapsedTime() * 0.1
    }
  })

  return (
    <mesh rotation={rotation}>
      <ringGeometry args={[radius, radius + 0.01, 128]} />
      <meshBasicMaterial
        ref={ringRef}
        color={color}
        transparent
        opacity={0.2}
        side={THREE.DoubleSide}
      />
    </mesh>
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
      pointerEvents: 'none',
      background: '#020617'
    }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <fog attach="fog" args={['#020617', 5, 15]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={2} color="#06b6d4" />

        <Earth />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}