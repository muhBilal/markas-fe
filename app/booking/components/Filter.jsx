import { Lexend_Peta } from "next/font/google";
import Link from "next/link";
import Container from "../../component/Container";
import Image from "next/image";
import { useState } from "react";
import Details from "@/app/booking/components/Details";
const lexend_peta = Lexend_Peta({ subsets: ["latin"], weight: ["400", "700"] });

const Filter = ({data}) => {
  const [isShow, setisShow] = useState(false);
  const [active, setActive] = useState();
  const [filteredData, setFilteredData] = useState([]);
  const [filtered, setFiltered] = useState();
  const handleCity = (city) => {
    setActive(city)
    const filteredData = data.filter(item => item.regional.name === city);
    setFilteredData(filteredData)
    setFiltered(true)
  }

  const handleSearch = (key) => {
    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(key.toLowerCase())
    );
    setFilteredData(filteredData)
    setFiltered(true)
  }

  return (
    <Container>
      <div className="py-10 lg:py-28">
        <div className="lg:px-32 md:px-20 text-center flex flex-col gap-4 lg:gap-8 items-center">
          <h2
            className={`text-[#D90027] font-semibold ${lexend_peta.className} text-sm md:text-xl lg:text-2xl  uppercase`}
          >
            Booking
          </h2>
          <h2 className="font-bold text-md md:text-2xl lg:text-4xl uppercase">
            CARI MARKAS DI SEKITARMU!
          </h2>

          <form className="w-full lg:mt-5">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative bg-gray-100 items-center shadow-md w-full rounded-[2.5rem]">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 lg:p-6 text-sm md:text-lg lg:text-xl text-gray-900 border-none 2xl:pr-20 placeholder:text-gray-400 font-light placeholder:text-sm md:placeholder:text-lg xl:placeholder:text-xl rounded-full bg-white shadow-lg focus:ring-red-500 focus:border-red-500"
                placeholder="Cari “Kota Surabaya” atau “Sidosermo”"
                required
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </form>
        </div>

        <div className="px-10 md:px-20 lg:px-32 mt-10">
          <div className="border border-black justify-center rounded-xl sm:rounded-full w-full items-center flex flex-wrap text-center lg:text-left sm:justify-between gap-4 p-2 md:p-2 xl:p-3">
            <div
                onClick={() => handleCity('Surabaya')}
                className={`rounded-full font-bold text-sm md:text-lg xl:text-xl px-4 lg:px-6 2xl:px-12 cursor-pointer py-2 md:py-4 ${
                    active === 'Surabaya' ? 'bg-[#D90027] text-white' : ''
                }`}
            >
              Surabaya
            </div>
            <div
                onClick={() => handleCity('Jakarta')}
                className={`rounded-full font-bold text-sm md:text-lg xl:text-xl px-4 lg:px-6 2xl:px-12 cursor-pointer py-2 md:py-4 ${
                    active === 'Jakarta' ? 'bg-[#D90027] text-white' : ''
                }`}
            >
              Jakarta
            </div>
            <div
                onClick={() => handleCity('Bandung')}
                className={`rounded-full font-bold text-sm md:text-lg xl:text-xl px-4 lg:px-6 2xl:px-12 cursor-pointer py-2 md:py-4 ${
                    active === 'Bandung' ? 'bg-[#D90027] text-white' : ''
                }`}
            >
              Bandung
            </div>
            <div
                onClick={() => handleCity('Depnasar')}
                className={`rounded-full font-bold text-sm md:text-lg xl:text-xl px-4 lg:px-6 2xl:px-12 cursor-pointer py-2 md:py-4 ${
                    active === 'Depnasar' ? 'bg-[#D90027] text-white' : ''
                }`}
            >
              Denpasar
            </div>
          </div>
        </div>
      </div>

      {/* <Details data={filteredData} filters={filtered} /> */}
    </Container>
  );
};

export default Filter;
