import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitCube from "./components/XrHitCube";
import ModelSelector from "./components/ModelSelector";
import XrModels from "./components/XrModels";
 

const XrHitCubeContainer = () => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas>
        <XR>
          <XrHitCube />
        </XR>
      </Canvas>
    </>
  );
};

export default XrHitCubeContainer;