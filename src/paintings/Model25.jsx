
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model25(props) {
  const { nodes, materials } = useGLTF("/Model25.glb");
  return (
    <group {...props} dispose={null} scale={2} position={[0,1,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_SoftHighlighter_g0_b0.geometry}
        material={materials.brush_SoftHighlighter}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Streamers_g0_b0.geometry}
        material={materials.brush_Streamers}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Fire_g0_b0.geometry}
        material={materials.brush_Fire}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Disco_g0_b0.geometry}
        material={materials.brush_Disco}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Light_g0_b0.geometry}
        material={materials.brush_Light}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_DiamondHull_g0_b0.geometry}
        material={materials.brush_DiamondHull}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_WigglyGraphite_g0_b0.geometry}
        material={materials.brush_WigglyGraphite}
      />
    </group>
  );
}

useGLTF.preload("/Model25.glb");
