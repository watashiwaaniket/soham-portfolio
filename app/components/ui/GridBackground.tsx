import React from "react";
export function GridBackground() {
  return (
    <>
    <div className="h-[32rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.1] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="flex-col items-center justify-center">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-blue-950 to-fuchsia-600 py-8 mt-[-190px]">
            About Me
        </p>
        </div>
      </div>
    </>
  );
}
