 
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
import ModelSelector from "./components/ModelSelector";

import { Suspense, useState, useRef } from 'react'
 
 
 
import { Box } from '@mui/material';
import { Models } from './components/Models';
 
import { useControls } from 'leva'
import { ARButton, XR } from '@react-three/xr';
import Cube from './components/Cube2';
 
 
 

 
extend({ UnrealBloomPass, OutputPass })
const PaintingsXR= () => {
    const { intensity, radius } = useControls({
        intensity: { value: 0.4, min: 0, max: 1.5, step: 0.01 },
        radius: { value: 0, min: 0, max: 1, step: 0.01 }
      })
    return (<>
     
    
  
      
 
   <Box sx={{  height: "100vh", width: "100%"}}>
   <ARButton  sessionInit={{
          requiredFeatures: ["hit-test"],
        }}/>
      <Canvas>
        <XR>
         <ModelSelector modelIndex={1}/>
        </XR>
      </Canvas>
        
        
      </Box>  

         
 
      </>
   
    );
}

export default PaintingsXR
