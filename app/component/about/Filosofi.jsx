import { Lexend_Peta } from "next/font/google";
import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })

const Filosofi = () => {
    return (
        <Container>
            <div className="py-32">
                <div className="px-32 text-center flex flex-col gap-8 items-center">
                    <h2 className={`text-[#D90027] font-semibold ${lexend_peta.className} md:text-2xl text-xl uppercase`}>Filosofi</h2>
                    <h2 className="font-bold text-2xl md:text-4xl uppercase">Inklusif dan Kolaboratif</h2>
                    <span className="text-lg md:text-xl">Sejak diinisiasi di tahun 2016, semangat #1000StartupDigital adalah untuk berkolaborasi membuat ekosistem startup Indonesia menjadi inklusif dan kolaboratif.</span>
                </div>
                <div className="md:p-16 py-16 grid grid-cols-1 gap-y-5">
                    <div className="flex gap-5">
                        <Image src="/static/img/ruangbelajar.png" width={300} height={300} className="w-48 h-32 md:w-96 md:h-72 rounded-xl" />
                        <div className="flex flex-col justify-center gap-y-2">
                            <h2 className={`text-[#D90027] font-light text-lg `}>Gain Knowledge</h2>
                            <h2 className={`font-semibold text-2xl `}>Ruang Belajar</h2>
                            <span className={`font-light text-lg`}>MARKAS sangat mengedepankan kegunaan ruang untuk menunjang aktivitas penggunanya.</span>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse  gap-5">
                        <Image src="/static/img/tempatkonsultasi.png" width={300} height={300} className="w-48 h-32 md:w-96 md:h-72 rounded-xl" />
                        <div className="flex flex-col justify-center gap-y-2">
                            <h2 className={`text-[#D90027] font-light text-lg `}>Get Mentored</h2>
                            <h2 className={`font-semibold text-2xl `}>Tempat Berkonsultasi</h2>
                            <span className={`font-light text-lg `}>Fasilitas pertemuan singkat maupun diskusi panjang untuk mengolah ide menjadi nyata.</span>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <Image src="/static/img/kolaborasi.png" width={300} height={300} className="w-48 h-32 md:w-96 md:h-72 rounded-xl" />
                        <div className="flex flex-col justify-center gap-y-2">
                            <h2 className={`text-[#D90027] font-light text-lg `}>Expand Network</h2>
                            <h2 className={`font-semibold text-2xl `}>Wadah Berkolaborasi</h2>
                            <span className={`font-light text-md `}>Area kerja bersama yang dapat diakses para startup founder dan stakeholder startup.</span>
                        </div>
                    </div>

                </div>
                <div className="flex justify-center">

                    <Link
                        href={"#"}
                        target="_blank"
                        className="">

                        <span className="text-white rounded-full bg-[#D90027] p-4 px-8">Cari Tahu Lebih</span>
                    </Link>
                </div>
            </div>
        </Container>
    );
}

export default Filosofi;