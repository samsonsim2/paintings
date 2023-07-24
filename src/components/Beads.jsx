import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
 
export function Beads(props) {
  const { nodes, materials } = useGLTF("/Beads.gltf");
  const myMesh = useRef( );
   useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime()/5
  })
  return (
    <group  ref = {myMesh} {...props} dispose={null} scale={0.03} position={[0,1,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cloner.geometry}
        material={nodes.Cloner.material}
        position={[0, 0, 0]}
      ><meshStandardMaterial color="#F5F5F5"/></mesh>
    </group>
  );
}

useGLTF.preload("/Beads.gltf");
