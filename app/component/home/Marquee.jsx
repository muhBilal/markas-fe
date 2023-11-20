import { Lexend_Peta } from "next/font/google";

const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })

const Marquee = () => {
    return (
        <div class={`  bg-[#D90027] font-bold text-white relative flex overflow-hidden`}>
            <div class={`${lexend_peta.className} py-12 animate-marquee whitespace-nowrap`}>
                <span class="text-xl md:text-4xl mx-4">GAIN KNOWLEDGE</span>
                <span class="text-xl md:text-4xl mx-4">-</span>
                <span class="text-xl md:text-4xl mx-4">GET MENTORED</span>
                <span class="text-xl md:text-4xl mx-4">-</span>
                <span class="text-xl md:text-4xl mx-4">EXPAND NETWORK</span>
            </div>

            <div class={`${lexend_peta.className} py-12 animate-marquee2 whitespace-nowrap`}>
                <span class="text-xl md:text-4xl mx-4">GAIN KNOWLEDGE</span>
                <span class="text-xl md:text-4xl mx-4">-</span>
                <span class="text-xl md:text-4xl mx-4">GET MENTORED</span>
                <span class="text-xl md:text-4xl mx-4">-</span>
                <span class="text-xl md:text-4xl mx-4">EXPAND NETWORK</span>
            </div>
        </div>
    );
}

export default Marquee;