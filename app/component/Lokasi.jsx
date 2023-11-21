import { markas } from "../utils/markas";

const Lokasi = () => {
    return (
        <div className="py-32">
            <div className="text-center uppercase flex flex-col gap-y-12">
                <span className="text-[#D90027] text-2xl">Lokasi</span>
                <span className="font-extrabold text-4xl">Cari markas di sekitarmu!</span>
            </div>
            {markas.map((markass) => {
                return (
                    <div className="">
                        <div className="search"></div>
                        <div className=""></div>
                    </div>
                )
            })}

        </div>
    );
}

export default Lokasi;