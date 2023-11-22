'use client'
import { Lexend_Peta } from "next/font/google";
import { useEffect, useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const TEXTS = ["MARKAS", "RUMAH", "STUDIO"];
const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })

const Hero = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex((index) => index + 1), 2000);

        return () => {
            clearTimeout(intervalId);
        }
    }, []);
    return (
        <div className="  h-screen bg-cover bg-[url('/static/img/hero.png')]">
            <div className="w-full h-full flex flex-col gap-8 md:gap-16 justify-center items-center 
             bg-black/80 backdrop-brightness-75 text-white">
                <span className="font-light text-xl md:text-2xl xl:text-4xl text-center">
                    Ini cerita tentang
                    <ReactTextTransition
                        springConfig={presets.stiff}
                        direction="up"
                        inline
                        className="ml-2 text-primary font-bold">
                        {TEXTS[index % TEXTS.length]}
                    </ReactTextTransition> kita...
                </span>
                <span className="font-light text-xl md:text-2xl text-center">

                </span>
            </div>
        </div >
    );
}

export default Hero;