const OrderStep = () => {
    return (
        <div className="bg-[#D90027] text-center p-16">
            <div className="flex flex-col gap-y-8">
                <h2 className="text-4xl font-bold text-white">4 LANGKAH PESAN RUANG DI MARKAS</h2>
                <div className="grid grid-cols-4 gap-x-8">
                    <div className=" rounded-lg bg-white flex flex-col gap-y-4 items-center py-8 px-6">
                        <div className="rounded-full bg-[#D90027] py-4 px-7 ">
                            <span className=" text-white text-2xl font-semibold ">1</span>
                        </div>
                        <span className="font-semibold text-xl">Cari MARKAS di Kotamu </span>
                        <span className="text-black/60 text-[16px]">Cari dan temukan MARKAS terdekat disekitarmu atau MARKAS favoritmu.</span>
                    </div>
                    <div className=" rounded-lg bg-white flex flex-col gap-y-4 items-center py-8 px-6">
                        <div className="rounded-full bg-[#D90027] py-4 px-7 ">
                            <span className=" text-white text-2xl font-semibold ">2</span>
                        </div>
                        <span className="font-semibold text-xl">Jadwalkan sesuai Tanggal Rencana </span>
                        <span className="text-black/60 text-[16px]">Cari tanggal yang pas untuk melihat ketersediaan ruangan.</span>
                    </div>
                    <div className=" rounded-lg bg-white flex flex-col gap-y-4 items-center py-8 px-6">
                        <div className="rounded-full bg-[#D90027] py-4 px-7 ">
                            <span className=" text-white text-2xl font-semibold ">3</span>
                        </div>
                        <span className="font-semibold text-xl">Pesan Ruangan dan Bayar </span>
                        <span className="text-black/60 text-[16px]">Pilih ruangan sesuai kebutuhanmu dan siapkan pembayaran elektronik.</span>
                    </div>
                    <div className=" rounded-lg bg-white flex flex-col gap-y-4 items-center py-8 px-6">
                        <div className="rounded-full bg-[#D90027] py-4 px-7 ">
                            <span className=" text-white text-2xl font-semibold ">4</span>
                        </div>
                        <span className="font-semibold text-xl">Tunjukkan QR Code ke Resepsionis </span>
                        <span className="text-black/60 text-[16px]">Simpan QR Code dan ditunjukkan ke Resepsionis MARKAS tujuanmu.</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderStep;