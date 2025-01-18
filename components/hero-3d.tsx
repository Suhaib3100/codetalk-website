'use client'

import { Canvas } from '@react-three/fiber'
import { Text3D, Float, Environment, PerspectiveCamera } from '@react-three/drei'
import { useRef } from 'react'
import { Mesh } from 'three'

export function Hero3D() {
  const textRef = useRef<Mesh>(null)

  return (
    <div className="w-full h-[40vh] md:h-[50vh] relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <Environment preset="night" />
        <ambientLight intensity={0.2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <Float
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={0.5}
        >
          <Text3D
            ref={textRef}
            font="/fonts/Geist_Bold.json"
            size={1.5}
            height={0.1}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.01}
            bevelSize={0.01}
            bevelOffset={0}
            bevelSegments={5}
            position={[-4, 0, 0]}
          >
            CodeTalk
            <meshStandardMaterial 
              color="#ffffff"
              metalness={0.8}
              roughness={0.2}
            />
          </Text3D>
        </Float>
      </Canvas>
    </div>
  )
}

