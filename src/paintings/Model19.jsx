/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
 
export function Model19(props) {
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
  const brushWetPaintMap = useTexture("/Textures/Brush_WetPaint.png");
  const brushLightMap = useTexture("/Textures/Brush_Light.png");
  const brushFireMap = useTexture("/Textures/Brush_Fire.png");
  const brushDiscoMap = useTexture("/Textures/Brush_Disco.png");
  const brushSpikesMap = useTexture("/Textures/Brush_Spikes.png");
  const brushSpikesSmallMap = useTexture("/Textures/Brush_Spikes_small.png");
  const brushElectricityMap = useTexture("/Textures/Brush_Electricity.png");
  const { nodes, materials } = useGLTF("/Model19.glb");
  const myMesh = React.useRef()
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime()/5
  })

 
  return (
    <group ref={myMesh} {...props} dispose={null} scale={2} position={[0,1,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Light_g0_b0.geometry}
        material={materials.brush_Light}
       ><meshPhongMaterial  depthWrite={false} emissive={"blue"}  color={"blue"} emissiveIntensity={4}  map={brushLightMap}  transparent={true} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Fire_g0_b0.geometry}
        material={materials.brush_Fire}
       ><meshPhongMaterial depthWrite={false}   emissive={"white"}  color={"white"} emissiveIntensity={4}  map={brushFireMap}  transparent={true} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Dots_g0_b0.geometry}
        material={materials.brush_Dots}
       ><meshPhongMaterial  depthWrite={false}  emissive={"#18D6C8"}  color={"white"} emissiveIntensity={20}  map={brushDotsMap}  transparent={true} /></mesh>
    </group>
  );
}

useGLTF.preload("/Model19.glb");