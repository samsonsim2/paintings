 
import './App.css';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useGLTF } from '@react-three/drei'
import { Canvas, extend } from '@react-three/fiber'
import { Effects } from '@react-three/drei'
import { UnrealBloomPass } from 'three-stdlib'
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass'
import {
  Environment,
  OrbitControls,
  OrthographicCamera,
} from '@react-three/drei'
import * as THREE from 'three'

import { Suspense, useState, useRef } from 'react'
 
 
import { Cube } from './components/Cube';
import { Box } from '@mui/material';
import { Models } from './components/Models';
 
import { useControls } from 'leva'
extend({ UnrealBloomPass, OutputPass })
const Paintings= () => {
    const { intensity, radius } = useControls({
        intensity: { value: 0.4, min: 0, max: 1.5, step: 0.01 },
        radius: { value: 0, min: 0, max: 1, step: 0.01 }
      })
    return (<>
     
    
  
      
 
   <Box sx={{  height: "100vh", width: "100%"}}>
        <Canvas
          shadows
          gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
          linear
          backgr
          id='three-canvas-container'
          style={{ background: "black" }}
        >
             <color attach="background" args={['#111']} />
             <ambientLight intensity={1} />
       <Effects disableGamma>
        {/* threshhold has to be 1, so nothing at all gets bloom by default */}
        <unrealBloomPass threshold={1} strength={intensity} radius={radius} />
        <outputPass args={[THREE.ACESFilmicToneMapping]} />
      </Effects>


          <OrbitControls
           minAzimuthAngle={-Infinity }
           maxAzimuthAngle={Infinity  }
             
            minPolarAngle={-Infinity}
            maxPolarAngle={Infinity}
            enablePan={true}
            enableZoom={true}
          />

         
         
          <Models/>
          
  
         
          <directionalLight
            position={[20, 40, -5]}
            intensity={0.5}
            castShadow
          />
        </Canvas>
        
      </Box>  

         
 
      </>
   
    );
}

export default Paintings
