/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import { useFrame } from "@react-three/fiber";
export function Model7(props) {
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
  const { nodes, materials } = useGLTF("/Model7.glb");
  const myMesh = React.useRef()
useFrame(({ clock }) => {
  myMesh.current.rotation.y = clock.getElapsedTime()/5
})

 
  return (
    <group ref={myMesh}{...props} dispose={null} scale={2.5} position={[0.5,1,0]} frustumCulled={false}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Streamers_g0_b0.geometry}
        material={materials.brush_Streamers}
       ><meshPhongMaterial map={brushCometMap}  emissive={"red"}  emissiveIntensity={2}   transparent={true} opacity={0.7}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_DiamondHull_g0_b0.geometry}
        material={materials.brush_DiamondHull}
       ><meshPhongMaterial map={brushDiamondHullMap}  emissive={"#FFFFBD"}  emissiveIntensity={2}   transparent={true} opacity={0.7}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_SoftHighlighter_g0_b0.geometry}
        material={materials.brush_SoftHighlighter}
        frustumCulled={false}
       >< meshPhongMaterial side ={DoubleSide} map={brushSoftHiglighterMap}  emissive={"orange"} color={"yellow"} emissiveIntensity={5}   transparent={true} opacity={0.7}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Petal_g0_b0.geometry}
        material={materials.brush_Petal}
      />
      {/* <mesh
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
      /> */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_DuctTape_g0_b0.geometry}
        material={materials.brush_DuctTape}
        frustumCulled={false}
       ><meshBasicMaterial map={brushDuctTapeMap} color={"red"} transparent={true}/></mesh> */}
      {/* <mesh
    
        geometry={nodes.brush_Dots_g0_b0.geometry}
        material={materials.brush_Dots}
        
       ><meshBasicMaterial  map={brushDotsMap} transparent={true} opacity={0.5}/></mesh> */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Embers_g0_b0.geometry}
        material={materials.brush_Embers}
      ><meshPhongMaterial map={brushDotsMap}  emissive={"red"} color={"yellow"} emissiveIntensity={6}   transparent={true} opacity={0.7}/></mesh> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Bubbles_g0_b0.geometry}
        material={materials.brush_Bubbles}
       ><meshPhongMaterial map={brushBubblesMap}  emissive={"orange"} color={"yellow"} emissiveIntensity={20}   transparent={true} opacity={0.7}/></mesh>
    </group>
  );
}

useGLTF.preload("/Model7.glb");
