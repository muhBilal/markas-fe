import Image from "next/image";

const CardKerjaSama = () => {
    return (
        <div className={` py-32 text-black flex flex-col gap-y-16`}>
            <h2 className="uppercase text-center text-2xl md:text-4xl font-extrabold">Kerjasama dan afiliasi</h2>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-center justify-items-center gap-y-12 ">
                <Image
                    src={'/static/img/kerjasama/1000.png'}
                    width={200}
                    height={168}
                />
                <Image
                    src={'/static/img/kerjasama/kominfo.png'}
                    width={200}
                    height={168}
                />
                <Image
                    src={'/static/img/kerjasama/studio.png'}
                    width={200}
                    height={168}
                />
                <Image
                    src={'/static/img/kerjasama/sekolahbeta.png'}
                    width={200}
                    height={168}
                />
                <Image
                    src={'/static/img/kerjasama/intensif.png'}
                    width={200}
                    height={168}
                />
                <Image
                    src={'/static/img/kerjasama/kelasdaring.png'}
                    width={200}
                    height={168}
                />
                <Image
                    src={'/static/img/kerjasama/grind.png'}
                    width={200}
                    height={168}
                />
                <Image
                    src={'/static/img/kerjasama/indev.png'}
                    width={200}
                    height={168}
                />
                <Image
                    src={'/static/img/kerjasama/gdsc.png'}
                    width={200}
                    height={168}
                />
            </div>


        </div >
    );
}

export default CardKerjaSama;