import React from 'react';
import Link from 'next/link';

const BackToBeranda = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-center mt-10">PESANAN KAMU TELAH TERKIRIM</h1>
        <div className="mt-5 text-center flex justify-center w-full">
            <h1 className="text-xl font-medium w-[700px]">
                Admin MARKAS akan meninjau kegiatan kamu dan akan dikonfirmasi 1x24 jam melalu email dan nomor telepon yang telah dicantumkan
            </h1>
        </div>
        <div className="mt-5 text-center flex justify-center w-full">
            <button className='rounded bg-primary text-white py-2 px-3'>
                <Link href={'/'} className='w-100 h-100'>Kembali ke beranda</Link>
            </button>
        </div>
    </div>
  )
}

export default BackToBeranda