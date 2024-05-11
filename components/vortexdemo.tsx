import React from "react";
import { Vortex } from "./ui/vortex";

export function VortexDemo() {
  return (
    <div className=" mx-auto   h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Welcome To My Thrift Store!
        </h2>
        <p className="text-white text-md max-w-2xl mt-6 text-center">
          I offer many items such as clothes, antiques, electronics, home decor,
          books, and more. Whether you're looking for vintage treasures or
          modern essentials, you'll find something to suit your taste and style.
        </p>
      </Vortex>
    </div>
  );
}
