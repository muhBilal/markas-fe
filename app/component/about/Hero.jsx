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
                        'Ini cerita tentang <span className={`${lexend_peta.className} text-primary`}>MARKAS</span> kita...',
                        500,
                    ]}
                    speed={50}
                    repeat={Infinity}
                    className="font-light text-xl md:text-2xl text-center"
                />
                <span className="font-light text-xl md:text-2xl text-center">

                </span>
            </div>
        </div >
    );
}

export default Hero;