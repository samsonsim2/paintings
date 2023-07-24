import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Base(props) {
  const { nodes, materials } = useGLTF("/Base.gltf");
  return (
    <group {...props} dispose={null} scale ={0.01}>
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder1.geometry}
        material={nodes.Cylinder1.material}
        position={[0, 11.382, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DRACAENA_MARGINATA1.geometry}
        material={materials.Mat}
        position={[-157.804, 0, -187.813]}
        rotation={[-Math.PI / 2, 0, -2.357]}
        scale={100}
      ><meshStandardMaterial color="#8b008b" /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CORDYLINE_FRUCTICOSA.geometry}
        material={materials.Mat}
        position={[214.043, 0, -187.813]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DYPSIS_LUTESCENS.geometry}
        material={materials.Mat}
        position={[-209.412, -47.585, -164.145]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DRACAENA_MARGINATA.geometry}
        material={materials.Mat}
        position={[162.243, -54.637, -138.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
       ><meshStandardMaterial color="#8b008b" /></mesh>
    </group>
  );
}

useGLTF.preload("/Base.gltf");