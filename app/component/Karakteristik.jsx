import { Lexend_Peta } from "next/font/google";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })

const Karakteristik = () => {
    return (
        <Container>
            <div className="py-32 ">
                <div className="px-32 text-center flex flex-col gap-8 items-center">
                    <h2 className={`text-[#D90027] font-semibold ${lexend_peta.className} text-2xl  uppercase`}>Karakteristik</h2>
                    <h2 className="font-bold text-4xl uppercase">10 Karakter Markas</h2>
                    <span className="text-xl">Sejak diinisiasi di tahun 2016, semangat #1000StartupDigital adalah untuk berkolaborasi membuat ekosistem startup Indonesia menjadi inklusif dan kolaboratif.</span>
                </div>
                <div className="p-16 flex flex-col gap-y-2 md:gap-y-2">
                    <div className="flex flex-wrap justify-center gap-x-2 text-center">
                        <h2 className="px-4 py-1 border border-black rounded-full">🚀 VISIONARY</h2>
                        <h2 className="px-4 py-1 border border-black rounded-full">👟️ EXTRAMILE</h2>
                        <h2 className="px-4 py-1 border border-black rounded-full">🧠 STRATEGIC</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-2 text-center">
                        <h2 className="px-4 py-1 border border-black rounded-full">🏆 GRIT</h2>
                        <h2 className="px-4 py-1 border border-black rounded-full">⚖ INTEGRITY</h2>
                        <h2 className="px-4 py-1 border border-black rounded-full">🎯 FOCUSED</h2>
                        <h2 className="px-4 py-1 border border-black rounded-full">🚅 AGILE</h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-2 text-center">
                        <h2 className="px-4 py-1 border border-black rounded-full">🔥 PASSION</h2>
                        <h2 className="px-4 py-1 border border-black rounded-full">📚 RESOURCEFUL</h2>
                        <h2 className="px-4 py-1 border border-black rounded-full">🎨 CREATIVE</h2>
                    </div>

                </div>
                <div className="flex justify-center">

                    <Link
                        href={"https://www.instagram.com/markas.indonesia/"}
                        target="_blank"
                        className="">

                        <span className="text-white rounded-full bg-[#D90027] p-4 px-8">Cari Tahu Lebih</span>
                    </Link>
                </div>
            </div>
        </Container>
    );
}

export default Karakteristik;