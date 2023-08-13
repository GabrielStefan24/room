"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";

export function Room(props) {
  const { nodes, materials } = useGLTF("/Room.glb");
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(-1, 0, 1.25);
    camera.lookAt(-7.674, -3.265, 7.066);
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        name="Pereti"
        castShadow
        receiveShadow
        geometry={nodes.Pereti.geometry}
        material={materials.PaletteMaterial001}
        position={[-5.247, 15.143, 0.133]}
      />
      <mesh
        name="Mouse"
        castShadow
        receiveShadow
        geometry={nodes.Mouse.geometry}
        material={nodes.Mouse.material}
        position={[-11.674, 3.908, 10.157]}
        rotation={[0, 0.382, 0]}
      />
      <mesh
        name="Poster_pulp"
        castShadow
        receiveShadow
        geometry={nodes.Poster_pulp.geometry}
        material={materials.Poster2}
        position={[-19.477, 7.487, 7.789]}
      />
      <mesh
        name="Masa"
        castShadow
        receiveShadow
        geometry={nodes.Masa.geometry}
        material={materials.PaletteMaterial002}
        position={[-10.632, 3.777, 11.25]}
      />
      <mesh
        name="Vaza"
        castShadow
        receiveShadow
        geometry={nodes.Vaza.geometry}
        material={materials.PaletteMaterial003}
        position={[-13.674, 4.265, 12.066]}
      />
      <mesh
        name="Tastatura"
        castShadow
        receiveShadow
        geometry={nodes.Tastatura.geometry}
        material={materials.PaletteMaterial004}
        position={[-9.849, 3.913, 10.556]}
      />
      <mesh
        name="Poster_fight_Club"
        castShadow
        receiveShadow
        geometry={nodes.Poster_fight_Club.geometry}
        material={materials["Poster.001"]}
        position={[-19.477, 7.487, 9.915]}
      />
      <instancedMesh
        args={[nodes.Cube020.geometry, nodes.Cube020.material, 12]}
        name="Cube020"
        castShadow
        receiveShadow
        instanceMatrix={nodes.Cube020.instanceMatrix}
      />
    </group>
  );
}
export default Room;
useGLTF.preload("/Room.glb");
