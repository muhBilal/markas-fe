import { Lexend_Peta } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })

const Karakteristik = () => {
    return (
        <Container>
            <div className="py-32 ">
                <div className="md:px-32 text-center flex flex-col gap-8 items-center">
                    <h2 className={`text-[#D90027] font-semibold ${lexend_peta.className} text-2xl  uppercase`}>Karakteristik</h2>
                    <h2 className="font-bold text-4xl uppercase">10 Karakter Markas</h2>
                    <span className="text-xl">Sejak diinisiasi di tahun 2016, semangat #1000StartupDigital adalah untuk berkolaborasi membuat ekosistem startup Indonesia menjadi inklusif dan kolaboratif.</span>
                </div>
                <div className="md:p-16 p-8 flex flex-col gap-y-2 md:gap-y-4">
                    <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 md:gap-x-3 text-center">
                        <h2 className="px-6 py-3 border border-black rounded-full text-sm md:text-xl xl:text-3xl">🚀 VISIONARY</h2>
                        <h2 className="px-6 py-3 border border-black rounded-full text-sm md:text-xl xl:text-3xl">👟️ EXTRAMILE</h2>
                        <h2 className="px-6 py-3 border border-black rounded-full text-sm md:text-xl xl:text-3xl">🧠 STRATEGIC</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-center">
                        <h2 className="px-6 py-3 border border-black rounded-full text-sm md:text-xl xl:text-3xl">🏆 GRIT</h2>
                        <h2 className="px-6 py-3 border border-black rounded-full text-sm md:text-xl xl:text-3xl">⚖ INTEGRITY</h2>
                        <h2 className="px-6 py-3 border border-black rounded-full text-sm md:text-xl xl:text-3xl">🎯 FOCUSED</h2>
                        <h2 className="px-6 py-3 border border-black rounded-full text-sm md:text-xl xl:text-3xl">🚅 AGILE</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 text-center">
                        <h2 className="px-6 py-3 border border-black rounded-full text-sm md:text-xl xl:text-3xl">🔥 PASSION</h2>
                        <h2 className="px-6 py-3 border border-black rounded-full text-sm md:text-xl xl:text-3xl">📚 RESOURCEFUL</h2>
                        <h2 className="px-6 py-3 border border-black rounded-full text-sm md:text-xl xl:text-3xl">🎨 CREATIVE</h2>
                    </div>

                </div>
                <div className="flex justify-center">

                    <Link
                        href={"https://www.instagram.com/markas.indonesia/"}
                        target="_blank"
                        className="">

                        <span className="text-white rounded-full bg-[#D90027] p-4 px-8 text-xs md:text-lg   xl:text-2xl">Cari Tahu Lebih</span>
                    </Link>
                </div>
            </div>
        </Container>
    );
}

export default Karakteristik;