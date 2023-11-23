"use client"
import Link from "next/link";
import { Lexend_Peta } from "next/font/google";
import Container from "../Container";
import { useSession, signOut } from "next-auth/react";
import GoogleSignInBtn from "@/app/component/GoogleSignInBtn";

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })

const Navbars = () => {
    const { data, status } = useSession();
    return (
        <div className="md:px-16 px-8">
            <Navbar fluid rounded>
                <Navbar.Brand href="/" className="hover:border-primary">
                    <span className={`${lexend_peta.className} col-span-3 text-center font-bold text-2xl text-[#D90027] self-center `}>MARKAS</span>
                </Navbar.Brand>


                <div className="flex md:order-2 gap-x-4 md:gap-x-0">
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
                    <Navbar.Toggle className="bg-transparent text-primary" />
                </div>
                <Navbar.Collapse >
                    <Navbar.Link href="/" active className="font-light text-primary ">
                        Beranda
                    </Navbar.Link>
                    <Navbar.Link className="text-primary font-light " href="/about">About</Navbar.Link>
                    <Navbar.Link className="text-primary font-light " href="/philosophy">Philosophy</Navbar.Link>
                    <Navbar.Link className="text-primary font-light " href="/events">Events</Navbar.Link>
                    <Navbar.Link className="text-primary font-light " href="/contact-us">Contact Us</Navbar.Link>
                </Navbar.Collapse>


            </Navbar>
        </div>

    );
}

export default Navbars;