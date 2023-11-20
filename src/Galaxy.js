import "./styles.css";
import React, { Suspense, useEffect, useMemo, useRef, useState } from "react";
import {
  OrbitControls,
  OrthographicCamera,
  Sparkles,
  SpotLight,
  shaderMaterial,
  useDepthBuffer,
  useGLTF,
  useTexture,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { BufferAttribute } from "three";
import { Cone } from "@react-three/drei";
import html2canvas from "html2canvas";
import * as THREE from "three";
import { Base } from "./components/Base";
import { Models } from "./components/Models";
import { Beads } from "./components/Beads";
import { extend } from "@react-three/fiber";
import { Effects } from "@react-three/drei";
import Loading from "./components/Loading";
import { UnrealBloomPass } from "three-stdlib";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass";
import { Color, AdditiveBlending } from "three";
import fragmentShader from "./modules/glsl/fakeGodRaysFrag.glsl";
import vertexShader from "./modules/glsl/fakeGodRaysVert.glsl";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { DoubleSide } from "three";
import { useControls } from "leva";
import { LightBase } from "./components/LightBase";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
import { BlurPass, Resizer, KernelSize, Resolution } from "postprocessing";
import ModelSelector from "./components/ModelSelector";
extend({ UnrealBloomPass, OutputPass });
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

function BufferPoints({ count = 2000 }) {
  const map = useTexture("/circle.png");

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

      <Beads />
    </points>
  );
}

export default function App() {
  const cameraRef = useRef(null);

  const ColorShiftMaterial = shaderMaterial(
    { time: 0, color: new THREE.Color(0.2, 0.0, 0.1) },
    // vertex shader
    /*glsl*/ `
    varying vec3 v_eye;
    varying vec3 v_normal;
    
    void main() {
      vec4 mPos = modelMatrix * vec4(position, 1.0);
      v_eye = normalize(mPos.xyz - cameraPosition);
      v_normal = normal;
    
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
    `,
    // fragment shader
    /*glsl*/ `
    varying vec3 v_eye;
    varying vec3 v_normal;
    
    float Fresnel(vec3 eyeVector, vec3 worldNormal) {
      return pow(1.0 + dot(eyeVector, worldNormal), 2.5);
    }
    
    void main() {
      vec3 color = vec3(1.0, 1.0, 0.5);
    
      float fresnel = Fresnel(v_eye, normalize(v_normal));
      float a = pow(fresnel * 0.1, 1.2);
      color *= fresnel;
    
      gl_FragColor = vec4(color,a );
    }
    `
  );
  extend({ ColorShiftMaterial });
  const rayRef = useRef(null);
   
  const shader = {
    uniforms: {},
    vertexShader,
    fragmentShader,
  };

  const [modelIndex, setModelIndex] = useState(0);

  const increment = () => {
    if (modelIndex < 26) {
      setModelIndex((oldCount) => {
        if (oldCount < 26) {
          return oldCount + 1;
        } else {
          return 0;
        }
      });
      console.log("increment");
    } else {
      setModelIndex(0);
    }
  };
  const decrement = () => {
    if (modelIndex > 0) {
      setModelIndex(modelIndex - 1);
    } else {
      setModelIndex(26);
    }
  };

  const { interval } = useControls({
    interval: { value: 1000, min: 1000, max: 8000, step: 500 },
  });


  const [intervalTime, setIntervalTime] = useState(1000);
  useEffect(() => {
    const intervalId = setInterval(increment, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [interval]);


  
  const downloadImage = () => {
    console.log("test");

    const screenshotTarget = document.getElementById("canvas");
    // -- Use html2canvas to convert to base 64 image
    html2canvas(screenshotTarget).then((canvas) => {
      const link = document.createElement("a");
      link.download = "my-div-image.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  };
  const divRef = useRef(null);

  return (
    <>
     
      <Box sx={{ position: "relative", width: "100vw", height: "100vh" }}>
        <Box
          sx={{
            position: "absolute",
            top: 30,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            zIndex: "10000000",
          }}
        >
          {/* <h1 style={{ color: "white" }}>Enraptured</h1> */}
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: 30,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            zIndex: "10000000",
          }}
        >
          {/* <Button
            variant="contained"
            onClick={() => {
              downloadImage();
            }}
          >
            donwload
          </Button> */}
        </Box>
        <Box
          ref={divRef}
          sx={{
            width: "100vw",
            top: 0,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              bottom: "50%",
              display: "flex",
              justifyContent: "space-between",
              zIndex: "100",
              width: "100%",
              padding: "50px",
            }}
          >
            <Button
              onClick={() => {
                decrement();
              }}
              sx={{ height: "40px" }}
            >
              <ArrowLeftIcon sx={{ fontSize: "100px", color: "white" }} />
            </Button>

            <Button
              onClick={() => {
                increment();
              }}
              sx={{ height: "40px" }}
            >
              <ArrowRightIcon sx={{ fontSize: "100px", color: "white" }} />
            </Button>
          </Box>

          <Box id="canvas" sx={{ height: "100vh", width: "100%" }}>
            <Suspense fallback={<Loading />}>
              <Canvas
                shadows
                gl={{
                  antialias: true,
                  toneMapping: THREE.NoToneMapping,
                  preserveDrawingBuffer: true,
                }}
                linear
                backgr
                id="three-canvas-container"
                style={{ background: "black" }}
              >
                <color attach="background" args={["#111"]} />
                <ambientLight intensity={0.5} />
                <EffectComposer>
                  <Bloom
                    luminanceThreshold={1}
                    luminanceSmoothing={0}
                    intensity={1}
                  />
                </EffectComposer>

                {/* <Base/> */}

                <BufferPoints />

                <OrthographicCamera
                  name="Camera"
                  makeDefault={true}
                  zoom={100}
                  far={20}
                  near={0}
                  up={[0, 1.5, 0]}
                  position={[0, 10, 12]}
                  scale={1.6}
                />

                <directionalLight
                  position={[20, 40, -5]}
                  intensity={1}
                  castShadow
                />

                <ModelSelector modelIndex={modelIndex} />

                <Sparkles count={90} scale={5} size={1} speed={0.4} />

                <mesh scale={0.2}>
                  <sphereGeometry></sphereGeometry>

                  <meshPhongMaterial
                    emissive={"yellow"}
                    emissiveIntensity={1}
                    color={"white"}
                    transparent={true}
                  />
                </mesh>
                <Beads />

                <mesh scale={0.3} side={DoubleSide}>
                  <sphereGeometry></sphereGeometry>
                  <colorShiftMaterial transparent side={DoubleSide} />
                </mesh>

                <LightBase />
                <OrbitControls enablePan={true} />
              </Canvas>
            </Suspense>
          </Box>
        </Box>
      </Box>
    </>
  );
}
