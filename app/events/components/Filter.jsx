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
        <div className="flex flex-col items-center gap-8 px-32 text-center">
          <h2
            className={`text-[#D90027] font-semibold ${lexend_peta.className} text-2xl  uppercase`}
          >
            Event
          </h2>
          <h2 className="text-4xl font-bold uppercase">
            ikuti kegiatan dimarkas
          </h2>

          <form className="w-full mt-5">
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
                className="block w-full pr-20 text-sm font-light text-gray-900 bg-white border-none rounded-full shadow-lg p-7 placeholder:text-gray-400 placeholder:text-lg xl:placeholder:text-2xl focus:ring-red-500 focus:border-red-500"
                placeholder="Cari event yang ada di MARKAS Surabaya"
                required
              />
              {!isShow ? (
                <div
                  onClick={() => setisShow(true)}
                  type="button"
                  className="absolute px-4 py-2 text-sm text-white cursor-pointer end-5 bottom-5 focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <svg className="w-6 h-6 text-gray-800 cursor-pointer dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                    <path d="M18.85 1.1A1.99 1.99 0 0 0 17.063 0H2.937a2 2 0 0 0-1.566 3.242L6.99 9.868 7 14a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 13 17l.01-7.134 5.66-6.676a1.99 1.99 0 0 0 .18-2.09Z" />
                  </svg>
                </div>
              ) : (
                <div
                  onClick={() => setisShow(false)}
                  type="button"
                  className="text-white cursor-pointer absolute top-0 end-2.5 bottom-2.5 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  tutup

                  <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                </div>
              )}

              {isShow && (<>

                <div className="p-12 font-medium">
                  <h2 className="text-xl uppercase text-start">Ruangan</h2>
                  <div className="flex flex-wrap gap-8 mt-8">
                    <span className="px-3 py-1 xl:px-7 xl:py-4 xl:text-xl bg-white border rounded-full border-black hover:border-[#D90027] hover:text-[#D90027] cursor-pointer">
                      Ruangan 1
                    </span>
                    <span className="px-3 py-1 xl:px-7 xl:py-4 xl:text-xl bg-white border rounded-full border-black hover:border-[#D90027] hover:text-[#D90027] cursor-pointer">
                      Ruangan 1
                    </span>
                    <span className="px-3 py-1 xl:px-7 xl:py-4 xl:text-xl bg-white border rounded-full border-black hover:border-[#D90027] hover:text-[#D90027] cursor-pointer">
                      Ruangan 1
                    </span>
                    <span className="px-3 py-1 xl:px-7 xl:py-4 xl:text-xl bg-white border rounded-full border-black hover:border-[#D90027] hover:text-[#D90027] cursor-pointer">
                      Ruangan 1
                    </span>
                    <span className="px-3 py-1 xl:px-7 xl:py-4 xl:text-xl bg-white border rounded-full border-black hover:border-[#D90027] hover:text-[#D90027] cursor-pointer">
                      Ruangan 1
                    </span>
                    <span className="px-3 py-1 xl:px-7 xl:py-4 xl:text-xl bg-white border rounded-full border-black hover:border-[#D90027] hover:text-[#D90027] cursor-pointer">
                      Ruangan 1
                    </span>
                    <span className="px-3 py-1 xl:px-7 xl:py-4 xl:text-xl bg-white border rounded-full border-black hover:border-[#D90027] hover:text-[#D90027] cursor-pointer">
                      Ruangan 1
                    </span>
                  </div>
                  <h2 className="mt-10 text-xl uppercase text-start">
                    Jenis Kegiatan
                  </h2>
                  <div className="flex flex-wrap gap-8 mt-8">
                    <span className="px-3 py-1 xl:px-7 xl:py-4 xl:text-xl bg-white border rounded-full border-black hover:border-[#D90027] hover:text-[#D90027] cursor-pointer">
                      Ruangan 1
                    </span>
                    <span className="px-3 py-1 xl:px-7 xl:py-4 xl:text-xl bg-white border rounded-full border-black hover:border-[#D90027] hover:text-[#D90027] cursor-pointer">
                      Ruangan 1
                    </span>
                    <span className="px-3 py-1 xl:px-7 xl:py-4 xl:text-xl bg-white border rounded-full border-black hover:border-[#D90027] hover:text-[#D90027] cursor-pointer">
                      Ruangan 1
                    </span>
                    <span className="px-3 py-1 xl:px-7 xl:py-4 xl:text-xl bg-white border rounded-full border-black hover:border-[#D90027] hover:text-[#D90027] cursor-pointer">
                      Ruangan 1
                    </span>
                    <span className="px-3 py-1 xl:px-7 xl:py-4 xl:text-xl bg-white border rounded-full border-black hover:border-[#D90027] hover:text-[#D90027] cursor-pointer">
                      Ruangan 1
                    </span>
                    <span className="px-3 py-1 xl:px-7 xl:py-4 xl:text-xl bg-white border rounded-full border-black hover:border-[#D90027] hover:text-[#D90027] cursor-pointer">
                      Ruangan 1
                    </span>
                    <span className="px-3 py-1 xl:px-7 xl:py-4 xl:text-xl bg-white border rounded-full border-black hover:border-[#D90027] hover:text-[#D90027] cursor-pointer">
                      Ruangan 1
                    </span>
                  </div>
                  <h2 className="mt-10 text-xl uppercase text-start">Ruangan</h2>
                  {/* tanggal kegiatan pke datepicker */}
                  <div className="flex flex-col gap-5 mt-10 md:flex-row">
                    <button className="rounded-full border text-[#D90027] border-[#D90027] p-4 md:px-8">
                      Clear Filter
                    </button>
                    <button className="text-white rounded-full bg-[#D90027] p-4 md:px-8">
                      Apply Filter
                    </button>
                  </div>
                </div>
              </>)}
            </div>
          </form>
        </div>

        <div className="px-32 mt-10">
          <div className="flex flex-wrap items-center justify-center w-full gap-4 p-6 text-center border rounded-xl sm:rounded-full lg:text-left sm:justify-between xl:p-3">
            <div className="hover:bg-[#D90027] hover:text-white rounded-full p-3 font-bold text-lg xl:text-xl px-4  lg:px-6 2xl:px-12 cursor-pointer">
              Kegiatan Hari ini
            </div>
            <div className="hover:bg-[#D90027] hover:text-white rounded-full p-3 font-bold text-lg xl:text-xl px-4  lg:px-6 2xl:px-12 cursor-pointer">
              Minggu ini
            </div>
            <div className="hover:bg-[#D90027] hover:text-white rounded-full p-3 font-bold text-lg xl:text-xl px-4  lg:px-6 2xl:px-12 cursor-pointer">
              Meeting
            </div>
            <div className="hover:bg-[#D90027] hover:text-white rounded-full p-3 font-bold text-lg xl:text-xl px-4  lg:px-6 2xl:px-12 cursor-pointer">
              Workshop
            </div>
            <div className="hover:bg-[#D90027] hover:text-white rounded-full p-3 font-bold text-lg xl:text-xl px-4  lg:px-6 2xl:px-12 cursor-pointer">
              Talkshow
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-1 gap-5 p-16 sm:grid-cols-2 md:grid-cols-3 gap-y-12 md:gap-y-0">
          <div className="flex flex-col gap-5">
            <Image
      alt="image"
              src="/static/img/ruangbelajar.png"
              width={300}
              height={300}
              className="rounded-xl"
            />
            <h2 className={`text-[#D90027] font-light text-lg `}>
              Gain Knowledge
            </h2>
            <h2 className={`font-semibold text-2xl `}>Ruang Belajar</h2>
            <span className={`font-light text-lg`}>
              MARKAS sangat mengedepankan kegunaan ruang untuk menunjang
              aktivitas penggunanya.
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <Image
      alt="image"
              src="/static/img/tempatkonsultasi.png"
              width={300}
              height={300}
              className="rounded-xl"
            />
            <h2 className={`text-[#D90027] font-light text-lg `}>
              Get Mentored
            </h2>
            <h2 className={`font-semibold text-2xl `}>Tempat Berkonsultasi</h2>
            <span className={`font-light text-lg `}>
              Fasilitas pertemuan singkat maupun diskusi panjang untuk mengolah
              ide menjadi nyata.
            </span>
          </div>
          <div className="flex flex-col gap-5">
            <Image
      alt="image"
              src="/static/img/kolaborasi.png"
              width={300}
              height={300}
              className="rounded-xl"
            />
            <h2 className={`text-[#D90027] font-light text-lg `}>
              Expand Network
            </h2>
            <h2 className={`font-semibold text-2xl `}>Wadah Berkolaborasi</h2>
            <span className={`font-light text-md `}>
              Area kerja bersama yang dapat diakses para startup founder dan
              stakeholder startup.
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            href={"https://www.instagram.com/markas.indonesia/"}
            target="_blank"
            className=""
          >
            <span className="text-white rounded-full bg-[#D90027] p-4 px-8">
              Cari Tahu Lebih
            </span>
          </Link>
        </div> */}
      </div>
    </Container>
  );
};

export default Filter;
