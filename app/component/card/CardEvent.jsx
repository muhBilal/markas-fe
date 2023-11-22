import Container from "@/app/component/Container";
import Image from "next/image";
import Link from "next/link";

export const CardEvent = () => {
    return (
        <section className={`grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 `}>
            <div className={`bg-primary border-4 border-black`}>
                <div className={`grid grid-cols-3 p-4`}>
                    <div className={`col-span-2 text-white`}>
                        <p className={`uppercase text-sm text-white`}>episode 29</p>
                        <div className={`mt-2 border-4 border-secondary p-3 2xl:text-2xl text-lg text-white mr-3`}> <span>The True
                            Framework
                        </span>
                        </div>
                        <p className={`text-white my-4 text-sm 2xl:text-md`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Iste, temporibus.</p>
                        <div className={`flex gap-3 items-center`}>
                            <svg className="w-5 h-5 text-secondary" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                            </svg>
                            <p className={`text-white font-semibold`}>Kamis, 2 September 2023</p>
                        </div>
                        <div className={`flex gap-3 items-center mt-3`}>
                            <svg className="w-5 h-5 text-secondary" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                            </svg>
                            <p className={`text-white font-semibold`}>Kamis, 2 September 2023</p>
                        </div>

                        <p className={`mt-7 text-sm `}>Saksikan dan ikuti diskusinya di:</p>
                        <div className={`flex flex-col mt-3 xl:items-center `}>
                            <div
                                className={` bg-white flex  border-[3px] border-bluePrimary shadow-[0_3px_0px_0px_rgba(0,0,0.3)] shadow-bluePrimary items-center gap-2 px-1`}>
                                <div className="flex items-center gap-[0.9px] ">
                                    <svg className="w-5 h-5 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 20 14">
                                        <path fill-rule="evenodd"
                                            d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p className={`text-black font-semibold text-sm`}>Youtube</p>
                                </div>
                                <p className={`text-black text-xs`}>Gerakan Nasional 1000 Startup Digital</p>
                            </div>

                        </div>

                    </div>
                    <div className={`col-span-1 flex flex-col gap-y-4`}>
                        <div className={`relative`}>
                            <Image
                                src={'/static/img/kolaborasi.png'}
                                width={300}
                                height={300}
                                className="h-[140px] 2xl:w-[140px] w-full object-cover border-4 border-bluePrimary relative top-0 left-0 z-10"
                            />
                            <div className={`bg-bluePrimary  h-[140px]     w-full absolute top-1 xl:right-3 left-1  -z-0`}></div>
                        </div>
                        <div className="flex flex-col text-white gap-y-1">
                            <h2 className="font-bold text-sm">Ugeng Wijaya</h2>
                            <p className="font-light text-sm">Scrum Master & Agile Coach Ekipe Agile Consultancy</p>

                        </div>
                    </div>
                </div>

                <div className={`px-4 pb-4 text-white`}>
                    <p className="font-light text-sm">Dapatkan e-sertificate sebagai tanda partisipasi:</p>
                    <Link href={`#`} className={`text-center`}>
                        <p className={`mt-2 border-4 border-secondary max-w-[19rem] p-1 text-white mr-3`}>10000startupdigital.id/sekolahbeta</p>
                    </Link>
                </div>
                <div
                    className={`bg-white border-t-4 border-b-4 border-bluePrimary text-center md:-[19px] 2xl:text-xl font-bold px-10 py-3`}>
                    SEKOLAH BETA HCLUSTER EPS. 39 - SCRUM FRAMEWORK
                </div>
                <div className={`uppercase flex justify-between px-5 text-white md:text-[19px] 2xl:text-xl py-4 font-semibold`}>
                    <p>Surabaya</p>
                    <p>September 2023</p>
                </div>
            </div>
            <div className={`bg-primary border-4 border-black`}>
                <div className={`grid grid-cols-3 p-4`}>
                    <div className={`col-span-2 text-white`}>
                        <p className={`uppercase text-sm text-white`}>episode 29</p>
                        <div className={`mt-2 border-4 border-secondary p-3 2xl:text-2xl text-lg text-white mr-3`}> <span>The True
                            Framework
                        </span>
                        </div>
                        <p className={`text-white my-4 text-sm 2xl:text-md`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Iste, temporibus.</p>
                        <div className={`flex gap-3 items-center`}>
                            <svg className="w-5 h-5 text-secondary" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                            </svg>
                            <p className={`text-white font-semibold`}>Kamis, 2 September 2023</p>
                        </div>
                        <div className={`flex gap-3 items-center mt-3`}>
                            <svg className="w-5 h-5 text-secondary" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                            </svg>
                            <p className={`text-white font-semibold`}>Kamis, 2 September 2023</p>
                        </div>

                        <p className={`mt-7 text-sm `}>Saksikan dan ikuti diskusinya di:</p>
                        <div className={`flex flex-col mt-3 xl:items-center `}>
                            <div
                                className={` bg-white flex  border-[3px] border-bluePrimary shadow-[0_3px_0px_0px_rgba(0,0,0.3)] shadow-bluePrimary items-center gap-2 px-1`}>
                                <div className="flex items-center gap-[0.9px] ">
                                    <svg className="w-5 h-5 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 20 14">
                                        <path fill-rule="evenodd"
                                            d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p className={`text-black font-semibold text-sm`}>Youtube</p>
                                </div>
                                <p className={`text-black text-xs`}>Gerakan Nasional 1000 Startup Digital</p>
                            </div>

                        </div>

                    </div>
                    <div className={`col-span-1 flex flex-col gap-y-4`}>
                        <div className={`relative`}>
                            <Image
                                src={'/static/img/kolaborasi.png'}
                                width={300}
                                height={300}
                                className="h-[140px] 2xl:w-[140px] w-full object-cover border-4 border-bluePrimary relative top-0 left-0 z-10"
                            />
                            <div className={`bg-bluePrimary  h-[140px]     w-full absolute top-1 xl:right-3 left-1  -z-0`}></div>
                        </div>
                        <div className="flex flex-col text-white gap-y-1">
                            <h2 className="font-bold text-sm">Ugeng Wijaya</h2>
                            <p className="font-light text-sm">Scrum Master & Agile Coach Ekipe Agile Consultancy</p>

                        </div>
                    </div>
                </div>

                <div className={`px-4 pb-4 text-white`}>
                    <p className="font-light text-sm">Dapatkan e-sertificate sebagai tanda partisipasi:</p>
                    <Link href={`#`} className={`text-center`}>
                        <p className={`mt-2 border-4 border-secondary max-w-[19rem] p-1 text-white mr-3`}>10000startupdigital.id/sekolahbeta</p>
                    </Link>
                </div>
                <div
                    className={`bg-white border-t-4 border-b-4 border-bluePrimary text-center md:-[19px] 2xl:text-xl font-bold px-10 py-3`}>
                    SEKOLAH BETA HCLUSTER EPS. 39 - SCRUM FRAMEWORK
                </div>
                <div className={`uppercase flex justify-between px-5 text-white md:text-[19px] 2xl:text-xl py-4 font-semibold`}>
                    <p>Surabaya</p>
                    <p>September 2023</p>
                </div>
            </div>
            <div className={`bg-primary border-4 border-black`}>
                <div className={`grid grid-cols-3 p-4`}>
                    <div className={`col-span-2 text-white`}>
                        <p className={`uppercase text-sm text-white`}>episode 29</p>
                        <div className={`mt-2 border-4 border-secondary p-3 2xl:text-2xl text-lg text-white mr-3`}> <span>The True
                            Framework
                        </span>
                        </div>
                        <p className={`text-white my-4 text-sm 2xl:text-md`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Iste, temporibus.</p>
                        <div className={`flex gap-3 items-center`}>
                            <svg className="w-5 h-5 text-secondary" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                            </svg>
                            <p className={`text-white font-semibold`}>Kamis, 2 September 2023</p>
                        </div>
                        <div className={`flex gap-3 items-center mt-3`}>
                            <svg className="w-5 h-5 text-secondary" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                            </svg>
                            <p className={`text-white font-semibold`}>Kamis, 2 September 2023</p>
                        </div>

                        <p className={`mt-7 text-sm `}>Saksikan dan ikuti diskusinya di:</p>
                        <div className={`flex flex-col mt-3 xl:items-center `}>
                            <div
                                className={` bg-white flex  border-[3px] border-bluePrimary shadow-[0_3px_0px_0px_rgba(0,0,0.3)] shadow-bluePrimary items-center gap-2 px-1`}>
                                <div className="flex items-center gap-[0.9px] ">
                                    <svg className="w-5 h-5 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 20 14">
                                        <path fill-rule="evenodd"
                                            d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p className={`text-black font-semibold text-sm`}>Youtube</p>
                                </div>
                                <p className={`text-black text-xs`}>Gerakan Nasional 1000 Startup Digital</p>
                            </div>

                        </div>

                    </div>
                    <div className={`col-span-1 flex flex-col gap-y-4`}>
                        <div className={`relative`}>
                            <Image
                                src={'/static/img/kolaborasi.png'}
                                width={300}
                                height={300}
                                className="h-[140px] 2xl:w-[140px] w-full object-cover border-4 border-bluePrimary relative top-0 left-0 z-10"
                            />
                            <div className={`bg-bluePrimary  h-[140px]     w-full absolute top-1 xl:right-3 left-1  -z-0`}></div>
                        </div>
                        <div className="flex flex-col text-white gap-y-1">
                            <h2 className="font-bold text-sm">Ugeng Wijaya</h2>
                            <p className="font-light text-sm">Scrum Master & Agile Coach Ekipe Agile Consultancy</p>

                        </div>
                    </div>
                </div>

                <div className={`px-4 pb-4 text-white`}>
                    <p className="font-light text-sm">Dapatkan e-sertificate sebagai tanda partisipasi:</p>
                    <Link href={`#`} className={`text-center`}>
                        <p className={`mt-2 border-4 border-secondary max-w-[19rem] p-1 text-white mr-3`}>10000startupdigital.id/sekolahbeta</p>
                    </Link>
                </div>
                <div
                    className={`bg-white border-t-4 border-b-4 border-bluePrimary text-center md:-[19px] 2xl:text-xl font-bold px-10 py-3`}>
                    SEKOLAH BETA HCLUSTER EPS. 39 - SCRUM FRAMEWORK
                </div>
                <div className={`uppercase flex justify-between px-5 text-white md:text-[19px] 2xl:text-xl py-4 font-semibold`}>
                    <p>Surabaya</p>
                    <p>September 2023</p>
                </div>
            </div>
            <div className={`bg-primary border-4 border-black`}>
                <div className={`grid grid-cols-3 p-4`}>
                    <div className={`col-span-2 text-white`}>
                        <p className={`uppercase text-sm text-white`}>episode 29</p>
                        <div className={`mt-2 border-4 border-secondary p-3 2xl:text-2xl text-lg text-white mr-3`}> <span>The True
                            Framework
                        </span>
                        </div>
                        <p className={`text-white my-4 text-sm 2xl:text-md`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Iste, temporibus.</p>
                        <div className={`flex gap-3 items-center`}>
                            <svg className="w-5 h-5 text-secondary" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                            </svg>
                            <p className={`text-white font-semibold`}>Kamis, 2 September 2023</p>
                        </div>
                        <div className={`flex gap-3 items-center mt-3`}>
                            <svg className="w-5 h-5 text-secondary" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                            </svg>
                            <p className={`text-white font-semibold`}>Kamis, 2 September 2023</p>
                        </div>

                        <p className={`mt-7 text-sm `}>Saksikan dan ikuti diskusinya di:</p>
                        <div className={`flex flex-col mt-3 xl:items-center `}>
                            <div
                                className={` bg-white flex  border-[3px] border-bluePrimary shadow-[0_3px_0px_0px_rgba(0,0,0.3)] shadow-bluePrimary items-center gap-2 px-1`}>
                                <div className="flex items-center gap-[0.9px] ">
                                    <svg className="w-5 h-5 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 20 14">
                                        <path fill-rule="evenodd"
                                            d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p className={`text-black font-semibold text-sm`}>Youtube</p>
                                </div>
                                <p className={`text-black text-xs`}>Gerakan Nasional 1000 Startup Digital</p>
                            </div>

                        </div>

                    </div>
                    <div className={`col-span-1 flex flex-col gap-y-4`}>
                        <div className={`relative`}>
                            <Image
                                src={'/static/img/kolaborasi.png'}
                                width={300}
                                height={300}
                                className="h-[140px] 2xl:w-[140px] w-full object-cover border-4 border-bluePrimary relative top-0 left-0 z-10"
                            />
                            <div className={`bg-bluePrimary  h-[140px]     w-full absolute top-1 xl:right-3 left-1  -z-0`}></div>
                        </div>
                        <div className="flex flex-col text-white gap-y-1">
                            <h2 className="font-bold text-sm">Ugeng Wijaya</h2>
                            <p className="font-light text-sm">Scrum Master & Agile Coach Ekipe Agile Consultancy</p>

                        </div>
                    </div>
                </div>

                <div className={`px-4 pb-4 text-white`}>
                    <p className="font-light text-sm">Dapatkan e-sertificate sebagai tanda partisipasi:</p>
                    <Link href={`#`} className={`text-center`}>
                        <p className={`mt-2 border-4 border-secondary max-w-[19rem] p-1 text-white mr-3`}>10000startupdigital.id/sekolahbeta</p>
                    </Link>
                </div>
                <div
                    className={`bg-white border-t-4 border-b-4 border-bluePrimary text-center md:-[19px] 2xl:text-xl font-bold px-10 py-3`}>
                    SEKOLAH BETA HCLUSTER EPS. 39 - SCRUM FRAMEWORK
                </div>
                <div className={`uppercase flex justify-between px-5 text-white md:text-[19px] 2xl:text-xl py-4 font-semibold`}>
                    <p>Surabaya</p>
                    <p>September 2023</p>
                </div>
            </div>
            <div className={`bg-primary border-4 border-black`}>
                <div className={`grid grid-cols-3 p-4`}>
                    <div className={`col-span-2 text-white`}>
                        <p className={`uppercase text-sm text-white`}>episode 29</p>
                        <div className={`mt-2 border-4 border-secondary p-3 2xl:text-2xl text-lg text-white mr-3`}> <span>The True
                            Framework
                        </span>
                        </div>
                        <p className={`text-white my-4 text-sm 2xl:text-md`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Iste, temporibus.</p>
                        <div className={`flex gap-3 items-center`}>
                            <svg className="w-5 h-5 text-secondary" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                            </svg>
                            <p className={`text-white font-semibold`}>Kamis, 2 September 2023</p>
                        </div>
                        <div className={`flex gap-3 items-center mt-3`}>
                            <svg className="w-5 h-5 text-secondary" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
                            </svg>
                            <p className={`text-white font-semibold`}>Kamis, 2 September 2023</p>
                        </div>

                        <p className={`mt-7 text-sm `}>Saksikan dan ikuti diskusinya di:</p>
                        <div className={`flex flex-col mt-3 xl:items-center `}>
                            <div
                                className={` bg-white flex  border-[3px] border-bluePrimary shadow-[0_3px_0px_0px_rgba(0,0,0.3)] shadow-bluePrimary items-center gap-2 px-1`}>
                                <div className="flex items-center gap-[0.9px] ">
                                    <svg className="w-5 h-5 text-red-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor" viewBox="0 0 20 14">
                                        <path fill-rule="evenodd"
                                            d="M19.7 3.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.84c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.84A4.225 4.225 0 0 0 .3 3.038a30.148 30.148 0 0 0-.2 3.206v1.5c.01 1.071.076 2.142.2 3.206.094.712.363 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.15 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965c.124-1.064.19-2.135.2-3.206V6.243a30.672 30.672 0 0 0-.202-3.206ZM8.008 9.59V3.97l5.4 2.819-5.4 2.8Z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <p className={`text-black font-semibold text-sm`}>Youtube</p>
                                </div>
                                <p className={`text-black text-xs`}>Gerakan Nasional 1000 Startup Digital</p>
                            </div>

                        </div>

                    </div>
                    <div className={`col-span-1 flex flex-col gap-y-4`}>
                        <div className={`relative`}>
                            <Image
                                src={'/static/img/kolaborasi.png'}
                                width={300}
                                height={300}
                                className="h-[140px] 2xl:w-[140px] w-full object-cover border-4 border-bluePrimary relative top-0 left-0 z-10"
                            />
                            <div className={`bg-bluePrimary  h-[140px]     w-full absolute top-1 xl:right-3 left-1  -z-0`}></div>
                        </div>
                        <div className="flex flex-col text-white gap-y-1">
                            <h2 className="font-bold text-sm">Ugeng Wijaya</h2>
                            <p className="font-light text-sm">Scrum Master & Agile Coach Ekipe Agile Consultancy</p>

                        </div>
                    </div>
                </div>

                <div className={`px-4 pb-4 text-white`}>
                    <p className="font-light text-sm">Dapatkan e-sertificate sebagai tanda partisipasi:</p>
                    <Link href={`#`} className={`text-center`}>
                        <p className={`mt-2 border-4 border-secondary max-w-[19rem] p-1 text-white mr-3`}>10000startupdigital.id/sekolahbeta</p>
                    </Link>
                </div>
                <div
                    className={`bg-white border-t-4 border-b-4 border-bluePrimary text-center md:-[19px] 2xl:text-xl font-bold px-10 py-3`}>
                    SEKOLAH BETA HCLUSTER EPS. 39 - SCRUM FRAMEWORK
                </div>
                <div className={`uppercase flex justify-between px-5 text-white md:text-[19px] 2xl:text-xl py-4 font-semibold`}>
                    <p>Surabaya</p>
                    <p>September 2023</p>
                </div>
            </div>


        </section>
    )
}