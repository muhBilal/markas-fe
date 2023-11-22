"use client";
import { initFlowbite } from "flowbite";
import { Button } from "flowbite-react";
import Image from "next/image";
import { useEffect } from "react";
import Filter from "./components/Filter";
import Details from "./components/Details";

export default function page() {
  useEffect(() => {
    initFlowbite();
  });
  return (
    <div className="bg-white">
      <Button
        className="bg-[#D90027] fixed z-20 bottom-0 right-0 m-5 rounded-full w-[50px] h-[50px]"
      >
        <Image
      alt="image"
          src={"/static/img/icon-float-btn.svg"}
          width={150}
          height={150}
        />
      </Button>
      <div>
        <Filter/>
        <Details />
      </div>
    </div>
  );
}
