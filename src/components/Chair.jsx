// file name --------> Chair.jsx

/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import chair from '@/models/chair.gltf'

const Chair = (props) => {
    const { nodes, materials } = useGLTF(chair)
    return (
        <group {...props} dispose={null}>
            
            <mesh castShadow receiveShadow geometry={nodes.Chair.geometry} material={materials.Chair} />
            
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cushion.geometry}
                material={materials.Cushion}
                position={[0, 0.064, 0.045]}
            />

            <mesh castShadow receiveShadow geometry={nodes.Legs1.geometry} material={materials.Legs} />
            
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Legs2.geometry}
                material={materials.Legs}
                visible={false}
            />
        </group>
    )
}

useGLTF.preload('/chair.gltf')

export default Chair