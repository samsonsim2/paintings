import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
 
export function Model9(props) {
  const brushBubblesMap = useTexture("/Textures/Brush_Bubbles.png");
  const brushCometMap = useTexture("/Textures/Brush_Comet.png");
  const brushDiamondHullMap = useTexture("/Textures/Brush_DiamondHull.png");
  const brushDotsMap = useTexture("/Textures/Brush_Dots.png");
  const brushDuctTapeMap = useTexture("/Textures/Brush_DuctTape.png");
  const brushEmbersMap = useTexture("/Textures/Brush_Embers.png");
  const brushHyperColorMap = useTexture("/Textures/Brush_Hypercolor.png");
  const brushHyperGridMap = useTexture("/Textures/Brush_HyperGrid.png");
  const brushInkMap = useTexture("/Textures/Brush_Ink.png");
  const brushSmokeMap = useTexture("/Textures/Brush_Smoke.png");
  const brushSoftHiglighterMap = useTexture(
    "/Textures/Brush_SoftHighlighter.png"
  );
  const brushStreamersMap = useTexture("/Textures/Brush_Streamers.png");
  const brushThickPaintMap = useTexture("/Textures/Brush_ThickPaint.png");
  const brushWigglyGraphiteMap = useTexture("/Textures/Brush_WigglyGraphite.png");
  const { nodes, materials } = useGLTF("/Model9.glb");
  const myMesh = React.useRef()
useFrame(({ clock }) => {
  myMesh.current.rotation.y = clock.getElapsedTime()/5
})
 
  return (
    <group {...props} ref={myMesh} dispose={null} scale={2} position={[0,1,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_ChromaticWave_g0_b0.geometry}
        material={materials.brush_ChromaticWave}
       ><meshPhongMaterial   depthWrite={false} emissive={"red"}  color={"red"} emissiveIntensity={4}   transparent={true} opacity={0.3}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_DiamondHull_g0_b0.geometry}
        material={materials.brush_DiamondHull}
      ><meshPhongMaterial depthWrite={false} map={brushDiamondHullMap}   emissive={"#C5E5FF"}  color={"#C5E5FF"} emissiveIntensity={1}   transparent={true} opacity={0.7}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Spikes_g0_b0.geometry}
        material={materials.brush_Spikes}
       ><meshPhongMaterial  depthWrite={false} emissive={"yellow"}  color={"yellow"} emissiveIntensity={1}   transparent={true} opacity={0.7}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Streamers_g0_b0.geometry}
        material={materials.brush_Streamers}
       ><meshPhongMaterial depthWrite={false} map={brushStreamersMap}   emissive={"yellow"}  color={"yellow"} emissiveIntensity={1}   transparent={true} opacity={0.7}/></mesh>
    </group>
  );
}

useGLTF.preload("/Model9.glb");
