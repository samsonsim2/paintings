
import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { DoubleSide } from "three";
export function Model27(props) {
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
    const brushStreamersMap2 = useTexture("/Textures/Brush_Streamers2.png");
    brushStreamersMap2.repeat.set(0.3,0.6)
    const brushThickPaintMap = useTexture("/Textures/Brush_ThickPaint.png");
    const brushWigglyGraphiteMap = useTexture("/Textures/Brush_WigglyGraphite.png");
    const brushWaveFormMap = useTexture("/Textures/Brush_Waveform.png");
    const brushWaveFormMap2 = useTexture("/Textures/Brush_Waveform2.png");
    brushWaveFormMap2.repeat.set(4,1)
  
    const brushWetPaintMap = useTexture("/Textures/Brush_WetPaint.png");
    const brushLightMap = useTexture("/Textures/Brush_Light.png");
    const brushFireMap = useTexture("/Textures/Brush_Fire.png");
    const brushDiscoMap = useTexture("/Textures/Brush_Disco.png");
    const brushDiscoMap2 = useTexture("/Textures/Brush_Disco2.png");
    const brushSpikesMap = useTexture("/Textures/Brush_Spikes.png");
    const brushSpikesSmallMap = useTexture("/Textures/Brush_Spikes_small.png");
    const brushElectricityMap = useTexture("/Textures/Brush_Electricity.png");
    const brushSplatterMap = useTexture("/Textures/Brush_Splatter.png");
  const { nodes, materials } = useGLTF("/Model27.glb");
  return (
    <group {...props} dispose={null} scale={2} position={[0,1,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Disco_g0_b0.geometry}
        material={materials.brush_Disco}
       ><meshPhongMaterial   color={"#ddb9b9"}  emissiveIntensity={1} map={brushDiscoMap2}   depthWrite={false}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Disco_g0_b1.geometry}
        material={materials.brush_Disco}
      ><meshPhongMaterial   color={"#ddb9b9"}  emissiveIntensity={1} map={brushDiscoMap2}   depthWrite={false}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Waveform_g0_b0.geometry}
        material={materials.brush_Waveform}
       ><meshBasicMaterial   color={"white"}  depthWrite={false} map={brushWaveFormMap2} transparent={true}  /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Streamers_g0_b0.geometry}
        material={materials.brush_Streamers}
       ><meshBasicMaterial   color={"white"}  depthWrite={false} map={brushStreamersMap2} transparent={true}  /></mesh>
    </group>
  );
}

useGLTF.preload("/Model27.glb");