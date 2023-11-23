"use client"
import React from 'react'

import { Lexend_Peta } from "next/font/google";
import Hero from '../component/about/Hero'
import Filosofi from '../component/about/Filosofi';
import Karakteristik from '../component/Karakteristik';
import CardKerjaSama from '../component/card/CardKerjasama';
import Kolaborasi from '../component/about/Kolaborasi';
const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] });

export default function page() {
    return (
        <div>
            <Hero />
            <div className="py-32">
                <div className="flex flex-col gap-y-8 text-center">
                    <h2 className={`${lexend_peta.className} text-6xl lg:text-8xl font-semibold text-[#D90027]`}>MARKAS</h2>
                    <span className='text-xl md:text-4xl font-light'>A hub for startup founders to grow with the ecosystem.</span>
                </div>
            </div>
            <Filosofi />
            <Karakteristik />
            <Kolaborasi />
            <CardKerjaSama />
            <div className="py-32 text-center">
                <span className='text-2xl font-light '>Gain Knowledge, Get Mentored, Expand Network</span>
            </div>
        </div>
    )
}
