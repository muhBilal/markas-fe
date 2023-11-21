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

export default function Home() {
  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <div className='bg-white'>
      <div>
        <Hero />
        <Marquee />
        <Qoutes />
        <OrderStep />
        <Filosofi />
        <CardPhoto />
        <CardKerjaSama />
        <Join />
      </div>
    </div>

  )
}
