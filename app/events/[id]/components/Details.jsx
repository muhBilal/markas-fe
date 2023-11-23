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
            <div className="md:px-20 lg:px-32 mt-10">
                <div className="flex flex-col lg:flex-row justify-between gap-7 items-center">
                    <div className="lc">
                        <h2
                            className={`text-[#D90027] font-semibold ${lexend_peta.className} text-md md:text-2xl lg:text-4xl  uppercase`}
                        >
                            EPISODE 4
                        </h2>
                        <h2 className="font-bold text-md md:text-2xl lg:text-4xl uppercase my-3 md:my-5">
                            The (True) Scrum Framework
                        </h2>
                        <p className="text-gray-500 text-sm md:text-lg">Pelajari kunci sukses banyak startup</p>
                    </div>
                    <div className="rc">
                        <button className='rounded bg-primary text-white py-4 px-5 text-xl'>Ikuti Event</button>
                    </div>
                </div>

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

                <div className="mt-10 lg:mt-20" id="fasilitas-gedung">
                    <h1 className="text-md md:text-2xl lg:text-4xl font-bold">Profil Pembicara</h1>
                    <div className="lg:grid grid-cols-2 mt-20 gap-7">
                        <div className="left-content">
                            <Image
                                alt="image"
                                src={'/static/img/kolaborasi.png'}
                                width={800}
                                height={800}
                                className="rounded-xl"
                            />
                        </div>
                        <div className="right-content">
                            <h1 className="text-4xl font-bold">Ugeng Wijaya</h1>
                            <p className="text-lg text-gray-500 mt-5">Scrum Master</p>
                            <p className="mt-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorem asperiores, facere iure aliquam sapiente exercitationem totam doloremque quam at porro maiores quos voluptatem animi corporis beatae eos rem est nesciunt dolores explicabo deserunt veritatis? Saepe eveniet nemo, laudantium distinctio ut aperiam quisquam labore incidunt maxime in dolore similique illo ab debitis. Eaque, sed eos debitis iure facilis deleniti culpa rerum, illo omnis a expedita fugit odit, eveniet accusamus pariatur laborum consequatur. Pariatur numquam similique esse harum, optio dolores, quia ullam tenetur magni velit ipsa earum id, vel possimus quis quidem laboriosam labore iusto. Natus ducimus minus dignissimos non ullam accusamus voluptate doloremque provident architecto nobis, laboriosam nam aliquid eius labore expedita veniam! Est accusamus nulla illum, in ab enim.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 lg:mt-20" id="fasilitas-gedung">
                    <h1 className="text-md md:text-2xl lg:text-4xl font-bold">Detail Acara</h1>
                    <div className="mt-20">
                        <h3 className="text-2xl text-primary font-bold mt-20">SEKOLAH BETA HUSTLER EPS. 5 - SCRUM FRAMEWORK</h3>
                        <p className="mt-5 text-gray-500 text-md">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam dolores a sequi incidunt rem repellendus molestias ducimus aliquid, autem dolore corrupti laboriosam praesentium ab soluta, nam hic earum consectetur tempore saepe. Consequatur voluptates nisi quidem praesentium dignissimos officia, labore eos culpa vel, beatae accusantium, neque impedit exercitationem. Rem dignissimos itaque non repudiandae consequuntur beatae minus qui aliquid sunt vel neque perspiciatis laudantium veritatis iste, unde voluptates placeat dicta necessitatibus aperiam! Consequatur id sunt ducimus, soluta voluptate iure repellat maiores corporis, amet cumque iusto. Laborum corrupti id necessitatibus nihil molestias. Consequuntur odio, eius voluptate sapiente corporis atque voluptatem praesentium placeat nostrum expedita adipisci facilis ullam dolorum ad laudantium inventore non eos ratione asperiores? Repellat nam qui facilis, labore eum minima deleniti.
                        </p>
                    </div>
                    <h3 className="text-2xl text-primary font-bold mt-10">Save The Date</h3>

                    <div className="mt-10">
                        <div className="flex gap-5">
                            <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
                            </svg>
                            <p className="text-md">Rabu, 22 November 2023</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="flex gap-5">
                            <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                            </svg>
                            <p className="text-md">11.00 - 14.00 WIB</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="flex gap-5">
                            <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                            </svg>
                            <p className="text-md">Online</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className={`pb-4 text-black`}>
                            <p className="font-light text-sm">Dapatkan e-sertificate sebagai tanda partisipasi:</p>
                            <Link href={`#`} className={`text-center`}>
                                <p className={`mt-2 border-4 border-secondary max-w-[19rem] p-1 text-black mr-3`}>10000startupdigital.id/sekolahbeta</p>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </Container>
    </>
  )
}

export default Details