import { Lexend_Peta } from "next/font/google";
import Link from "next/link";
import Container from "../Container";
import Image from "next/image";
const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })

const Filosofi = () => {
    return (
        <Container>
            <div className="py-32">
                <div className="md:px-32 text-center flex flex-col gap-8 items-center">
                    <h2 className={`text-primary font-semibold ${lexend_peta.className} md:text-2xl text-xl uppercase`}>MARKAS</h2>
                    <h2 className="font-bold text-2xl md:text-4xl uppercase">HOW WILL MARKAS HELP YOU?</h2>
                    <span className="text-lg md:text-xl">MARKAS will help you become <span className=" text-primary">R.I.C.H.</span></span>
                </div>
                <div className="md:p-16 py-16 grid grid-cols-1 gap-y-5">
                    <div className="flex  gap-5">
                        <div className="w-48 p-8 md:py-8  md:w-72 flex items-center justify-center  bg-primary rounded-2xl md:rounded-xl">
                            <span className="text-6xl md:text-8xl text-white">
                                R
                            </span>
                        </div>
                        <div className="flex flex-col justify-center md:gap-y-2">
                            <h2 className={`text-primary font-light text-sm md:text-lg  `}>RECOGNIZED</h2>
                            <span className={`font-light text-sm md:text-lg`}>Seberapa banyak jabat tangan yang kamu lakukan,
                                menentukan seberapa dekat impianmu bisa
                                tercapai. </span>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse  gap-5">
                        <div className="w-48 p-8 md:py-8  md:w-72 flex items-center justify-center  bg-primary rounded-2xl md:rounded-xl">
                            <span className="text-6xl md:text-8xl text-white">
                                I
                            </span>
                        </div>
                        <div className="flex flex-col justify-center md:gap-y-2">
                            <h2 className={`text-primary font-light text-sm md:text-lg  `}>INSPIRED</h2>
                            <span className={`font-light text-sm md:text-lg`}>Banyak pengalaman, baik itu kegagalan maupun
                                kesuksesan yang sudah dialami oleh mereka yang
                                terlebih dahulu melalui proses belajar. </span>
                        </div>
                    </div>
                    <div className="flex  gap-5">
                        <div className="w-48 p-8 md:py-8  md:w-72 flex items-center justify-center  bg-primary rounded-2xl md:rounded-xl">
                            <span className="text-6xl md:text-8xl text-white">
                                C
                            </span>
                        </div>
                        <div className="flex flex-col justify-center md:gap-y-2">
                            <h2 className={`text-primary font-light text-sm md:text-lg  `}>CAPABLE</h2>
                            <span className={`font-light text-sm md:text-lg`}>Berbagai macam program pelatihan baik teknis
                                maupun bisnis akan diadakan terus menerus di
                                Markas. </span>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse  gap-5">
                        <div className="w-48 p-8 md:py-8  md:w-72 flex items-center justify-center  bg-primary rounded-2xl md:rounded-xl">
                            <span className="text-6xl md:text-8xl text-white">
                                H
                            </span>
                        </div>
                        <div className="flex flex-col justify-center md:gap-y-2">
                            <h2 className={`text-primary font-light text-sm md:text-lg  `}>HOMEY</h2>
                            <span className={`font-light text-sm md:text-lg`}>Seberapa banyak jabat tangan yang kamu lakukan,
                                menentukan seberapa dekat impianmu bisa
                                tercapai. </span>
                        </div>
                    </div>


                </div>

            </div>
        </Container>
    );
}

export default Filosofi;