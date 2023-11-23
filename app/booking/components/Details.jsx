"use client";
import { Lexend_Peta } from "next/font/google";
import Container from '@/app/component/Container'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
const lexend_peta = Lexend_Peta({ subsets: ["latin"], weight: ["400", "700"] });

const Details = ({data, handleFilterData}) => {
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
                            <h2 className="font-bold text-md md:text-2xl lg:text-4xl uppercase my-3 md:my-5">
                                {item.title}, {item.regional.name}
                            </h2>
                            <p className="text-gray-500 text-sm md:text-lg">{item.address}</p>

                            <div className="flex flex-col md:flex-row mt-10 lg:mt-20 gap-5">
                                <Image
                alt="image"
                                    src={'/static/img/kolaborasi.png'}
                                    width={1200}
                                    height={800}
                                    className="rounded-xl"
                                />
                                <div className="flex flex-col justify-start items-start gap-5">
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
                                    <button className="border-black border-2 px-4 xl:px-44 py-2 text-sm lg:text-2xl rounded hover:border-primary hover:text-primary transition-all">+19 Foto</button>
                                    {/* <Image
                alt="image"
                                        src={'/static/img/kolaborasi.png'}
                                        width={380}
                                        height={380}
                                        className="rounded-xl"
                                    /> */}
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-3 md:gap-5 mt-10 lg:mt-20">
                                <Link href={'#fasilitas-gedung'} className="border border-black px-4 py-3 hover:border-primary hover:text-primary transition-all text-sm">Fasilitas Gedung</Link>
                                <Link href={'#detail-lokasi'} className="border border-black px-4 py-3 hover:border-primary hover:text-primary transition-all text-sm">Detail Lokasi</Link>
                                <Link href={'#tipe-ruangan'} className="border border-black px-4 py-3 hover:border-primary hover:text-primary transition-all text-sm">Pilih Tipe Ruangan</Link>
                                <Link href={'#peraturan'} className="border border-black px-4 py-3 hover:border-primary hover:text-primary transition-all text-sm">Peraturan</Link>
                                <Link href={'#faq'} className="border border-black px-4 py-3 hover:border-primary hover:text-primary transition-all text-sm">FAQ</Link>
                                <Link href={'#testimoni'} className="border border-black px-4 py-3 hover:border-primary hover:text-primary transition-all text-sm">Testimoni</Link>
                            </div>

                            <div className="mt-10 lg:mt-20" id="fasilitas-gedung">
                                <h1 className="text-md md:text-2xl lg:text-4xl font-bold">Fasilitas Gedung</h1>

                                <div className="grid grid-cols-2 md:grid-cols-3 mt-10 gap-5">
                                    {
                                        item.facilities.map(f => (
                                            <p className="text-sm md:text-lg">&#9989; {f.name}</p>
                                        ))
                                    }
                                </div>
                            </div>

                            <div className="mt-10 lg:mt-20" id="detail-lokasi">
                                <h1 className="text-md md:text-2xl lg:text-4xl font-bold">Detail Lokasi</h1>

                                <div className="block border-2 border-black p-6 bg-white rounded-lg shadow mt-10">
                                    <div className="lg:grid grid-cols-2 gap-6">
                                        <div className="border border-black rounded-md">
                                            <iframe src={item.address_url} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
                                        </div>
                                        <div className="right-content mt-5 lg:mt-0">
                                            <h1 className="font-bold text-md md:text-lg lg:text-xl">Detail Alamat</h1>
                                            <p className="text-gray-500 mt-2 md:mt-5 text-sm md:text-md lg:text-lg">
                                                {item.address}
                                            </p>

                                            <hr className="border-1 border-black my-5 md:my-10" />

                                            <div className="font-bold text-md md:text-lg lg:text-xl">Tempat Terdekat</div>

                                            <div className="flex flex-col w-100 mt-5 gap-7">
                                                {
                                                    item.location_nearest_area?.map(n => {
                                                        <div className="flex justify-between">
                                                            <div className="left-content">
                                                                <h1 className="font-bold text-md md:text-lg lg:text-xl">{n.name}</h1>
                                                                <p className="text-gray-500 text-sm md:text-md lg:text-lg">{n.desc}</p>
                                                            </div>
                                                            <div className="right-content">
                                                                <p className="text-gray-500 text-sm md:text-md lg:text-lg">{n.time} menit</p>
                                                            </div>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-10 lg:mt-40" id="tipe-ruangan">
                                <h1 className="font-bold text-md md:text-2xl lg:text-4xl">Tipe Ruangan</h1>
                                {
                                    item.rooms?.map(r => (
                                        <div className="flex flex-col mt-5 lg:mt-10 gap-3 lg:gap-6">
                                            <div className="block border-2 border-black p-6 bg-white rounded-lg shadow mt-10">
                                                <h1 className="font-bold text-md md:text-lg lg:text-2xl uppercase">hall ukuran besar</h1>
                                                <div className="lg:grid grid-cols-2  gap-3 lg:gap-6 mt-5">
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
                                                        <p className="text-gray-500 mt-2 md:mt-10 text-sm md:text-md lg:text-lg">
                                                            {
                                                                r.description
                                                            }
                                                        </p>

                                                        <div className="text-md md:text-lg lg:text-xl text-primary mt-5 md:mt-10">Fasilitas:</div>

                                                        <ul className="grid grid-cols-2 lg:grid-cols-3 w-100 mt-5 gap-3">
                                                            <li className="list-disc ms-5 text-sm md:text-md">Tempat Duduk</li>
                                                            <li className="list-disc ms-5 text-sm md:text-md">Toilet</li>
                                                            <li className="list-disc ms-5 text-sm md:text-md">Ruangan Ber AC</li>
                                                            <li className="list-disc ms-5 text-sm md:text-md">Ruangan Kedap Suara</li>
                                                            <li className="list-disc ms-5 text-sm md:text-md">Tempat Makan</li>
                                                            <li className="list-disc ms-5 text-sm md:text-md">Tempat Sholat</li>
                                                        </ul>

                                                        <div className="text-md md:text-lg lg:text-xl text-primary mt-10">Kapasitas Maksimal: <span className="text-black text-md md:text-lg lg:text-xl">{r.max_capacity} orang</span></div>
                                                        <div className="mt-10">
                                                            <button className='rounded bg-primary text-white py-3 px-8' onClick={() => handleBookEvent(item.title, item.regional.name, r.name)}>Booking</button>
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
            <div className="mt-20 lg:mt-40 bg-primary p-5 lg:p-20">
                <Container>
                    <h2 id="peraturan" className="text-white font-bold text-md md:text-2xl lg:text-4xl">
                        Hal yang Perlu Diperhatikan
                    </h2>

                    <div className="mt-10 lg:mt-20 lg:grid grid-cols-2 gap-12">
                        <div className="flex gap-5 mb-5 lg:mb-0">
                            <div className="text-content">
                                <h2 className="text-white font-bold text-md md:text-lg lg:text-xl xl:text-2xl">1.</h2>
                            </div>
                            <div className="text-content">
                                <h2 className="text-white font-bold text-md md:text-lg lg:text-xl xl:text-2xl">Membawa Botol Minum Pribadi</h2>
                                <p className="text-white mt-2 lg:mt-5 text-sm md:text-md">
                                    Selama berada di MARKAS, para pengunjung diwajibkan untuk membawa botol minum pribadi yang dapat diisi ulang dengan dispenser yang tersedia dibeberapa titik.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-5 lg:mb-0">
                            <div className="text-content">
                                <h2 className="text-white font-bold text-md md:text-lg lg:text-xl xl:text-2xl">4.</h2>
                            </div>
                            <div className="text-content">
                                <h2 className="text-white font-bold text-md md:text-lg lg:text-xl xl:text-2xl">Tidak Membawa Hewan</h2>
                                <p className="text-white mt-2 lg:mt-5 text-sm md:text-md">
                                Demi kenyamanan bersama, harap tidak membawa masuk hewan peliharaan ataupun binatang lain kedalam area MARKAS.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-5 lg:mb-0">
                            <div className="text-content">
                                <h2 className="text-white font-bold text-md md:text-lg lg:text-xl xl:text-2xl">2.</h2>
                            </div>
                            <div className="text-content">
                                <h2 className="text-white font-bold text-md md:text-lg lg:text-xl xl:text-2xl">Reschedule dan Replace Ruangan</h2>
                                <p className="text-white mt-2 lg:mt-5 text-sm md:text-md">
                                Setiap penggantian jadwal atau penggantian tipe ruangan dapat dilakukan selambat-lambatnya 3 hari sejak masa pemesanan.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-5 lg:mb-0">
                            <div className="text-content">
                                <h2 className="text-white font-bold text-md md:text-lg lg:text-xl xl:text-2xl">5.</h2>
                            </div>
                            <div className="text-content">
                                <h2 className="text-white font-bold text-md md:text-lg lg:text-xl xl:text-2xl">Menjaga Kebersihan Ruangan</h2>
                                <p className="text-white mt-2 lg:mt-5 text-sm md:text-md">
                                Demi kenyamanan bersama, harap menjaga fasilitas yang berada didalam area MARKAS. Setiap fasilitas yang dirusakkan harus diganti seperti sediakala.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-5 lg:mb-0">
                            <div className="text-content">
                                <h2 className="text-white font-bold text-md md:text-lg lg:text-xl xl:text-2xl">3.</h2>
                            </div>
                            <div className="text-content">
                                <h2 className="text-white font-bold text-md md:text-lg lg:text-xl xl:text-2xl">Harap Melepas Alas Kaki</h2>
                                <p className="text-white mt-2 lg:mt-5 text-sm md:text-md">
                                Demi menjaga kebersihan ruangan, setiap pengunjung MARKAS harap melepaskan alas kaki dan meletakkannya pada tempat penyimpanan khusus alas kaki yang telah tersedia di area beranda.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 mb-5 lg:mb-0">
                            <div className="text-content">
                                <h2 className="text-white font-bold text-md md:text-lg lg:text-xl xl:text-2xl">6.</h2>
                            </div>
                            <div className="text-content">
                                <h2 className="text-white font-bold text-md md:text-lg lg:text-xl xl:text-2xl">Area Bebas Asap Rokok</h2>
                                <p className="text-white mt-2 lg:mt-5 text-sm md:text-md">
                                Demi kenyamanan bersama, harap tidak menyalakan rokok dalam bentuk apapun selama berada didalam area MARKAS. Setiap pelanggar akan dikenakan denda sanksi.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Details