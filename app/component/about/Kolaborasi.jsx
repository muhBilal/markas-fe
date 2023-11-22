import { Lexend_Peta } from "next/font/google";
import Marquee from "react-fast-marquee";
import Container from "../Container";
import Image from "next/image";
const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })

const Kolaborasi = () => {
    return (
        <Container>
            <div className="py-32 ">
                <div className="px-32 text-center flex flex-col gap-8 items-center">
                    <h2 className={`text-[#D90027] font-semibold ${lexend_peta.className} text-2xl  uppercase`}>Kolaborasi</h2>
                    <h2 className="font-bold text-4xl uppercase">Pusat Kolaboarsi Ekosistem Digital</h2>
                    <span className="text-xl">Dalam Markas, kami visualisasikan semangat tersebut dalam area kerja bersama yang dapat diakses para startup founder dan stakeholder startup.</span>
                </div>
                <div className="py-12 flex flex-col gap-y-6 ">
                    <Marquee speed={20} pauseOnHover>
                        <div className={`mx-3 whitespace-nowrap grid grid-cols-8 gap-x-6`}>
                            <div className="flex flex-wrap rounded-xl mt-12 ">
                                <div className="flex flex-col max-w-sm text-center gap-y-6 p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                    <h2 className="text-4xl">👩‍💻👨‍💻</h2>
                                    <h2 className="text-2xl">Founder Startup</h2>
                                    <h2 className="text-xl whitespace-break-spaces">Tim Founder yang terdiri dari Hustler, Hipster, dan Hacker mendapatkan ruang yang luas untuk bereksplorasi dan mewujudkan startupnya.</h2>
                                </div>
                            </div>
                            <div className="flex flex-wrap rounded-xl ">
                                <div className="flex flex-col max-w-sm text-center gap-y-6 p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                    <h2 className="text-4xl">👩‍🎓👨‍🎓</h2>
                                    <h2 className="text-2xl">Pakar Pendidikan</h2>
                                    <h2 className="text-xl whitespace-break-spaces">Akademisi pendidikan dari berbagai universitas dan bidang akan berkolaborasi bersama dalam penelitian agar tercapainya validasi yang diperlukan.</h2>
                                </div>
                            </div>
                            <div className="flex flex-wrap rounded-xl mt-12 ">
                                <div className="flex flex-col max-w-sm text-center gap-y-6 p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                    <h2 className="text-4xl">👩‍💼👨‍💼</h2>
                                    <h2 className="text-2xl">Praktisi Industri</h2>
                                    <h2 className="text-xl whitespace-break-spaces">Dihadirkan pula praktisi-praktisi profesional yang siap membantu dalam menggali pengalaman yang relevan dengan kebutuhan luas.</h2>
                                </div>
                            </div>
                            <div className="flex flex-wrap rounded-xl ">
                                <div className="flex flex-col max-w-sm text-center gap-y-6 p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                    <h2 className="text-3xl">👩‍⚖️👨‍⚖️</h2>
                                    <h2 className="text-2xl">Pemerintahan</h2>
                                    <h2 className="text-xl whitespace-break-spaces">Dukungan dalam legalitas dan yuridis sangatlah diperlukan, oleh karenanya ahli-ahli dalam hukum dihadirkan dalam suatu forum diskusi terbuka.</h2>
                                </div>
                            </div>
                            <div className="flex flex-wrap rounded-xl mt-12 ">
                                <div className="flex flex-col max-w-sm text-center gap-y-6 p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                    <h2 className="text-3xl">🕵️‍♀️🕵️‍♂️</h2>
                                    <h2 className="text-2xl">Media Masa</h2>
                                    <h2 className="text-xl whitespace-break-spaces">Dukungan media masa maupun cetak berguna bagi perkembangan startup, oleh karenanya MARKAS bekerja bersama media yang terpercaya.</h2>
                                </div>
                            </div>
                            <div className="flex flex-wrap rounded-xl ">
                                <div className="flex flex-col max-w-sm text-center gap-y-6 p-6 bg-white border border-gray-200 rounded-lg shadow ">
                                    <h2 className="text-3xl">👩‍🌾👨‍🌾</h2>
                                    <h2 className="text-2xl">Komunitas</h2>
                                    <h2 className="text-xl whitespace-break-spaces">MARKAS berkolaborasi bersama komunitas untuk mewujudkan startup yang memadai dan menjawab persoalan yang ada ditengah masyarakat.</h2>
                                </div>
                            </div>



                        </div>

                    </Marquee >

                </div>

            </div>
        </Container>
    );
}

export default Kolaborasi;