import { Lexend_Peta } from "next/font/google";
import Image from "next/image";
const lexend_peta = Lexend_Peta({ subsets: ['latin'], weight: ['400', '700'] })
const Join = () => {

    return (
        <div className="text-center flex flex-col items-center gap-y-8 font-semibold text-2xl">
            <span>Ingin bekerja di tempat nyaman, fleksible, dan penuh inspirasi?</span>
            <span>Segera bergabung bersama kami di <span className={`text-[#D90027] ${lexend_peta.className}`}>#MARKAS</span></span>
            <div className="">
                <Image
      alt="image"
                    src={'/static/img/logo-bulat.png'}
                    width={200}
                    height={200}
                />
                <Image
      alt="image"
                    src={'/static/img/logo.png'}
                    width={200}
                    height={200}
                />
            </div>
        </div>
    );
}

export default Join;