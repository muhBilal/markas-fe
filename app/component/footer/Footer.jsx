import { Lexend_Peta, Lexend_Mega } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { useState, useEffect } from "react";
import axios from "axios";


const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })
const lexend_mega = Lexend_Mega({ subsets: ['latin'], weight: ['400', '700'] })


const Footer = () => {
    const [regional, setRegional] = useState([])

    useEffect(() => {
        const getRegional = async () => {
            await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/regional`).then(function (res) {
                const regionals = res.data

                setRegional(regionals.data)
            })
        }
        getRegional()
    }, [])
    return (
        <footer>

            <div className="mt-32 bg-[#D90027] border-t-[1.5px] border-black" >
                <div className="py-4 px-12 pb-12 ">
                    <div className="p-8 relative z-20 bottom-16 flex flex-col  lg:grid lg:grid-cols-3 gap-y-4 bg-white rounded-lg border-[1px] border-black">
                        <div className="col-span-1 flex flex-col gap-6">
                            <h2 className={`font-bold text-[#D90027] text-[40px] ${lexend_peta.className}`}>MARKAS</h2>
                            <p>MARKAS adalah tempat kolaborasi atau yang lebih dikenal dengan co-working space yang bertujuan menjadi wadah tempat masyarakat melakukan perintisan Startup di kota-kota seluruh Indonesia maupun tempat belajar bagi para peminat teknologi perusahaan digital.</p>
                            <div className="flex flex-col gap-2">
                                <Link href={'https://www.instagram.com/markas.indonesia/'} target="_blank">
                                    <div className="flex items-center gap-2">

                                        <FaInstagram className="text-3xl sm:text-4xl text-black" />
                                        <h2 className={`${lexend_mega.className} text-sm sm:text-[23px] uppercase`}>Instagram</h2>
                                        <FiArrowUpRight className="sm:text-xl text-black ml-6" />

                                    </div>
                                </Link>
                                <Link href={'https://www.youtube.com/@1000startupdigital'} target="_blank">
                                    <div className="flex items-center gap-2">
                                        <FaYoutube className="text-3xl sm:text-4xl text-black" />
                                        <h2 className={`${lexend_mega.className} text-sm sm:text-[23px] uppercase`}>Youtube</h2>
                                        <FiArrowUpRight className="sm:text-xl text-black ml-6" />
                                    </div>
                                </Link>
                            </div>
                            {/* <div className="flex items-center">
                                <img src="/static/img/kominfo.svg" alt="" />
                                <div className="flex flex-col">
                                    <span>KOMINFO {new Date().getFullYear()}</span>
                                    <span>&copy; Direktorat Jenderal Aplikasi Informatika Republik Indonesia</span>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-span-2 mt-8 md:mt-3 flex md:flex-row flex-col justify-around gap-y-8 md:gap-y-0">
                            <div className=" uppercase flex flex-col sm:gap-y-3 md:gap-y-8">
                                <h3 className="font-light text-[#D90027] text-lg sm:text-xl">Regional</h3>
                                {regional.map(regionals => {
                                    return (
                                        <>
                                            <a href="#" className={`${lexend_mega.className} text-sm sm:text-[23px]`}>{regionals.name}</a>
                                        </>
                                    )
                                })}
                            </div>
                            <div className="uppercase  flex flex-col sm:gap-y-3 md:gap-y-8">
                                <h3 className="font-light text-[#D90027] text-lg sm:text-xl">Contact Us</h3>
                                <a href="#" className={`${lexend_mega.className} text-sm sm:text-[23px]`}>BOOKING</a >
                                <a href="#" className={`${lexend_mega.className} text-sm sm:text-[23px]`}>FAQ</a >
                            </div>
                            <div className="uppercase flex flex-col sm:gap-y-3 md:gap-y-8">
                                <h3 className="font-light text-[#D90027] text-lg sm:text-xl">About</h3>
                                <a href="#" className={`${lexend_mega.className} text-sm sm:text-[23px]`}>PHILOSOPHY</a>
                                <a href="#" className={`${lexend_mega.className} text-sm sm:text-[23px]`}>RUANGAN</a>
                                <a href="#" className={`${lexend_mega.className} text-sm sm:text-[23px]`}>CREDITS</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer >
    );
}

export default Footer;