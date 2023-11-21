import { Lexend_Peta } from "next/font/google";
import Marquee from "react-fast-marquee"
const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })

const Marquees = () => {
    return (
        <div className={`  bg-[#D90027] font-bold text-white`}>
            <Marquee speed={20} pauseOnHover>
                <div className={`${lexend_peta.className} py-12 whitespace-nowrap `}>
                    <span className="text-xl md:text-4xl mx-4">GAIN KNOWLEDGE  </span>
                    <span className="text-xl md:text-4xl mx-4"> -  </span>
                    <span className="text-xl md:text-4xl mx-4">GET MENTORED </span>
                    <span className="text-xl md:text-4xl mx-4">- </span>
                    <span className="text-xl md:text-4xl mx-4">EXPAND NETWORK </span>
                    <span className="text-xl md:text-4xl mx-4">-</span>
                    <span className="text-xl md:text-4xl mx-4">GAIN KNOWLEDGE  </span>
                    <span className="text-xl md:text-4xl mx-4"> -  </span>
                    <span className="text-xl md:text-4xl mx-4">GET MENTORED </span>
                    <span className="text-xl md:text-4xl mx-4">- </span>
                    <span className="text-xl md:text-4xl mx-4">EXPAND NETWORK </span>
                    <span className="text-xl md:text-4xl mx-4">- </span>
                </div>
            </Marquee >
        </div>
    );
}

export default Marquees;