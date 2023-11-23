'use client'
import { Lexend_Peta } from "next/font/google";
import { TypeAnimation } from 'react-type-animation';
const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })

const Hero = () => {

    return (
        <div className="  h-screen bg-cover bg-[url('/static/img/hero.png')]">
            <div className="w-full h-full flex flex-col gap-8 md:gap-16 justify-center items-center 
             bg-black/80 backdrop-brightness-75 text-white">
                <span className="font-light rem] px-8 md:px-[10.8rem] xl:px-[6.3rem] 2xl:px-[15.5rem]   text-2xl 2xl:text-3xl text-center">
                    <TypeAnimation
                        sequence={[
                            '“ Mari kita bergerak, agar semua rakyat Nusantara tak lagi dipandang sebagai seperempat manusia. ” - HOS Tjokroaminoto',
                            200,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        className=""
                    />

                </span>

            </div>
        </div >
    );
}

export default Hero;