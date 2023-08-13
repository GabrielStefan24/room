"use client";

import { Canvas } from "@react-three/fiber";
import Experience from "@/components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "@/components/Scroll/Interface";

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <Canvas shadows>
        <ScrollControls pages={4} damping={0.1}>
          <Scroll>
            <Experience />
          </Scroll>
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </main>
  );
}
