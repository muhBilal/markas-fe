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
                        <div className={`mx-3 whitespace-nowrap grid grid-cols-5 gap-x-6`}>
                            <Image
                                src={'/static/img/kolaborasi.png'}
                                width={300}
                                height={300}
                                className="rounded-xl"
                            />
                            <Image
                                src={'/static/img/kolaborasi.png'}
                                width={300}
                                height={300}
                                className="rounded-xl"
                            />
                            <Image
                                src={'/static/img/kolaborasi.png'}
                                width={300}
                                height={300}
                                className="rounded-xl"
                            />
                            <Image
                                src={'/static/img/kolaborasi.png'}
                                width={300}
                                height={300}
                                className="rounded-xl"
                            />
                            <Image
                                src={'/static/img/kolaborasi.png'}
                                width={300}
                                height={300}
                                className="rounded-xl"
                            />
                        </div>

                    </Marquee >

                </div>

            </div>
        </Container>
    );
}

export default Kolaborasi;