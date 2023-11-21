import { Lexend_Peta } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee"
const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })

const CardPhoto = () => {
    return (
        <div className={` text-black text-center`}>
            <h2 className="uppercase text-center text-2xl md:text-4xl font-extrabold">Kami menunggumu di markas!</h2>

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
                <Marquee speed={30} pauseOnHover>
                    <div className={`mx-3 whitespace-nowrap grid grid-cols-6 gap-x-6  `}>
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
                        <Image
                            src={'/static/img/kolaborasi.png'}
                            width={300}
                            height={300}
                            className="rounded-xl"
                        />

                    </div>

                </Marquee >
            </div>
            <Link
                href={"https://www.instagram.com/markas.indonesia/"}
                target="_blank">
                <span className="text-white rounded-full bg-[#D90027] p-4 font-semibold">Kunjungi Instagram Kami</span>
            </Link>
        </div >
    );
}

export default CardPhoto;