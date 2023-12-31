/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
 
export function Model1(props) {
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
const brushWaveFormMap = useTexture("/Textures/Brush_Waveform.png");
const myMesh = React.useRef()
useFrame(({ clock }) => {
  myMesh.current.rotation.y = clock.getElapsedTime()/5
})

 

const { nodes, materials } = useGLTF("/Model1.glb");
  return (
    <group ref={myMesh} {...props} dispose={null} position={[0,1,0]} scale={2} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_HyperGrid_g0_b0.geometry}
        material={materials.brush_HyperGrid}
      ><meshPhongMaterial   emissive={"#6AFF00"}  emissiveIntensity={3} color={"#6AFF00"}    map={brushHyperGridMap} transparent={true} depthWrite={false}/> </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Streamers_g0_b0.geometry}
        material={materials.brush_Streamers}
       ><meshBasicMaterial  color={"#00E24B"} map={brushStreamersMap} transparent={true} depthWrite={false}/></mesh>
      {/*Arms*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_DiamondHull_g0_b0.geometry}
        material={materials.brush_DiamondHull}
         
       ><meshPhongMaterial   emissive={"#E6D9FF"}  emissiveIntensity={0.3} color={"#E6D9FF"}    map={brushHyperGridMap} transparent={true} depthWrite={false}/> </mesh>
      {/*Legs*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_DiamondHull_g0_b1.geometry}
        material={materials.brush_DiamondHull}
       
      ><meshPhongMaterial  depthWrite={false}  emissive={"#ADD8E6"}  emissiveIntensity={1} color={"#ADD8E6"}    map={brushHyperGridMap} transparent={true}/> </mesh>
      
      {/*Head*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_DiamondHull_g0_b2.geometry}
        material={materials.brush_DiamondHull}
        ><meshPhongMaterial depthWrite={false}  emissive={"#E6D9FF"}  emissiveIntensity={0.3} color={"#E6D9FF"}    map={brushHyperGridMap} transparent={true}/> </mesh>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_SoftHighlighter_g0_b0.geometry}
        material={materials.brush_SoftHighlighter}
        ><meshBasicMaterial  color={"yellow"} map={brushSoftHiglighterMap} transparent={true}/></mesh> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Petal_g0_b0.geometry}
        material={materials.brush_Petal}
        ><meshStandardMaterial color={"yellow"}  depthWrite={false}/></mesh>
         
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_ThickPaint_g0_b0.geometry}
        material={materials.brush_ThickPaint}
        ><meshBasicMaterial  color={"purple"} map={brushThickPaintMap} transparent={true}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Electricity_g0_b0.geometry}
        material={materials.brush_Electricity}
        ><meshBasicMaterial  color={" #CFB0FF"}  transparent={true}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_WigglyGraphite_g0_b0.geometry}
        material={materials.brush_WigglyGraphite}
        ><meshBasicMaterial  color={"red"}  map={brushWigglyGraphiteMap}  transparent={true}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_DuctTape_g0_b0.geometry}
        material={materials.brush_DuctTape}
        ><meshBasicMaterial  color={"red"}  map={brushDuctTapeMap}  transparent={true}/></mesh>
    </group>
  );
}

useGLTF.preload("/Model1.glb");