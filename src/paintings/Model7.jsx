/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model7(props) {
  const { nodes, materials } = useGLTF("/Model7.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Streamers_g0_b0.geometry}
        material={materials.brush_Streamers}
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
        geometry={nodes.brush_SoftHighlighter_g0_b0.geometry}
        material={materials.brush_SoftHighlighter}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Petal_g0_b0.geometry}
        material={materials.brush_Petal}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_ThickPaint_g0_b0.geometry}
        material={materials.brush_ThickPaint}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_WigglyGraphite_g0_b0.geometry}
        material={materials.brush_WigglyGraphite}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_DuctTape_g0_b0.geometry}
        material={materials.brush_DuctTape}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Dots_g0_b0.geometry}
        material={materials.brush_Dots}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Embers_g0_b0.geometry}
        material={materials.brush_Embers}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Bubbles_g0_b0.geometry}
        material={materials.brush_Bubbles}
      />
    </group>
  );
}

useGLTF.preload("/Model7.glb");