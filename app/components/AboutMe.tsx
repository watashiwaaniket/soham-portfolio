"use client";
import { GridBackground } from "./ui/GridBackground";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";



export default function AboutMe() {
    return(
        <>
        <GridBackground />
        <Spotlight 
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
        />
        <div className="justify-center flex">
        <div className="max-w-[64vw]">
        <TextGenerateEffect 
            words=" Dynamic and Results-driven professional with a proven track record
            in Digital Marketing and Business Development, sharpened through
            leadership roles at Digiholic Marketing Agency and Aquarius
            Ventures. An expert in SEO and Strategic Partnerships. I delivered
            a 20% boost in Lead Conversion and significantly expanded
            high-value Client Portfolios. Fluent in English, Marathi, and Hindi,
            which helped in seamlessly securing high-value clients, enhancing
            business reach and profitability My deep expertise in Project
            Management and Performance Optimization ensures relentless
            growth, operational excellence, and unwavering client satisfaction."
            className="text-center mt-[-320px]"
        />
        </div>
        </div>
        </>
    )
};
