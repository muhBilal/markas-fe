"use client";

import Image from "next/image";
import Container from "./component/Container";
import Hero from "./component/home/Hero";
import Marquee from "./component/home/Marquees";
import Qoutes from "./component/home/Quotes";
import OrderStep from "./component/home/OrderStep";

import {initFlowbite} from "flowbite";
import React, {useEffect, useState} from "react";
import Filosofi from "./component/home/Filosofi";
import CardPhoto from "./component/card/CardPhoto";
import CardKerjaSama from "./component/card/CardKerjasama";
import Join from "./component/home/Join";
import Lokasi from "./component/Lokasi";
import Event from "./component/home/Event";
import {Button} from "flowbite-react";
import Link from "next/link";
import Karakteristik from "./component/Karakteristik";
import Faq from "./component/home/Faq";
import Wave from "./component/Wave";
import axios from "axios";
export default function Home() {
    const [formData, setFormData] = useState({
        name: '',
        profile: '',
        company: '',
        location: 'Surabaya',
        place_id: 5,
        message: '',
        rating: '',
    })
    const handleSubmit = async () => {
        const result = await axios.post(process.env.NEXT_PUBLIC_API_URL + '/api/v1/admin/testimonial', formData)
        console.log(result)
        alert('okok')
    }

    useEffect(() => {
        initFlowbite();
    }, []);

    return (
        <div className="bg-white">
            <Button
                className="bg-[#D90027] fixed z-50 bottom-0 right-0 m-5 rounded-full w-[50px] h-[50px]"
                href="#top"
            >
                <Image
                    alt="image"
                    src={"/static/img/icon-float-btn.svg"}
                    width={150}
                    height={150}
                />
            </Button>
            <div id="top">
                <Hero/>
                <Marquee/>
                <Event/>
                {/* <OrderStep /> */}
                <Filosofi/>
                <div className="bg-[#D90027] flex flex-col gap-y-8  p-16 text-center ">
                    <h2 className="uppercase font-extrabold text-2xl md:text-4xl text-white">
                        Mari Berkolaborasi
                    </h2>
                    <div className="flex justify-center">
                        <Link
                            href={"https://www.instagram.com/markas.indonesia/"}
                            target="_blank"
                        >
              <span className=" text-[#D90027] rounded-full bg-white px-16 py-3 font-semibold">
                Booking
              </span>
                        </Link>
                    </div>
                </div>
                <Karakteristik/>
                <Wave/>
                <Faq/>
                <CardPhoto/>
                <CardKerjaSama/>
                <Join/>

                <Container>
                    <div className="flex flex-col md:flex-row justify-between lg:px-32 md:mt-32 mt-20">
                        <div className="flex flex-col">
                            <h1 className="text-xl md:text-2xl lg:text-4xl font-bold uppercase text-center md:text-left">Komentar</h1>
                            <p className="text-gray-500 mt-5 xl:mt-20 text-sm md:text-md xl:text-xl md:w-[300px] lg:w-[350px] xl:w-[500px] 2xl:w-[700px] text-center md:text-left">
                                Kirim Pendapatmu Tentang Markas, kirim saran dan kritikmu agar markas menjadi lebih baik
                                untuk kedepannya dalam mengembangkan generasi muda bangsa.
                            </p>
                        </div>
                        <div className="shadow-xl rounded-md xl:p-10 p-5 mt-10 md:mt-0 border">
                            <form className="max-w-sm mx-auto">
                                {/*<div className="md:grid grid-cols-2 gap-5">*/}
                                <div className="min-w-[25rem]">
                                    <div className="mb-5">
                                        <label for="name"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nama</label>
                                        <input type="text" id="name"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder='admin magang' required
                                               onChange={(e) => formData.name = e.target.value}/>
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="company"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
                                        <input type="text" id="company"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="Markas" required
                                        onChange={(e) => formData.company = e.target.value}/>
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="rating"
                                               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rating</label>
                                        <input type="number" id="rating"
                                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                               placeholder="5" required
                                        onChange={(e) => formData.rating = e.target.value}/>
                                    </div>
                                    <div className="mb-5 col-span-2">
                                        <label for="message"
                                               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pesan
                                            yang ingin disampaikan</label>
                                        <textarea id="message" rows="4"
                                                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                  placeholder="Tulis pesan disini"
                                                  onChange={(e) => formData.message = e.target.value}
                                        ></textarea>
                                    </div>
                                </div>
                                <button type="button"
                                        onClick={handleSubmit}
                                        className="text-white bg-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
