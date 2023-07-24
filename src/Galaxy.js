import "./styles.css";
import React, { useMemo } from "react";
import { OrbitControls, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Typography } from "@mui/material";
import { BufferAttribute } from "three"
import fragmentShader from "./fragmentShader";
import * as THREE from "three";
import { Base } from "./components/Base";
import { Models } from "./components/Models";
import { Beads } from "./components/Beads";
import { extend } from '@react-three/fiber'
import { Effects } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass'
  
import { useControls } from 'leva'
extend({ UnrealBloomPass, OutputPass })
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};

function BufferPoints({ count = 4000 }) {
    

    const map = useTexture(
        '/circle.png'
      )

     
    
    const points = useMemo(() => {
      const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 20);
      return new BufferAttribute(new Float32Array(p), 3);
    }, [count]);
  
    return (
      <points>
        <bufferGeometry>
          <bufferAttribute attach={"attributes-position"} {...points} />
        </bufferGeometry>
        <pointsMaterial
          size={0.01}
          threshold={0.1}
          color={"white"}
          sizeAttenuation={true}
          alphaMap={map}
        />

        <Beads/>
        
        
      </points>
    );
  }
  

export default function App() {
    const { intensity, radius } = useControls({
        intensity: { value: 0.45, min: 0, max: 1.5, step: 0.01 },
        radius: { value: 0, min: 0, max: 1, step: 0.01 }
      })

    
  return (
    <>
    <Typography>dsada</Typography>
     <Canvas
          shadows
          gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
          linear
          backgr
          id='three-canvas-container'
          style={{ background: "black" }}
        >
             <color attach="background" args={['#111']} />
             <ambientLight intensity={0.5} />
       <Effects disableGamma>
        {/* threshhold has to be 1, so nothing at all gets bloom by default */}
        <unrealBloomPass threshold={1} strength={intensity} radius={radius} />
        <outputPass args={[THREE.ACESFilmicToneMapping]} />
      </Effects>
      <perspectiveCamera
        fov={75}
        aspect={sizes.width / sizes.height}
        position={[0, 0, 0]}
        near={0.1}
        far={100}
      >
       <Base/>
        
        <BufferPoints />
      </perspectiveCamera>
      {/* <ambientLight intensity={0.2} /> */}
      <directionalLight
            position={[20, 40, -5]}
            intensity={1}
            castShadow
          />
          <Models/>
      <OrbitControls />
    </Canvas>
    </>
  );
}