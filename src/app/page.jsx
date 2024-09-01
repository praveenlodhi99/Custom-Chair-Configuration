"use client"

import Experience from '@/components/Experience'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const page = () => {
  return (
    <div className='h-[90vh] w-[90vw]'>
      <Canvas className='h-full w-full '>
        {/* <color attach="background" args={["#213547"]} /> */}
        <ambientLight />
        <Experience />
      </Canvas>
    </div>
  )
}

export default page