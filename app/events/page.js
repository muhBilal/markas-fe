"use client";
import { initFlowbite } from "flowbite";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useEffect } from "react";
import Filter from "./components/Filter";
import { CardEvent } from "@/app/component/card/CardEvent";
import Link from "next/link";
import Container from "../component/Container";
export default function page() {
  useEffect(() => {
    initFlowbite();
  });
  return (
    <div className="bg-white">
      <Button
        className="bg-[#D90027] fixed z-20 bottom-0 right-0 m-5 rounded-full w-[50px] h-[50px]"
        href=""
      >
        <Image
          src={"/static/img/icon-float-btn.svg"}
          width={150}
          height={150}
        />
      </Button>
      <div>
        <Filter />
        <Container>
          <CardEvent />
        </Container>
        <div className=' flex flex-col gap-y-8 py-32  px-16 text-center '>
          <h2 className='uppercase font-extrabold text-4xl text-primary'>Mari Berkolaborasi</h2>
          <div className='flex justify-center'>
            <Link
              href={"https://www.instagram.com/markas.indonesia/"}
              target="_blank">
              <span className=" text-white rounded-full bg-primary px-16 py-3 font-semibold">Booking</span>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
}
