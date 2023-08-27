import { OrbitControls } from "@react-three/drei";
import { Canvas, useThree } from "@react-three/fiber";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import Cube from "./Cube2";
import ModelSelector from "./ModelSelector";
import XrModels from "./XrModels";
import { extend } from "@react-three/fiber";
import * as THREE from "three";
extend({ Canvas });
const XrHitCube = () => {
  const reticleRef = useRef();
  const [cubes, setCubes] = useState([]);

  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  useHitTest((hitMatrix, hit) => {
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );

    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeCube = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setCubes([{ position, id }]);
  };

  return (
    <>
     
      
      {isPresenting &&
        cubes.map(({ position, id }) => {
          return   <Canvas
          shadows
          gl={{
            antialias: true,
            toneMapping: THREE.NoToneMapping,
            preserveDrawingBuffer: true,
          }}
          linear
          backgr
          id="three-canvas-container"
          style={{ background: "black" }}>
           < ModelSelector modelIndex={1} key={id}  />;
          </Canvas>
        })}
      {isPresenting && (
        <Interactive onSelect={placeCube}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color={"white"} />
          </mesh>
        </Interactive>
      )}

      {!isPresenting &&   <ModelSelector modelIndex={1}/>}
      
    </>
  );
};

export default XrHitCube;