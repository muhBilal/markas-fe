"use client";

import Image from 'next/image'
import Container from './component/Container'
import Hero from './component/home/Hero'
import Marquee from './component/home/Marquees'
import Qoutes from './component/home/Quotes'
import OrderStep from './component/home/OrderStep'

import { initFlowbite } from "flowbite";
import { useEffect } from "react";
import Filosofi from './component/home/Filosofi';
import CardPhoto from './component/CardPhoto';
import CardKerjaSama from './component/CardKerjasama';
import Join from './component/home/Join';
import Lokasi from './component/Lokasi';
import Event from './component/home/Event';
import { Button } from 'flowbite-react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div className='bg-white'>
      <Button
        className='bg-[#D90027] fixed z-20 bottom-0 right-0 m-5 rounded-full w-[50px] h-[50px]'
        href=''
      >
        <Image
          src={'/static/img/icon-float-btn.svg'}
          width={150}
          height={150}
        />

      </Button>
      <div>
        <Hero />
        <Marquee />
        <Event />
        {/* <OrderStep /> */}
        <Filosofi />
        <div className='my-32 bg-[#D90027] flex flex-col gap-y-8  p-16 text-center '>
          <h2 className='uppercase font-extrabold text-4xl text-white'>Mari Berkolaborasi</h2>
          <div className='flex justify-center'>
            <Link
              href={"https://www.instagram.com/markas.indonesia/"}
              target="_blank">
              <span className=" text-[#D90027] rounded-full bg-white px-16 py-3 font-semibold">Booking</span>
            </Link>
          </div>
        </div>
        <CardPhoto />
        <CardKerjaSama />
        <Join />
      </div>
    </div>

  )
}
