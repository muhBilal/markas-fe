import React from 'react'
import Hero from '../component/philosophy/Hero'
import Rich from '../component/philosophy/Rich'
import Link from 'next/link'

export default function page() {
  return (
    <div className="">
      <Hero />
      <Rich />
      <div className="md:p-32 py-16 flex flex-col gap-12 items-center">
        <div className="text-2xl md:text-4xl font-semibold text-center">
          “
          <span className='text-primary font-normal'>
            we want you&nbsp;
          </span>
          to be one of those
          <span className='text-primary font-normal'>
            &nbsp;founders
          </span>”
        </div>
        <Link
          href={"https://www.instagram.com/markas.indonesia/"}
          target="_blank">
          <span className="text-white rounded-full bg-[#D90027] p-4 font-semibold">Kunjungi Instagram Kami</span>
        </Link>
      </div>
    </div>
  )
}
