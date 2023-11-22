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
                    <div className="grid grid-cols-12 items-center justify-between gap-3 md-gap-0">
                        <Link href='/' className={`${lexend_peta.className} col-span-3 font-bold text-2xl text-[#D90027]`}>
                            MARKAS
                        </Link>
                        <div className="col-span-6  flex gap-x-6 items-center justify-center  text-[#D90027] font-light">
                            <Link href="/">
                                Beranda
                            </Link>
                            <Link href="/about">
                                About
                            </Link>
                            <Link href="/philosophy">
                                Philosophy
                            </Link>
                            <Link href="/events">
                                Events
                            </Link>
                            <Link href="/booking">
                                Booking
                            </Link>
                            <Link href="/contact-us">
                                Contact Us
                            </Link>
                        </div>
                        <div className="col-span-3  flex justify-center items-center gap-x-4">
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
                                        <button className='rounded bg-primary text-white py-2 px-3' onClick={() => signOut()}>Keluar</button>
                                    </>
                                )
                            }
                        </div>

                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;