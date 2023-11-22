import { Lexend_Peta } from "next/font/google";
import Link from "next/link";
import Container from "../../component/Container";
import Image from "next/image";
import { useState } from "react";
const lexend_peta = Lexend_Peta({ subsets: ["latin"], weight: ["400", "700"] });

const Filter = () => {
  const [isShow, setisShow] = useState(false);

  return (
    <Container>
      <div className="py-32 ">
        <div className="px-32 text-center flex flex-col gap-8 items-center">
          <h2
            className={`text-[#D90027] font-semibold ${lexend_peta.className} text-2xl  uppercase`}
          >
            Booking
          </h2>
          <h2 className="font-bold text-4xl uppercase">
            CARI MARKAS DI SEKITARMU!
          </h2>

          <form className="w-full mt-5">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative bg-gray-100 items-center shadow-md w-full rounded-[2.5rem]">
              <input
                type="search"
                id="default-search"
                class="block w-full p-7 text-2xl text-gray-900 border-none pr-20 placeholder:text-gray-400 font-light placeholder:text-lg xl:placeholder:text-2xl rounded-full bg-white shadow-lg focus:ring-red-500 focus:border-red-500"
                placeholder="Cari “Kota Surabaya” atau “Sidosermo”"
                required
              />
            </div>
          </form>
        </div>

        <div className="px-32 mt-10">
          <div className="border border-black justify-center rounded-xl sm:rounded-full w-full items-center flex flex-wrap text-center lg:text-left sm:justify-between gap-4 p-6 xl:p-3">
            <div className="hover:bg-[#D90027] hover:text-white rounded-full font-bold text-lg xl:text-xl px-4 lg:px-6 2xl:px-12 cursor-pointer py-4">
              Surabaya
            </div>
            <div className="hover:bg-[#D90027] hover:text-white rounded-full  font-bold text-lg xl:text-xl px-4  lg:px-6 2xl:px-12 cursor-pointer py-4">
              Jakarta
            </div>
            <div className="hover:bg-[#D90027] hover:text-white rounded-full  font-bold text-lg xl:text-xl px-4  lg:px-6 2xl:px-12 cursor-pointer py-4">
              Bandung
            </div>
            <div className="hover:bg-[#D90027] hover:text-white rounded-full  font-bold text-lg xl:text-xl px-4  lg:px-6 2xl:px-12 cursor-pointer py-4">
              Denpasar
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Filter;
