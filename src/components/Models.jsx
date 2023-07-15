import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei"
 
import { DoubleSide } from "three";
import { useFrame } from "@react-three/fiber";

export function Models( props) {
  const { nodes, materials } = useGLTF("/Untitled_2.glb");
  const hyperGridDiffuseMap = useTexture(
    '/Brush_HyperGrid_MainTex.png'
  )

  const streamersMap = useTexture(
    '/Brush_Streamers_MainTex.png'
  )
  const diamondMap = useTexture(
    '/Brush_DiamondHull_MainTex.png'
  )

  const oilPaintMap = useTexture(
    '/Brush_OilPaint_MainTex.png'
  )
  const oilBumpMap = useTexture(
    '/Brush_OilPaint_BumpMap.png'
  )

  const softHighLighterMap = useTexture(
    '/Brush_SoftHighlighter_MainTex.png'
  )

  const smokeMap =useTexture(
    '/Brush_Smoke_MainTex.png'
  )

  const comeMaterial =useTexture(
    '/Brush_Come_MainTex.png'
  )

  const lightMaterial =useTexture(
    '/Brush_Light_MainTex.png'
  )


  const myMesh = React.useRef()
  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime()/5
  })
  return (
    <group ref={myMesh} {...props} dispose={null} scale={1} position={[0,0,-5]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_HyperGrid_g0_b0.geometry}
        
      ><meshPhongMaterial   emissive={"#6AFF00"}  emissiveIntensity={1} color={"#6AFF00"}    map={hyperGridDiffuseMap} transparent={true}/> </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Streamers_g0_b0.geometry}
         
       ><meshBasicMaterial map={streamersMap}   color={"yellow"} transparent={true} /></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_DiamondHull_g0_b0.geometry}
        
       ><meshPhongMaterial map={diamondMap}  emissive={"#ADD8E6"}  emissiveIntensity={1} color={"#ADD8E6"} transparent={true} opacity={0.7}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_DiamondHull_g0_b1.geometry}
        material={materials.brush_DiamondHull}
       ><meshPhongMaterial   emissive={"#ADD8E6"}  emissiveIntensity={1} map={diamondMap} color={"#ADD8E6"} transparent={true} opacity={0.5}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_DiamondHull_g0_b2.geometry}
        material={materials.brush_DiamondHull}
       ><meshPhongMaterial emissive={"#CBC3E3"}  emissiveIntensity={1} map={diamondMap} color={"#CBC3E3"} transparent={true} opacity={0.5}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_OilPaint_g0_b0.geometry}
         
       ><meshStandardMaterial map={oilPaintMap} color={"yellow"} bumpMap={oilBumpMap} transparent={true}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Comet_g0_b0.geometry}
         
       ><meshBasicMaterial  color={"grey"} map={comeMaterial} transparent={true}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_SoftHighlighter_g0_b0.geometry}
        
       ><meshPhysicalMaterial   emissive={"yellow"}
       emissiveIntensity={1} map={softHighLighterMap} color={"yellow"} transparent={true}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Petal_g0_b0.geometry}
        material={materials.brush_Petal}
       ><meshStandardMaterial color={"yellow"}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Smoke_g0_b0.geometry}
        
      ><meshBasicMaterial side={DoubleSide} map={smokeMap} color={"orange"}  transparent={true}/></mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.brush_Light_g0_b0.geometry}
         
       ><meshPhongMaterial map={lightMaterial} transparent={true}/></mesh>
    </group>
  );
}

useGLTF.preload("/Untitled_2.glb");
