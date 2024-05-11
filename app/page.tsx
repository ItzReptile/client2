'use client'
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import { HeroParallaxDemo } from "@/components/heroparallaxdemo";
import { VortexDemo } from "@/components/vortexdemo";

export default function Home() {
  return (
   <div>
    <VortexDemo/>
    <HeroParallaxDemo/>

    <InfiniteMovingCardsDemo />
    <LayoutGridDemo />
   </div>
  );
}
