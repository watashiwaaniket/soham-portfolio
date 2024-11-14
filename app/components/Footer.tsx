import { FaLocationArrow, FaFile } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "@/app/components/MagicButton";


const Footer = () => {
  return (
    <>
        <div className="h-[36rem] w-screen dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="flex flex-col items-center align-middle">
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
            Let's <span className="text-rose-500">Get In Touch</span>!
        </p>
        <p>Click on Contact Me to mail me any queries.</p>
        <div>
        <a href="mailto:sohambubukwar456@gmail.com">
          <MagicButton
            title="Contact Me"
            icon={<FaLocationArrow />}
            position="right"
          />
          
        </a>
        <a href="/SohamBubukwarResume.pdf">
        <MagicButton 
            title="Resume"
            icon = {<FaFile />}
            position="right"
          />
        </a>
        </div>
        </div>
        </div>
      
    <footer className="w-full h-32 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" id="contact">
      <div className="flex md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light pt-6 sm:p-10">
          Copyright © 2024 Soham Bubukwar
        </p>

        <div className="flex items-center md:gap-3 gap-6 pt-4 sm:p-10">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <a href={info.src}>
                <img src={info.img} alt="icons" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;