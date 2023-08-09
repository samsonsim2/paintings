import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
 
export function Model17(props) {
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
  const { nodes, materials } = useGLTF("/Model17.glb");
  const myMesh = React.useRef()
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime()/5
  })
  
  return (
    <group ref={myMesh} {...props} dispose={null} scale={2} position={[0,1,0]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Fire_g0_b0.geometry}
        material={materials.brush_Fire}
       ><meshBasicMaterial color="grey" map={brushFireMap}/></mesh>
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Streamers_g0_b0.geometry}
        material={materials.brush_Streamers}
      /> */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Light_g0_b0.geometry}
        material={materials.brush_Light}
       ><meshBasicMaterial color="black" /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_WigglyGraphite_g0_b0.geometry}
        material={materials.brush_WigglyGraphite}
       ><meshBasicMaterial color="grey" map={brushWigglyGraphiteMap}/></mesh> */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Disco_g0_b0.geometry}
        material={materials.brush_Disco}
      ><meshPhongMaterial  emissive={"white"}  color={"white"} emissiveIntensity={3}   map={brushSpikesSmallMap}   transparent={true} opacity={0.4}/></mesh>  
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Disco_g0_b1.geometry}
        material={materials.brush_Disco}
      />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Spikes_g0_b0.geometry}
        material={materials.brush_Spikes}
       ><meshPhongMaterial  emissive={"#003ab0"}  color={"white"} emissiveIntensity={3}   map={brushSpikesMap}   transparent={true}/></mesh>  
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_WetPaint_g0_b0.geometry}
        material={materials.brush_WetPaint}
       ><meshPhongMaterial  emissive={"#003ab0"}  color={"white"} emissiveIntensity={3}   map={brushSpikesMap}   transparent={true}/></mesh>   */}
      {/* <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Waveform_g0_b0.geometry}
        material={materials.brush_Waveform}
       ><meshPhongMaterial  emissive={"#003ab0"}  color={"white"} emissiveIntensity={3}   map={brushWaveFormMap}   transparent={true}/></mesh>   */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Rainbow_g0_b0.geometry}
        material={materials.brush_Rainbow}
       ><meshPhongMaterial  emissive={"red"}  color={"red"} emissiveIntensity={1}   map={brushSpikesMap}   transparent={true}/></mesh>  
    </group>
  );
}

useGLTF.preload("/Model17.glb");