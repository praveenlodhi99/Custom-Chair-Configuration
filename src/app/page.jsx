"use client"

import Experience from '@/components/Experience'
import { Canvas } from '@react-three/fiber'
import React from 'react'

const page = () => {
  return (
    <div className='h-[100vh] w-[100vw] bg-orange-300'>
      <Canvas className='h-full w-full '>
        {/* <OrbitControls /> */}
        <color attach="background" args={["#213547"]} />
        <ambientLight />
        <Experience />
      </Canvas>
    </div>
  )
}

export default page