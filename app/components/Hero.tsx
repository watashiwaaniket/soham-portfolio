import React from "react";
import { BackgroundGradientAnimation } from "../components/ui/background-gradient-animation";
import { GridBackground } from "./ui/GridBackground";

export function Hero() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="flex-col">
            <p className="text-7xl md:text-7xl sm:text-2xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/60">
            Soham Bubukwar
            </p>
            <p className="text-sm pt-6 text-transparent bg-clip-text drop-shadow-2xl bg-gradient-to-b from-white/100 to-white/80">
            Digital Marketing & Business Development expert in SEO and Strategic Partnerships,<br />driving lead conversion and high-value client growth.
            </p>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
