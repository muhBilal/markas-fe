"use client"
import Link from "next/link";
import { Lexend_Peta } from "next/font/google";
import Container from "../Container";
import { useSession, signOut } from "next-auth/react";
import GoogleSignInBtn from "@/app/component/GoogleSignInBtn";

const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })

const Navbar = () => {
    const { data, status } = useSession();
    return (
        <div className="w-full bg-white">
            <div className="py-4 boder[0.5px]">
                <Container>
                    <div className="grid grid-cols-3 items-center justify-between gap-3 md-gap-0">
                        <Link href='/' className={`${lexend_peta.className} font-bold text-2xl text-[#D90027]`}>
                            MARKAS
                        </Link>
                        <div className="flex items-center gap-8 md:gap-12 text-[#D90027] font-light">
                            <Link href="/">
                                Beranda
                            </Link>
                            <Link href="/lokasi">
                                Lokasi
                            </Link>
                            <Link href="/filosofi">
                                Filosofi
                            </Link>
                            <Link href="/ruangan">
                                Ruangan
                            </Link>
                        </div>
                        {
                            status !== "authenticated" ? (
                                <GoogleSignInBtn />
                            ) : (
                                <>
                                    <div className="text-black">
                                        {
                                            data?.user?.name
                                        }
                                    </div>
                                    <button className='rounded bg-red-500 text-white py-2 px-3' onClick={() => signOut()}>Keluar</button>
                                </>
                            )
                        }
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;