import { Lexend_Peta } from "next/font/google";
import { useEffect, useState } from "react";
import ReactTextTransition, { presets } from "react-text-transition";
import { texts } from "../../utils/heroText"
import getRandomInt from "@/app/utils/getRandomNumber";
const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })
const Hero = () => {
    const [textTranstion, setTextTransition] = useState(0)

    useEffect(() => {
        let interval = setInterval(() => {
            setTextTransition(getRandomInt(0, texts.length))
        }, 2000);

        return () => {
            clearInterval(interval);
        }
    }, []);
    return (
        <div className="  h-screen bg-cover bg-[url('/static/img/hero.png')]">
            <div className="w-full h-full flex flex-col gap-8 md:gap-16 justify-center items-center 
             bg-black/80 backdrop-brightness-75 text-white">
                <span className={`${lexend_peta.className} tracking-widest text-4xl md:text-6xl xl:text-8xl w-1/2 text-center font-semibold`} >
                    MARKAS
                </span>
                <span className="font-light text-xl md:text-2xl xl:text-4xl text-center">
                    A hub for startup founders to
                    <ReactTextTransition
                        inline className="ml-2">
                        {texts[textTranstion]}
                    </ReactTextTransition> with the ecosystem.
                </span>
            </div>
        </div >
    );
}

export default Hero;