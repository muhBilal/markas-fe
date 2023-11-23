"use client";
import { Lexend_Peta } from "next/font/google";
import Container from '@/app/component/Container'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Faq from "@/app/component/home/Faq";
import Wave from "@/app/component/Wave";
const lexend_peta = Lexend_Peta({ subsets: ["latin"], weight: ["400", "700"] });

const Details = ({ data }) => {
    const router = useRouter();

    const handleBookEvent = async (name, regional, room) => {
        localStorage.setItem('markas_place_name', name);
        localStorage.setItem('markas_place_regional', regional);
        localStorage.setItem('markas_place_room', room);

        router.push('/payment');
    }

    return (
        <>
            <Container>
                {
                    data.map(item => (
                        <div className="md:px-20 lg:px-32">
                            <h2
                                className={`text-[#D90027] font-semibold ${lexend_peta.className} text-md md:text-2xl lg:text-4xl  uppercase`}
                            >
                                markas
                            </h2>
                            <h2 className="my-3 font-bold uppercase text-md md:text-2xl lg:text-4xl md:my-5">
                                {item?.title}, {item?.regional?.name}
                            </h2>
                            <p className="text-sm text-gray-500 md:text-lg">{item?.address}</p>

                            <div className="flex flex-col gap-5 mt-10 md:flex-row lg:mt-20">
                                <Image
                                    alt="image"
                                    src={'/static/img/kolaborasi.png'}
                                    width={1200}
                                    height={800}
                                    className="rounded-xl"
                                />
                                <div className="flex flex-col items-start justify-start gap-5">
                                    <Image
                                        alt="image"
                                        src={'/static/img/kolaborasi.png'}
                                        width={480}
                                        height={480}
                                        className="rounded-xl"
                                    />
                                    <Image
                                        alt="image"
                                        src={'/static/img/kolaborasi.png'}
                                        width={480}
                                        height={480}
                                        className="rounded-xl"
                                    />
                                    <button className="px-4 py-2 text-sm transition-all border-2 border-black rounded xl:px-44 lg:text-2xl hover:border-primary hover:text-primary">+19 Foto</button>
                                    {/* <Image
                alt="image"
                                        src={'/static/img/kolaborasi.png'}
                                        width={380}
                                        height={380}
                                        className="rounded-xl"
                                    /> */}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 mt-10 md:gap-5 lg:mt-20">
                                <Link href={'#fasilitas-gedung'} className="px-4 py-3 text-sm transition-all border border-black hover:border-primary hover:text-primary">Fasilitas Gedung</Link>
                                <Link href={'#detail-lokasi'} className="px-4 py-3 text-sm transition-all border border-black hover:border-primary hover:text-primary">Detail Lokasi</Link>
                                <Link href={'#tipe-ruangan'} className="px-4 py-3 text-sm transition-all border border-black hover:border-primary hover:text-primary">Pilih Tipe Ruangan</Link>
                                <Link href={'#peraturan'} className="px-4 py-3 text-sm transition-all border border-black hover:border-primary hover:text-primary">Peraturan</Link>
                                <Link href={'#faq'} className="px-4 py-3 text-sm transition-all border border-black hover:border-primary hover:text-primary">FAQ</Link>
                                <Link href={'#testimoni'} className="px-4 py-3 text-sm transition-all border border-black hover:border-primary hover:text-primary">Testimoni</Link>
                            </div>

                            <div className="mt-10 lg:mt-20" id="fasilitas-gedung">
                                <h1 className="font-bold text-md md:text-2xl lg:text-4xl">Fasilitas Gedung</h1>

                                <div className="grid grid-cols-2 gap-5 mt-10 md:grid-cols-3">
                                    {
                                        item?.facilities?.map(f => (
                                            <p className="text-sm md:text-lg">&#9989; {f.name}</p>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="mt-10 lg:mt-20" id="detail-lokasi">
                                <h1 className="font-bold text-md md:text-2xl lg:text-4xl">Detail Lokasi</h1>

                                <div className="block p-6 mt-10 bg-white border-2 border-black rounded-lg shadow">
                                    <div className="grid-cols-2 gap-6 lg:grid">
                                        <div className="border border-black rounded-md">
                                            <iframe src={item?.address_url} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
                                        </div>
                                        <div className="mt-5 right-content lg:mt-0">
                                            <h1 className="font-bold text-md md:text-lg lg:text-xl">Detail Alamat</h1>
                                            <p className="mt-2 text-sm text-gray-500 md:mt-5 md:text-md lg:text-lg">
                                                {item?.address}
                                            </p>

                                            <hr className="my-5 border-black border-1 md:my-10" />

                                            <div className="font-bold text-md md:text-lg lg:text-xl">Tempat Terdekat</div>

                                            <div className="flex flex-col mt-5 w-100 gap-7">
                                                {/* {
                                                    item?.location_nearest_area?.map(n => {
                                                        <div className="flex justify-between">
                                                            <div className="left-content">
                                                                <h1 className="font-bold text-md md:text-lg lg:text-xl">{n.name}</h1>
                                                                <p className="text-sm text-gray-500 md:text-md lg:text-lg">{n.desc}</p>
                                                            </div>
                                                            <div className="right-content">
                                                                <p className="text-sm text-gray-500 md:text-md lg:text-lg">{n.time} menit</p>
                                                            </div>
                                                        </div>
                                                    })
                                                } */}
                                                <div className="flex justify-between">
                                                            <div className="left-content">
                                                                <h1 className="font-bold text-md md:text-lg lg:text-xl">Plaza Marina</h1>
                                                                <p className="text-sm text-gray-500 md:text-md lg:text-lg">Pusat perbelanjaan dan hiburan</p>
                                                            </div>
                                                            <div className="right-content">
                                                                <p className="text-sm text-gray-500 md:text-md lg:text-lg">5 menit</p>
                                                            </div>
                                                        </div>
                                                <div className="flex justify-between">
                                                            <div className="left-content">
                                                                <h1 className="font-bold text-md md:text-lg lg:text-xl">Royal Plaza</h1>
                                                                <p className="text-sm text-gray-500 md:text-md lg:text-lg">Pusat perbelanjaan dan hiburan</p>
                                                            </div>
                                                            <div className="right-content">
                                                                <p className="text-sm text-gray-500 md:text-md lg:text-lg">10 menit</p>
                                                            </div>
                                                        </div>
                                                <div className="flex justify-between">
                                                            <div className="left-content">
                                                                <h1 className="font-bold text-md md:text-lg lg:text-xl">UK Petra</h1>
                                                                <p className="text-sm text-gray-500 md:text-md lg:text-lg">Perguruan Tinggi Universitas</p>
                                                            </div>
                                                            <div className="right-content">
                                                                <p className="text-sm text-gray-500 md:text-md lg:text-lg">15 menit</p>
                                                            </div>
                                                        </div>
                                                <div className="flex justify-between">
                                                            <div className="left-content">
                                                                <h1 className="font-bold text-md md:text-lg lg:text-xl">Trans Icon</h1>
                                                                <p className="text-sm text-gray-500 md:text-md lg:text-lg">Pusat perbelanjaan dan hiburan</p>
                                                            </div>
                                                            <div className="right-content">
                                                                <p className="text-sm text-gray-500 md:text-md lg:text-lg">15 menit</p>
                                                            </div>
                                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-10 lg:mt-40" id="tipe-ruangan">
                                <h1 className="font-bold text-md md:text-2xl lg:text-4xl">Tipe Ruangan</h1>
                                {
                                    item?.rooms?.map(r => (
                                        <div className="flex flex-col gap-3 mt-5 lg:mt-10 lg:gap-6">
                                            <div className="block p-6 mt-10 bg-white border-2 border-black rounded-lg shadow">
                                                <h1 className="font-bold uppercase text-md md:text-lg lg:text-2xl">{ r.room_type.name }</h1>
                                                <div className="grid-cols-2 gap-3 mt-5 lg:grid lg:gap-6">
                                                    <div className="rounded-md">
                                                        <Image
                                                            alt="image"
                                                            src={'/static/img/kolaborasi.png'}
                                                            width={800}
                                                            height={400}
                                                            className="rounded-xl"
                                                        />
                                                    </div>
                                                    <div className="right-content">
                                                        <h2
                                                            className={`text-[#D90027] font-semibold ${lexend_peta.className} text-md md:text-lg lg:text-2xl uppercase mt-5 lg:mt-0`}
                                                        >
                                                            {r.name}
                                                        </h2>
                                                        <p className="mt-2 text-sm text-gray-500 md:mt-10 md:text-md lg:text-lg">
                                                            {
                                                                r.description
                                                            }
                                                        </p>

                                                        <div className="mt-5 text-md md:text-lg lg:text-xl text-primary md:mt-10">Fasilitas:</div>

                                                        <ul className="grid grid-cols-2 gap-3 mt-5 lg:grid-cols-3 w-100">
                                                            <li className="text-sm list-disc ms-5 md:text-md">Tempat Duduk</li>
                                                            <li className="text-sm list-disc ms-5 md:text-md">Toilet</li>
                                                            <li className="text-sm list-disc ms-5 md:text-md">Ruangan Ber AC</li>
                                                            <li className="text-sm list-disc ms-5 md:text-md">Ruangan Kedap Suara</li>
                                                            <li className="text-sm list-disc ms-5 md:text-md">Tempat Makan</li>
                                                            <li className="text-sm list-disc ms-5 md:text-md">Tempat Sholat</li>
                                                        </ul>

                                                        <div className="mt-10 text-md md:text-lg lg:text-xl text-primary">Kapasitas Maksimal: <span className="text-black text-md md:text-lg lg:text-xl">{r.max_capacity} orang</span></div>
                                                        <div className="mt-10">
                                                            <button className='px-8 py-3 text-white rounded bg-primary' onClick={() => handleBookEvent(item?.title, item?.regional.name, r.name)}>Booking</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>

                        </div>
                    ))
                }
            </Container>
            <div className="p-5 mt-20 lg:mt-40 bg-primary lg:p-20">
                <Container>
                    <h2 id="peraturan" className="font-bold text-white text-md md:text-2xl lg:text-4xl">
                        Hal yang Perlu Diperhatikan
                    </h2>

                    <div className="grid-cols-2 gap-12 mt-10 lg:mt-20 lg:grid">
                        <div className="flex gap-5 mb-5 lg:mb-0">
                            <div className="text-content">
                                <h2 className="font-bold text-white text-md md:text-lg lg:text-xl xl:text-2xl">1.</h2>
                            </div>
                            <div className="text-content">
                                <h2 className="font-bold text-white text-md md:text-lg lg:text-xl xl:text-2xl">Membawa Botol Minum Pribadi</h2>
                                <p className="mt-2 text-sm text-white lg:mt-5 md:text-md">
                                    Selama berada di MARKAS, para pengunjung diwajibkan untuk membawa botol minum pribadi yang dapat diisi ulang dengan dispenser yang tersedia dibeberapa titik.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-5 lg:mb-0">
                            <div className="text-content">
                                <h2 className="font-bold text-white text-md md:text-lg lg:text-xl xl:text-2xl">4.</h2>
                            </div>
                            <div className="text-content">
                                <h2 className="font-bold text-white text-md md:text-lg lg:text-xl xl:text-2xl">Tidak Membawa Hewan</h2>
                                <p className="mt-2 text-sm text-white lg:mt-5 md:text-md">
                                    Demi kenyamanan bersama, harap tidak membawa masuk hewan peliharaan ataupun binatang lain kedalam area MARKAS.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-5 lg:mb-0">
                            <div className="text-content">
                                <h2 className="font-bold text-white text-md md:text-lg lg:text-xl xl:text-2xl">2.</h2>
                            </div>
                            <div className="text-content">
                                <h2 className="font-bold text-white text-md md:text-lg lg:text-xl xl:text-2xl">Reschedule dan Replace Ruangan</h2>
                                <p className="mt-2 text-sm text-white lg:mt-5 md:text-md">
                                    Setiap penggantian jadwal atau penggantian tipe ruangan dapat dilakukan selambat-lambatnya 3 hari sejak masa pemesanan.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-5 lg:mb-0">
                            <div className="text-content">
                                <h2 className="font-bold text-white text-md md:text-lg lg:text-xl xl:text-2xl">5.</h2>
                            </div>
                            <div className="text-content">
                                <h2 className="font-bold text-white text-md md:text-lg lg:text-xl xl:text-2xl">Menjaga Kebersihan Ruangan</h2>
                                <p className="mt-2 text-sm text-white lg:mt-5 md:text-md">
                                    Demi kenyamanan bersama, harap menjaga fasilitas yang berada didalam area MARKAS. Setiap fasilitas yang dirusakkan harus diganti seperti sediakala.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-5 lg:mb-0">
                            <div className="text-content">
                                <h2 className="font-bold text-white text-md md:text-lg lg:text-xl xl:text-2xl">3.</h2>
                            </div>
                            <div className="text-content">
                                <h2 className="font-bold text-white text-md md:text-lg lg:text-xl xl:text-2xl">Harap Melepas Alas Kaki</h2>
                                <p className="mt-2 text-sm text-white lg:mt-5 md:text-md">
                                    Demi menjaga kebersihan ruangan, setiap pengunjung MARKAS harap melepaskan alas kaki dan meletakkannya pada tempat penyimpanan khusus alas kaki yang telah tersedia di area beranda.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-5 lg:mb-0">
                            <div className="text-content">
                                <h2 className="font-bold text-white text-md md:text-lg lg:text-xl xl:text-2xl">6.</h2>
                            </div>
                            <div className="text-content">
                                <h2 className="font-bold text-white text-md md:text-lg lg:text-xl xl:text-2xl">Area Bebas Asap Rokok</h2>
                                <p className="mt-2 text-sm text-white lg:mt-5 md:text-md">
                                    Demi kenyamanan bersama, harap tidak menyalakan rokok dalam bentuk apapun selama berada didalam area MARKAS. Setiap pelanggar akan dikenakan denda sanksi.
                                </p>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>
            <Faq />
            <Wave />
        </>
    )
}

export default Details