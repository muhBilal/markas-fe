"use client";
import React, { useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa";

import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import Container from './Container';
import Image from 'next/image';
import SwiperCore, { Navigation } from 'swiper';

SwiperCore.use([Navigation]);

const Wave = () => {
  const swiperRef = useRef(null);

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className="bg-[url('/vector-wave.svg')] bg-cover">
      <Container>
        <div className="py-32">
          <div className=" py-8">
            <div className="grid grid-cols-2 items-center">
              <div className="">
                <h2 className="uppercase font-extrabold text-lg md:text-2xl text-white">Apa Kata Mereka</h2>
                <h2 className=" flex items-center gap-x-1 font-light text-sm md:text-lg text-white "><FaStar className=' text-yellow-300' /> 4.6 | Ulasan di Google</h2>
              </div>
              <div className="flex gap-x-4 justify-end">
                <button onClick={goToPrevSlide} className="border-white border-[2px] rounded-full px-2 py-2 swiper-button-prev">
                  <RxCaretLeft className="text-4xl font-extrabold text-white" />
                </button>
                <button onClick={goToNextSlide} className="border-white border-[2px] rounded-full px-2 py-2 swiper-button-next">
                  <RxCaretRight className="text-4xl font-extrabold text-white" />
                </button>
              </div>
            </div>
          </div>


          <Swiper
            breakpoints={{

              368: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            ref={swiperRef}
            spaceBetween={50}
            slidesPerView={2}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            navigation={{
              prevEl: '.swiper-button-prev',
              nextEl: '.swiper-button-next',
            }}
          >
            <SwiperSlide>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 text-white">
                  <Image
                    alt="image"
                    src={'/static/img/profile.png'}
                    width={50}
                    height={50}
                    className='w-16 md:w-16 2xl:w-24'
                  />
                  <div className="flex flex-col gap-1">
                    <h2 className='font-bold'>Lexi Handi Nayana</h2>
                    <h2 className='font-light'>Lexi Handi Nayana</h2>
                  </div>
                </div>
                <div className="flex gap-2">
                  <FaStar className=' text-yellow-300' />
                  <FaStar className=' text-yellow-300' />
                  <FaStar className=' text-yellow-300' />
                </div>

                <p className='text-white font-normal'>Kami memulai perjalanan kami di MARKAS dan tidak pernah menyesalinya. Tempat yang penuh dengan sumber daya dan inspirasi.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 text-white">
                  <Image
                    alt="image"
                    src={'/static/img/profile.png'}
                    width={50}
                    height={50}
                    className='w-16 md:w-16 2xl:w-24'
                  />
                  <div className="flex flex-col gap-1">
                    <h2 className='font-bold'>Lexi Handi Nayana</h2>
                    <h2 className='font-light'>Lexi Handi Nayana</h2>
                  </div>
                </div>
                <div className="flex gap-2">
                  <FaStar className=' text-yellow-300' />
                  <FaStar className=' text-yellow-300' />
                  <FaStar className=' text-yellow-300' />
                </div>

                <p className='text-white font-normal'>Kami memulai perjalanan kami di MARKAS dan tidak pernah menyesalinya. Tempat yang penuh dengan sumber daya dan inspirasi.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 text-white">
                  <Image
                    alt="image"
                    src={'/static/img/profile.png'}
                    width={50}
                    height={50}
                    className='w-16 md:w-16 2xl:w-24'
                  />
                  <div className="flex flex-col gap-1">
                    <h2 className='font-bold'>Lexi Handi Nayana</h2>
                    <h2 className='font-light'>Lexi Handi Nayana</h2>
                  </div>
                </div>
                <div className="flex gap-2">
                  <FaStar className=' text-yellow-300' />
                  <FaStar className=' text-yellow-300' />
                  <FaStar className=' text-yellow-300' />
                </div>

                <p className='text-white font-normal'>Kami memulai perjalanan kami di MARKAS dan tidak pernah menyesalinya. Tempat yang penuh dengan sumber daya dan inspirasi.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 text-white">
                  <Image
                    alt="image"
                    src={'/static/img/profile.png'}
                    width={50}
                    height={50}
                    className='w-16 md:w-16 2xl:w-24'
                  />
                  <div className="flex flex-col gap-1">
                    <h2 className='font-bold'>Lexi Handi Nayana</h2>
                    <h2 className='font-light'>Lexi Handi Nayana</h2>
                  </div>
                </div>
                <div className="flex gap-2">
                  <FaStar className=' text-yellow-300' />
                  <FaStar className=' text-yellow-300' />
                  <FaStar className=' text-yellow-300' />
                </div>

                <p className='text-white font-normal'>Kami memulai perjalanan kami di MARKAS dan tidak pernah menyesalinya. Tempat yang penuh dengan sumber daya dan inspirasi.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row gap-4 text-white">
                  <Image
                    alt="image"
                    src={'/static/img/profile.png'}
                    width={50}
                    height={50}
                    className='w-16 md:w-16 2xl:w-24'

                  />
                  <div className="flex flex-col gap-1">
                    <h2 className='font-bold'>Lexi Handi Nayana</h2>
                    <h2 className='font-light'>Lexi Handi Nayana</h2>
                  </div>
                </div>
                <div className="flex gap-2">
                  <FaStar className=' text-yellow-300' />
                  <FaStar className=' text-yellow-300' />
                  <FaStar className=' text-yellow-300' />
                </div>

                <p className='text-white font-normal'>Kami memulai perjalanan kami di MARKAS dan tidak pernah menyesalinya. Tempat yang penuh dengan sumber daya dan inspirasi.</p>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
      </Container >
    </div>
  )
}

export default Wave