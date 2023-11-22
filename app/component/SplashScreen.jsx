"use client";
import React from 'react'
import { Lexend_Deca } from "next/font/google";
import { Fade } from "react-awesome-reveal";

const lexend_deca = Lexend_Deca({ subsets: ["latin"] });

const SplashScreen = () => {
  return (
    <Fade>
        <div className='w-screen h-screen bg-white flex justify-center items-center'>
            <h1 className={`${lexend_deca.className} font-bold text-primary uppercase text-7xl text-center`}>markas</h1>
        </div>
    </Fade>
  )
}

export default SplashScreen