import { Lexend_Peta } from "next/font/google";
import Container from '@/app/component/Container'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
const lexend_peta = Lexend_Peta({ subsets: ["latin"], weight: ["400", "700"] });

const Details = () => {
  return (
    <>
        <Container>
            <div className="px-32">
                <h2
                    className={`text-[#D90027] font-semibold ${lexend_peta.className} text-2xl  uppercase`}
                >
                    markas
                </h2>
                <h2 className="font-bold text-4xl uppercase my-5">
                    sidosermo, surabaya
                </h2>
                <p className="text-gray-500">Jl. Sidosermo II No.106F, Sidosermo, Kec. Wonocolo, Kota Surabaya, Jawa Timur.</p>

                <div className="flex mt-20 gap-5">
                    <Image
                        src={'/static/img/kolaborasi.png'}
                        width={1200}
                        height={800}
                        className="rounded-xl"
                    />
                    <div className="flex flex-col justify-start items-start gap-5">
                        <Image
                            src={'/static/img/kolaborasi.png'}
                            width={480}
                            height={480}
                            className="rounded-xl"
                        />
                        <Image
                            src={'/static/img/kolaborasi.png'}
                            width={480}
                            height={480}
                            className="rounded-xl"
                        />
                        <button className="border-black border-2 px-44 py-2 text-2xl rounded hover:border-primary hover:text-primary transition-all">+19 Foto</button>
                        {/* <Image
                            src={'/static/img/kolaborasi.png'}
                            width={380}
                            height={380}
                            className="rounded-xl"
                        /> */}
                    </div>
                </div>
                
                <div className="flex gap-5 mt-20">
                    <Link href={'#fasilitas-gedung'} className="border border-black px-4 py-3 hover:border-primary hover:text-primary transition-all text-sm">Fasilitas Gedung</Link>
                    <Link href={'#detail-lokasi'} className="border border-black px-4 py-3 hover:border-primary hover:text-primary transition-all text-sm">Detail Lokasi</Link>
                    <Link href={'#tipe-ruangan'} className="border border-black px-4 py-3 hover:border-primary hover:text-primary transition-all text-sm">Pilih Tipe Ruangan</Link>
                    <Link href={'#peraturan'} className="border border-black px-4 py-3 hover:border-primary hover:text-primary transition-all text-sm">Peraturan</Link>
                    <Link href={'#faq'} className="border border-black px-4 py-3 hover:border-primary hover:text-primary transition-all text-sm">FAQ</Link>
                    <Link href={'#testimoni'} className="border border-black px-4 py-3 hover:border-primary hover:text-primary transition-all text-sm">Testimoni</Link>
                </div>

                <div className="mt-20" id="fasilitas-gedung">
                    <h1 className="text-4xl font-bold">Fasilitas Gedung</h1>

                    <div className="grid grid-cols-3 mt-10 gap-5">
                        <p className="text-lg">&#9989; Tempat Parkir</p>
                        <p className="text-lg">&#9989; Perpustakaan</p>
                        <p className="text-lg">&#9989; Air Conditioner</p>
                        <p className="text-lg">&#9989; Dispenser Air</p>
                        <p className="text-lg">&#9989; Rak Sepatu</p>
                        <p className="text-lg">&#9989; Lounge</p>
                        <p className="text-lg">&#9989; Toilet</p>
                        <p className="text-lg">&#9989; Internet</p>
                        <p className="text-lg">&#9989; Mini Kafe</p>
                        <p className="text-lg">&#9989; Petugas</p>
                    </div>
                </div>

                <div className="mt-20" id="detail-lokasi">
                    <h1 className="text-4xl font-bold">Detail Lokasi</h1>

                    <div className="block border-2 border-black p-6 bg-white rounded-lg shadow mt-10">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="border border-black rounded-md">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.027803481915!2d112.6794581!3d-7.381112799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e31836ef6de7%3A0xf3a6ab7c935c0438!2sPT.%20New%20Hope%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1700652206535!5m2!1sid!2sid" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="w-full h-full"></iframe>
                            </div>
                            <div className="right-content">
                                <h1 className="font-bold text-xl">Detail Alamat</h1>
                                <p className="text-gray-500 mt-5 text-lg">
                                Jl. Sidosermo II No.106F, Sidosermo, Kec. Wonocolo, Kota Surabaya, Jawa Timur.
                                </p>

                                <hr className="border-1 border-black my-10" />

                                <div className="font-bold text-xl">Tempat Terdekat</div>

                                <div className="flex flex-col w-100 mt-5 gap-7">
                                    <div className="flex justify-between">
                                        <div className="left-content">
                                            <h1 className="font-bold">Plaza Marina</h1>
                                            <p className="text-gray-500">Pusat perbelanjaan dan hiburan</p>
                                        </div>
                                        <div className="right-content">
                                            <p className="text-gray-500">5 menit</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="left-content">
                                            <h1 className="font-bold">Plaza Marina</h1>
                                            <p className="text-gray-500">Pusat perbelanjaan dan hiburan</p>
                                        </div>
                                        <div className="right-content">
                                            <p className="text-gray-500">5 menit</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="left-content">
                                            <h1 className="font-bold">Plaza Marina</h1>
                                            <p className="text-gray-500">Pusat perbelanjaan dan hiburan</p>
                                        </div>
                                        <div className="right-content">
                                            <p className="text-gray-500">5 menit</p>
                                        </div>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="left-content">
                                            <h1 className="font-bold">Plaza Marina</h1>
                                            <p className="text-gray-500">Pusat perbelanjaan dan hiburan</p>
                                        </div>
                                        <div className="right-content">
                                            <p className="text-gray-500">5 menit</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-40" id="tipe-ruangan">
                    <h1 className="font-bold text-4xl">Tipe Ruangan</h1>

                    <div className="flex flex-col mt-10 gap-6">
                        <div className="block border-2 border-black p-6 bg-white rounded-lg shadow mt-10">
                            <h1 className="font-bold text-2xl uppercase">hall ukuran besar</h1>
                            <div className="grid grid-cols-2 gap-6 mt-5">
                                <div className="rounded-md">
                                    <Image
                                        src={'/static/img/kolaborasi.png'}
                                        width={800}
                                        height={400}
                                        className="rounded-xl"
                                    />
                                </div>
                                <div className="right-content">
                                    <h2
                                        className={`text-[#D90027] font-semibold ${lexend_peta.className} text-3xl uppercase`}
                                    >
                                        tjokro hall
                                    </h2>
                                    <p className="text-gray-500 mt-10 text-lg">
                                    Area komunal
                                    untuk untuk
                                    kegiatan seminar, talkshow, dan workshop.
                                    </p>

                                    <div className="text-xl text-primary mt-10">Fasilitas:</div>

                                    <ul className="grid grid-cols-3 w-100 mt-5 gap-3">
                                        <li className="list-disc ms-5">Tempat Duduk</li>
                                        <li className="list-disc ms-5">Tempat Duduk</li>
                                        <li className="list-disc ms-5">Tempat Duduk</li>
                                        <li className="list-disc ms-5">Tempat Duduk</li>
                                        <li className="list-disc ms-5">Tempat Duduk</li>
                                        <li className="list-disc ms-5">Tempat Duduk</li>
                                    </ul>

                                    <div className="text-xl text-primary mt-10">Kapasitas Maksimal: <span className="text-black">50 orang</span></div>
                                </div>
                            </div>
                        </div>
                        <div className="block border-2 border-black p-6 bg-white rounded-lg shadow mt-10">
                            <h1 className="font-bold text-2xl uppercase">hall ukuran besar</h1>
                            <div className="grid grid-cols-2 gap-6 mt-5">
                                <div className="rounded-md">
                                    <Image
                                        src={'/static/img/kolaborasi.png'}
                                        width={800}
                                        height={400}
                                        className="rounded-xl"
                                    />
                                </div>
                                <div className="right-content">
                                    <h2
                                        className={`text-[#D90027] font-semibold ${lexend_peta.className} text-3xl uppercase`}
                                    >
                                        tjokro hall
                                    </h2>
                                    <p className="text-gray-500 mt-10 text-lg">
                                    Area komunal
                                    untuk untuk
                                    kegiatan seminar, talkshow, dan workshop.
                                    </p>

                                    <div className="text-xl text-primary mt-10">Fasilitas:</div>

                                    <ul className="grid grid-cols-3 w-100 mt-5 gap-3">
                                        <li className="list-disc ms-5">Tempat Duduk</li>
                                        <li className="list-disc ms-5">Tempat Duduk</li>
                                        <li className="list-disc ms-5">Tempat Duduk</li>
                                        <li className="list-disc ms-5">Tempat Duduk</li>
                                        <li className="list-disc ms-5">Tempat Duduk</li>
                                        <li className="list-disc ms-5">Tempat Duduk</li>
                                    </ul>

                                    <div className="text-xl text-primary mt-10">Kapasitas Maksimal: <span className="text-black">50 orang</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
        <div className="mt-40 bg-primary p-20">
            <Container>
                <h2 className="text-white font-bold text-4xl">
                    Hal yang Perlu Diperhatikan
                </h2>

                <div className="mt-20 grid grid-cols-2 gap-12">
                    <div className="flex gap-5">
                        <div className="text-content">
                            <h2 className="text-white font-bold text-2xl">1.</h2>
                        </div>
                        <div className="text-content">
                            <h2 className="text-white font-bold text-2xl">Membawa Botol Minum Pribadi</h2>
                            <p className="text-white mt-5">
                                Selama berada di MARKAS, para pengunjung diwajibkan untuk membawa botol minum pribadi yang dapat diisi ulang dengan dispenser yang tersedia dibeberapa titik.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-content">
                            <h2 className="text-white font-bold text-2xl">4.</h2>
                        </div>
                        <div className="text-content">
                            <h2 className="text-white font-bold text-2xl">Tidak Membawa Hewan</h2>
                            <p className="text-white mt-5">
                            Demi kenyamanan bersama, harap tidak membawa masuk hewan peliharaan ataupun binatang lain kedalam area MARKAS.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-content">
                            <h2 className="text-white font-bold text-2xl">2.</h2>
                        </div>
                        <div className="text-content">
                            <h2 className="text-white font-bold text-2xl">Reschedule dan Replace Ruangan</h2>
                            <p className="text-white mt-5">
                            Setiap penggantian jadwal atau penggantian tipe ruangan dapat dilakukan selambat-lambatnya 3 hari sejak masa pemesanan.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-content">
                            <h2 className="text-white font-bold text-2xl">5.</h2>
                        </div>
                        <div className="text-content">
                            <h2 className="text-white font-bold text-2xl">Menjaga Kebersihan Ruangan</h2>
                            <p className="text-white mt-5">
                            Demi kenyamanan bersama, harap menjaga fasilitas yang berada didalam area MARKAS. Setiap fasilitas yang dirusakkan harus diganti seperti sediakala.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-content">
                            <h2 className="text-white font-bold text-2xl">3.</h2>
                        </div>
                        <div className="text-content">
                            <h2 className="text-white font-bold text-2xl">Harap Melepas Alas Kaki</h2>
                            <p className="text-white mt-5">
                            Demi menjaga kebersihan ruangan, setiap pengunjung MARKAS harap melepaskan alas kaki dan meletakkannya pada tempat penyimpanan khusus alas kaki yang telah tersedia di area beranda.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-5">
                        <div className="text-content">
                            <h2 className="text-white font-bold text-2xl">6.</h2>
                        </div>
                        <div className="text-content">
                            <h2 className="text-white font-bold text-2xl">Area Bebas Asap Rokok</h2>
                            <p className="text-white mt-5">
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