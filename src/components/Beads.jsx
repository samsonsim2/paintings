import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei"
 
export function Beads(props) {
  const { nodes, materials } = useGLTF("/Beads.gltf");

  const BeadsDiffuseMap = useTexture(
    '/Beads.png'
  )

  const myMesh = useRef( );
   useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime()/5
  })
  return (
    <group ref={myMesh} {...props} dispose={null} scale={0.015} position={[0,0,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Spheres.geometry}
        material={materials["Mat.1"]}
        scale={100}
       >
        <meshStandardMaterial     map={BeadsDiffuseMap}  /> 
       </mesh>
    </group>
  );
}

useGLTF.preload("/Beads.gltf");
