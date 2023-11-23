import React, { useEffect, useState } from "react";
import FAQ from "react-faq-component";
import Container from "../Container";
import { Lexend_Peta } from "next/font/google";
import Link from "next/link";
import { FaCaretDown } from "react-icons/fa";

const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })
const data = {
    title: "",
    rows: [
        {
            title: "Apakah Ada Acara atau Aktivitas Sosial di MARKAS?",
            content: `Ya, MARKAS banyak menyelenggarakan acara, seminar, dan kegiatan sosial yang memungkinkan setiap anggota untuk berinteraksi, belajar, dan membangun jaringan.`,
        },
        {
            title: "Bagaimana Saya Bisa Bergabung dengan MARKAS?",
            content:
                "Kami sangat senang Anda ingin bergabung dengan kami. Silakan kunjungi halaman ini untuk mengetahui lebih lanjut tentang cara bergabung dengan MARKAS.",
        },
        {
            title: "Apakah Ada Jam Operasional Tertentu?",
            content: `MARKAS buka setiap hari Senin sampai Jumat, pukul 08.00 - 17.00 WIB. Untuk hari Sabtu dan Minggu, MARKAS buka sesuai dengan jadwal acara yang ada. Untuk informasi lebih lanjut, silakan hubungi kami di +62 812-3456-7890 atau email ke official MARKAS`,
        },
        {
            title: "Bagaimana dengan Privasi di MARKAS?",
            content: 'MARKAS sangat menghargai privasi Anda. Kami tidak akan pernah membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda. Untuk informasi lebih lanjut, silakan baca Kebijakan Privasi kami.',
        },
        {
            title: "Bagaimana Saya Menyewa untuk Co-Working Space Sementara?",
            content: 'MARKAS menyediakan ruang kerja bersama yang dapat disewa untuk jangka waktu tertentu. Untuk informasi lebih lanjut, silakan hubungi kami di +62 812-3456-7890 atau email ke official MARKAS',
        },
    ],
};

const styles = {
    titleTextColor: "black",
    rowTitleColor: "black",
    arrowColor: "#D90027",
};

const config = {
    animate: true,
    expandIcon: "+",
    collapseIcon: "x",
    tabFocus: true
};

const Faq = () => {
    return (
        <Container>
            <div className="py-32">
                <div className="flex flex-col items-center gap-8 text-center md:px-32">
                    <h2 className={`text-primary font-semibold ${lexend_peta.className} md:text-2xl text-xl uppercase`}>FAQ</h2>
                    <h2 className="text-2xl font-bold uppercase md:text-4xl">*Masih Ragu?</h2>
                    <span className="text-lg xl:text-xl">Kami menjawab apa yang menjadi pertanyaan Anda. Semoga membantu.</span>
                </div>
                <div className="px-8 py-16">
                    <FAQ
                        title
                        data={data}
                        styles={styles}
                        config={config}
                    />
                </div>
                <div className="flex justify-center">

                    <Link
                        href={"#"}
                        className="">

                        <h2 className="flex items-center gap-2 p-4 px-8 text-white rounded-full bg-primary">Lebih Banyak <span><FaCaretDown className="text-white" /></span> </h2>

                    </Link>
                </div>
            </div>
        </Container>
    );
}

export default Faq;
