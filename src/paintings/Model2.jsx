/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { DoubleSide } from "three";
import { useFrame } from "@react-three/fiber";
export function Model2(props) {
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
  const { nodes, materials } = useGLTF("/Model2.glb");
  const myMesh = React.useRef()
useFrame(({ clock }) => {
  myMesh.current.rotation.y = clock.getElapsedTime()/5
})
 
  return (
    <group ref={myMesh} {...props} dispose={null} scale={2} position={[0,1,0]}>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Streamers_g0_b0.geometry}
        material={materials.brush_Streamers}
        ><meshPhongMaterial   emissive={"yellow"}  emissiveIntensity={1} color={"yellow"}    map={brushStreamersMap} transparent={true}/> </mesh> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_DiamondHull_g0_b0.geometry}
        material={materials.brush_DiamondHull}
        ><meshBasicMaterial map={brushDiamondHullMap} color={"red"}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Comet_g0_b0.geometry}
        material={materials.brush_Comet}
       ><meshBasicMaterial map={brushDiamondHullMap} color={"orange"}/></mesh>
        {/*Main yellow streaks*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_SoftHighlighter_g0_b0.geometry}
        material={materials.brush_SoftHighlighter}
        ><meshPhongMaterial map={brushSoftHiglighterMap}  emissive={"yellow"}  emissiveIntensity={1} color={"yellow"}  transparent={true} opacity={0.7}/></mesh>
     {/*Main yellow streaks*/}
     <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Petal_g0_b0.geometry}
        material={materials.brush_Petal}
       ><meshPhongMaterial  emissive={"yellow"}  emissiveIntensity={1} color={"yellow"} transparent={true} opacity={0.7}/></mesh>
      {/*Orange streaks*/}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Smoke_g0_b0.geometry}
        material={materials.brush_Smoke}
        ><meshBasicMaterial side={DoubleSide} map={brushSmokeMap} color={"#F89207"}  transparent={true}/></mesh>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_ThickPaint_g0_b0.geometry}
        material={materials.brush_ThickPaint}
        ><meshPhongMaterial map={brushThickPaintMap}  emissive={" yellow "}  emissiveIntensity={1} color={"yellow "} transparent={true} opacity={0.7}/></mesh> */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_WigglyGraphite_g0_b0.geometry}
        material={materials.brush_WigglyGraphite}
        ><meshPhongMaterial map={brushDiamondHullMap}  emissive={" green "}  emissiveIntensity={1} color={" orange "} transparent={true} opacity={0.7}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_HyperGrid_g0_b0.geometry}
        material={materials.brush_HyperGrid}
        ><meshPhongMaterial map={brushDiamondHullMap}  emissive={" green "}  emissiveIntensity={1} color={" orange "} transparent={true} opacity={0.7}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_DuctTape_g0_b0.geometry}
        material={materials.brush_DuctTape}
        ><meshPhongMaterial map={brushDiamondHullMap}  emissive={" green"}  emissiveIntensity={1} color={" orange "} transparent={true} opacity={0.7}/></mesh> */}
    </group>
  );
}

useGLTF.preload("/Model2.glb");
