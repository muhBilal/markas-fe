import { Lexend_Peta } from "next/font/google";

const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })
const Hero = () => {
    return (
        <div className="  h-screen bg-cover bg-[url('/static/img/hero.png')]">
            <div className="w-full h-full flex flex-col gap-8 md:gap-16 justify-center items-center 
             bg-black/80 backdrop-brightness-75 text-white">
                <span className={`${lexend_peta.className} tracking-widest text-4xl md:text-6xl xl:text-8xl w-1/2 text-center font-semibold`} >
                    MARKAS
                </span>
                <span className="font-light text-xl md:text-2xl xl:text-4xl text-center">
                    A hub for startup founders to grow with the ecosystem.
                </span>
            </div>
        </div >
    );
}

export default Hero;