'use client'
import { useState } from "react";
import Container from "../Container";

const getDate = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date} ${month} ${year}`
}
const Qoutes = () => {
    const [currentDate, setCurrentDate] = useState(getDate())
    return (
        <Container>
            <div className="m-12 p-12 border-[1px] rounded-[24px]  grid grid-cols-3">
                <div className="col-span-1 flex md:justify-end md:px-12 items-start">
                    <svg className="w-16 md:w-24" viewBox="0 0 142 142" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="71" cy="71" r="71" fill="#FFEDC6" />
                        <circle cx="71" cy="71" r="51" fill="#FFE19D" />
                        <ellipse cx="71.5" cy="71" rx="31.5" ry="31" fill="#FFC53F" />
                    </svg>
                </div>
                <div className="col-span-2 flex flex-col gap-y-3">
                    <span className="font-semibold text-sm">Sabtu, 21 Oktober 2023</span>
                    <span className="font-bold text-2xl">Halo! Selamat Pagi.</span>
                    <div className="my-2 flex flex-col gap-y-2">
                        <span className="font-light text-sm text-[#D90027]">Kata-kata hari ini :</span>
                        <span className="font-light text-sm text-slate-20">Burung perkutut makan ketan, pak tani lagi jualan rotan...
                            Ngapain ribut mikirin mantan, mending ke MARKAS seru-seruan. 🎉</span>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Qoutes;