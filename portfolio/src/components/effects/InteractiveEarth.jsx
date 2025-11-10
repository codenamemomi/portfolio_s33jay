// portfolio/src/components/effects/InteractiveEarth.jsx
import { useRef, useMemo } from 'react'
import { useFrame, useLoader } from '@react-three/fiber'
import { Canvas } from '@react-three/fiber'
import { TextureLoader } from 'three'
import { OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'

function Earth() {
  const earthRef = useRef()
  const cloudsRef = useRef()
  
  // Use actual Earth textures from online sources
  const [earthTexture, bumpMap, specularMap] = useLoader(TextureLoader, [
    // Free NASA Earth texture
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_atmos_2048.jpg',
    // Bump map for terrain
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_normal_2048.jpg',
    // Specular map for water reflection
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_specular_2048.jpg'
  ])

  // Cloud texture
  const [cloudTexture] = useLoader(TextureLoader, [
    'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/planets/earth_clouds_1024.png'
  ])

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
        radius={300} 
        depth={60} 
        count={8000} 
        factor={7} 
        saturation={0.1} 
        fade 
        speed={1}
      />
      
      {/* Earth with realistic textures */}
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={earthTexture}
          bumpMap={bumpMap}
          bumpScale={0.05}
          specularMap={specularMap}
          specular={new THREE.Color(0x333333)}
          shininess={5}
        />
      </mesh>

      {/* Clouds with transparency */}
      <mesh ref={cloudsRef} scale={[1.005, 1.005, 1.005]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial
          map={cloudTexture}
          transparent={true}
          opacity={0.4}
          depthWrite={false}
        />
      </mesh>

      {/* Atmosphere glow effect */}
      <mesh scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshBasicMaterial
          color={0x0077ff}
          transparent={true}
          opacity={0.1}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Satellite Orbits */}
      <OrbitRing radius={2.5} color="#3b82f6" speed={0.15} />
      
    </group>
  )
}

function OrbitRing({ radius, color, speed }) {
  const ringRef = useRef()
  
  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.x += speed * 0.01
    }
  })

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.01, radius + 0.01, 128]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={0.15}
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
      const x = Math.cos(time) * position[0]
      const z = Math.sin(time) * position[0]
      const y = position[1] + Math.sin(time * 2) * 0.1 // Slight vertical movement
      
      satelliteRef.current.position.set(x, y, z)
      satelliteRef.current.rotation.y = time + Math.PI / 2
    }
  })

  return (
    <group ref={orbitRef}>
      <mesh ref={satelliteRef}>
        <boxGeometry args={[0.08, 0.03, 0.15]} />
        <meshStandardMaterial 
          color={color} 
          emissive={color}
          emissiveIntensity={0.3}
        />
      </mesh>
      
      {/* Solar Panels */}
      <mesh ref={satelliteRef} position={[0, 0, 0.08]}>
        <boxGeometry args={[0.12, 0.01, 0.02]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>
    </group>
  )
}

// Add some space debris/asteroids for more realism
function SpaceDebris() {
  const debrisRef = useRef()
  
  const debris = useMemo(() => {
    const items = []
    for (let i = 0; i < 50; i++) {
      items.push({
        position: [
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 10, 
          (Math.random() - 0.5) * 10
        ],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        scale: Math.random() * 0.02 + 0.005
      })
    }
    return items
  }, [])

  useFrame((state) => {
    if (debrisRef.current) {
      debrisRef.current.rotation.y += 0.0005
    }
  })

  return (
    <group ref={debrisRef}>
      {debris.map((item, i) => (
        <mesh
          key={i}
          position={item.position}
          rotation={item.rotation}
          scale={item.scale}
        >
          <sphereGeometry args={[1, 4, 4]} />
          <meshStandardMaterial color="#64748b" />
        </mesh>
      ))}
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
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <color attach="background" args={['#0a0a0f']} />
        
        {/* Improved lighting */}
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color={0xffffff} />
        <pointLight position={[-10, -5, -5]} intensity={0.5} color={0x0077ff} />
        <spotLight
          position={[15, 15, 15]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          castShadow
        />
        
        <Earth />
        <SpaceDebris />
        
        {/* Enhanced controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          rotateSpeed={0.3}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  )
}