"use client";

import { useRef } from "react";
import { Suspense } from "react";
import { useControls } from "leva";

export const RoomLight = () => {
  const lightRef = useRef();
  const pointHelper = useRef();

  const {
    color,
    intensity,
    position,
    shadowBias,
    shadowRadius,
    mapSizeWidth,
    mapSizeHeight,
    shadowCameraNear,
    shadowCameraFar,
    shadowCameraLeft,
    shadowCameraRight,
    shadowCameraTop,
    shadowCameraBottom,
  } = useControls({
    color: "#ffffff",
    intensity: { value: 1, min: 0, max: 5, step: 0.1 },
    position: { x: 500.0, y: -901, z: -181.7 },
    shadowBias: { value: -0.001, min: -0.01, max: 0.01, step: 0.0001 },
    shadowRadius: { value: 1, min: 0, max: 10, step: 0.1 },
    mapSizeWidth: { value: 2048, min: 256, max: 4096, step: 1 },
    mapSizeHeight: { value: 2048, min: 256, max: 4096, step: 1 },
  });

  return (
    <Suspense fallback={null}>
      <pointLight
        ref={pointHelper}
        intensity={5.25}
        decay={2}
        distance={8}
        color={"red"}
        castShadow
        position={[-2, 1.5, 2]}
        shadow-bias={-0.001}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <ambientLight intensity={0.3} color={"blue"} />

      <directionalLight
        ref={lightRef}
        color={color}
        intensity={intensity}
        position={[position.x, position.y, position.z]}
        shadow-bias={shadowBias}
        shadow-radius={shadowRadius}
        shadow-mapSize-width={mapSizeWidth}
        shadow-mapSize-height={mapSizeHeight}
        shadow-camera-near={shadowCameraNear}
        shadow-camera-far={shadowCameraFar}
        shadow-camera-left={shadowCameraLeft}
        shadow-camera-right={shadowCameraRight}
        shadow-camera-top={shadowCameraTop}
        shadow-camera-bottom={shadowCameraBottom}
        castShadow
      />
    </Suspense>
  );
};

export default RoomLight;
