'use client'
import { Lexend_Peta } from "next/font/google";
import { TypeAnimation } from 'react-type-animation';

const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })

const Hero = () => {

    return (
        <div className="  h-screen bg-cover bg-[url('/static/img/hero.png')]">
            <div className="w-full h-full flex flex-col gap-8 md:gap-16 justify-center items-center 
             bg-black/80 backdrop-brightness-75 text-white">
                <TypeAnimation
                    sequence={[
                        'Ini cerita tentang MARKAS kita...',
                        1000,
                        'Ini cerita tentang RUMAH kita...',
                        1000,
                        'Ini cerita tentang LINGKUNGAN kita...',
                        1000,
                    ]}
                    speed={35}
                    repeat={Infinity}
                    className="font-light text-xl md:text-2xl lg:text-3xl xl:text-6xl text-center"
                />
                <span className="font-light text-xl md:text-2xl text-center">

                </span>
            </div>
        </div >
    );
}

export default Hero;