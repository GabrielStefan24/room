"use client";

import Room from "./Room";
import RoomLight from "./Lights/RoomLights";
import Normal from "./Normal";

const Experience = () => {
  return (
    <>
      <RoomLight />
      <Room scale={[0.25, 0.25, 0.25]} position={[0, -2, 0]} />
      <Normal scale={[1, 1, 1]} position={[-2.5, -1.7, 1.9]} />
    </>
  );
};

export default Experience;
