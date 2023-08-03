import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model9(props) {
  const { nodes, materials } = useGLTF("/Model9.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_ChromaticWave_g0_b0.geometry}
        material={materials.brush_ChromaticWave}
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
        geometry={nodes.brush_Spikes_g0_b0.geometry}
        material={materials.brush_Spikes}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Streamers_g0_b0.geometry}
        material={materials.brush_Streamers}
      />
    </group>
  );
}

useGLTF.preload("/Model9.glb");
