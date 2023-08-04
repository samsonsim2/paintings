import { CircularProgress, Stack, Typography } from '@mui/material'
import { Box, OrbitControls, Sparkles, useTexture } from '@react-three/drei'
import { Canvas } from '@react-three/fiber';
import React, { useMemo } from 'react'
import * as THREE from "three";
import { BufferAttribute } from "three"
const Loading = () => {

    function BufferPoints({ count = 2000 }) {


    

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
    
          
            
            
          </points>
        );
      }
      
  return (<>

       <Box sx={{width:"100vw",height:"100vh",position:"relative",display:"flex",justifyContent:"center"}}>
    <Stack spacing={2} sx={{pointerEvents:"none", zIndex:10000,  position:"absolute", top:0,bottom:0,left:0,right:0,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
    <Typography color="white"> Loading</Typography> 
    <CircularProgress sx={{color:"white"}} /> 
    <Typography color="white" sx={{fontSize:"6px",fontWeight:"light"}}> [This might take awhile]</Typography> 
    </Stack>

<Canvas
          shadows
          gl={{ antialias: true, toneMapping: THREE.NoToneMapping }}
          linear
          backgr
          id='three-canvas-container'
          style={{ background: "black"  }}
        >
             <color attach="background" args={['#111']} />
             <ambientLight intensity={0.5} />
        
       
        <BufferPoints />

          
 
      <directionalLight
            position={[20, 40, -5]}
            intensity={1}
            castShadow
          />
         
          <Sparkles count={90 } scale={5} size={1} speed={0.4}   />
     
        

       
      <OrbitControls enablePan={true}/>
    </Canvas>


    </Box>
  

    </>
  )
}

export default Loading
