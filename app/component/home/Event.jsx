"use client";
import Container from "../Container";
import { Swiper, SwiperSlide } from 'swiper/react'
import { CardEvent } from "../card/CardEvent";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { useRef } from "react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const Event = () => {
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
        <Container>
            <div className="py-32">
                <div className=" py-8">
                    <div className="grid grid-cols-2 items-center">
                        <div className="">
                            <h2 className="uppercase font-extrabold text-2xl">Ikuti Kegiatan Kami di Markas</h2>
                            <h2 className=" font-light text-lg">Jangan lewatkan event-event seru di MARKAS</h2>
                        </div>
                        <div className="flex gap-x-4 justify-end">
                            <button onClick={goToPrevSlide} className="border-black border-[2px] rounded-full px-2 py-2 swiper-button-prev">
                                <RxCaretLeft className="text-4xl font-extrabold" />
                            </button>
                            <button onClick={goToNextSlide} className="border-black border-[2px] rounded-full px-2 py-2 swiper-button-next">
                                <RxCaretRight className="text-4xl font-extrabold" />
                            </button>
                        </div>
                    </div>
                </div>


                <Swiper
                    modules={[Navigation]}
                    ref={swiperRef}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation={{
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next',
                    }}
                >
                    <SwiperSlide>
                        <CardEvent />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardEvent />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardEvent />
                    </SwiperSlide>
                </Swiper>
            </div>
        </Container >
    );
}

export default Event;