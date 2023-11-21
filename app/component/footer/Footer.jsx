import { Lexend_Peta } from "next/font/google";

const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })


const Footer = () => {
    return (
        <footer>
            <div className="mt-32 bg-[#D90027] border-t-[1.5px] border-black" >
                <div className="py-4 px-12 ">
                    <div className="p-8 relative z-20 bottom-16 flex flex-col-reverse  lg:grid lg:grid-cols-3 gap-y-4 bg-white rounded-lg border-[1px] border-black">
                        <div className="col-span-1 flex flex-col gap-5">
                            <h2 className={`font-bold text-[#D90027] text-[40px] ${lexend_peta.className}`}>MARKAS</h2>
                            <p>MARKAS adalah tempat kolaborasi atau yang lebih dikenal dengan co-working space yang bertujuan menjadi wadah tempat masyarakat melakukan perintisan Startup di kota-kota seluruh Indonesia maupun tempat belajar bagi para peminat teknologi perusahaan digital.</p>
                            <div className="flex items-center">
                                <img src="/static/img/kominfo.svg" alt="" />
                                <div className="flex flex-col">
                                    <span>KOMINFO {new Date().getFullYear()}</span>
                                    <span>&copy; Direktorat Jenderal Aplikasi Informatika Republik Indonesia</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-2 mt-8 md:mt-3 flex md:flex-row flex-col justify-around gap-y-8 md:gap-y-0">
                            <div className="flex flex-col sm:gap-y-3 md:gap-y-8">
                                <h3 className="font-light text-[#D90027] text-xl">Lokasi</h3>
                                <p className="font-semibold text-2xl">SURABAYA</p>
                                <p className="font-semibold text-2xl">SURABAYA</p>
                                <p className="font-semibold text-2xl">SURABAYA</p>
                                <p className="font-semibold text-2xl">SURABAYA</p>
                            </div>
                            <div className="flex flex-col sm:gap-y-3 md:gap-y-8">
                                <h3 className="font-light text-[#D90027] text-xl">Lokasi</h3>
                                <p className="font-semibold text-2xl">SURABAYA</p>
                                <p className="font-semibold text-2xl">SURABAYA</p>
                                <p className="font-semibold text-2xl">SURABAYA</p>
                            </div>
                            <div className="flex flex-col sm:gap-y-3 md:gap-y-8">
                                <h3 className="font-light text-[#D90027] text-xl">Lokasi</h3>
                                <p className="font-semibold text-2xl">SURABAYA</p>
                                <p className="font-semibold text-2xl">SURABAYA</p>
                                <p className="font-semibold text-2xl">SURABAYA</p>
                                <p className="font-semibold text-2xl">SURABAYA</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;