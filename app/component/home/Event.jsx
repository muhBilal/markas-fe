import Container from "../Container";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from "next/image";
import Link from "next/link";
import { CardEvent } from "../card/CardEvent";
import { Navigation } from 'swiper/modules';
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
const Event = () => {
    return (
        <Container>
            <div className="py-32">
                <div className=" py-8">
                    <div className="grid grid-cols-2 items-center">
                        <div className="">
                            <h2 className="uppercase font-extrabold text-md md:text-2xl">Ikuti Kegiatan Kami di Markas</h2>
                            <h2 className=" font-light text-sm md:text-lg">Jangan lewatkan event-event seru di MARKAS</h2>
                        </div>
                        <div className="flex gap-x-4 justify-end">
                            <button className="border-black border-[2px] rounded-full  px-2 py-2">
                                <RxCaretLeft className="text-2xl md:text-4xl font-extrabold" />
                            </button>
                            <button className="border-black border-[2px] rounded-full  px-2 py-2">
                                <RxCaretRight className="text-2xl md:text-4xl font-extrabold" />
                            </button>
                        </div>
                    </div>



                </div>


                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className=""
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