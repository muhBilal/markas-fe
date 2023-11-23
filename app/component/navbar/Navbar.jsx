"use client"
import { Lexend_Peta } from "next/font/google";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import GoogleSignInBtn from "@/app/component/GoogleSignInBtn";
import { usePathname } from 'next/navigation';
import { Navbar } from 'flowbite-react';
const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })

const Navbars = () => {
    const { data, status } = useSession();
    const currentRoute = usePathname();

    // styles for all links
    const linkStyle = 'flex items-center pl-[30px] pr-[30px] h-full no-underline hover:text-amber-600 duration-300';

    // styles for active and non-active links
    const activeStyle = ' text-primary font-semibold';
    const nonActiveStyle = ' text-primary font-light';
    return (
        <div className=" fixed z-30 w-full">
            <Navbar fluid>
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
                    <Link href="/"
                        className={currentRoute === "/" ? activeStyle : nonActiveStyle}>
                        Beranda
                    </Link>
                    <Link className={currentRoute === "/about"
                        ? activeStyle
                        : nonActiveStyle
                    } href="/about">About</Link>
                    <Link className={currentRoute === "/philosophy"
                        ? activeStyle
                        : nonActiveStyle
                    } href="/philosophy">Philosophy</Link>
                    <Link className={currentRoute === "/events"
                        ? activeStyle
                        : nonActiveStyle
                    } href="/events">Events</Link>
                    <Link className={currentRoute === "/booking"
                        ? activeStyle
                        : nonActiveStyle
                    } href="/booking">Booking</Link>
                    <Link className={currentRoute === "/contact-us"
                        ? activeStyle
                        : nonActiveStyle
                    } href="/contact-us">Contact Us</Link>
                </Navbar.Collapse>


            </Navbar>
        </div>


    );
}

export default Navbars;