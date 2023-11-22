import Container from "../Container";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import Image from "next/image";
import Link from "next/link";
import { CardEvent } from "../card/CardEvent";

const Event = () => {
    return (
        <Container>
            <div className="px-8 py-32">
                <h2 className="uppercase font-extrabold text-2xl">Ikuti Kegiatan Kami di Markas</h2>
                <h2 className=" font-light text-lg">Jangan lewatkan event-event seru di MARKAS</h2>
            </div>

            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
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
        </Container>
    );
}

export default Event;