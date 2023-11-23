"use client";
import { Lexend_Peta } from "next/font/google";
import Container from '@/app/component/Container'
import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'next/navigation'
import { useRouter } from "next/navigation";
const lexend_peta = Lexend_Peta({ subsets: ["latin"], weight: ["400", "700"] });

const Details = () => {
    const [events, setEvents] = useState([]);
    const [accessToken, setAccessToken] = useState([]);
    const params = useParams();
    const router = useRouter();

    const [eventDate, setEventDate] = useState({
        date: null,
        start_time: null,
        end_time: null
    });

    const handleJoinEvent = async () => {
        const booking = {
            'summary': 'Mengikuti Event ' + events.title ?? 'Ini event',
            'description': events.description ?? 'testing event',
            'start': {
              'dateTime': new Date(events.start_time).toISOString(),
              'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            },
            'end': {
              'dateTime': new Date(events.end_time).toISOString(),
              'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
            }
          }
      
          try{
            const req = await fetch(`https://www.googleapis.com/calendar/v3/calendars/primary/events`, {
              method: 'POST',
              headers: {
                'Authorization': 'Bearer ' + accessToken
              },
              body: JSON.stringify(booking)
            })
      
            
            if(req.ok){
                router.push('/')
            }else{
              toast('Event gagal dibuat');
            }
          } catch(e){
            console.log(e.message);
          }
    }

    const getGoogleAccessToken = async () => {
        try {
          const req = await fetch('/api/token', {
            method: 'GET',
            credentials: 'include'
          });
      
          if (req.ok) {
            const res = await req.json();
            setAccessToken(res.accessToken.access_token)
          } else {
            console.error('Failed to fetch access token');
          }
        } catch (error) {
          console.error('Error fetching access token:', error);
        }
      }

    useEffect(() => {
        getGoogleAccessToken();
    }, []);

    useEffect(() => {
        let ignore = false;

        const getEvents = async () => {
            await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/admin/event/` + params.id).then(function (res) {
                const eventes = res.data
                if(!ignore){
                    setEvents(eventes.data);

                    // Ubah date
                    const date_dateObj = new Date(eventes.data.event_date);
                    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    const formattedDate = date_dateObj.toLocaleDateString('id-ID', options);

                    // Ubah time start
                    const time_start_dateObj = new Date(eventes.data.start_time);
                    const start_hours = time_start_dateObj.getHours();
                    const start_minutes = time_start_dateObj.getMinutes();
                    const start_seconds = time_start_dateObj.getSeconds();
                    const formatted_minutes = start_minutes < 10 ? `0${start_minutes}` : `${start_minutes}`;
                    const start_result = `${start_hours}:${formatted_minutes}`;

                    // Ubah time end
                    const time_end_dateObj = new Date(eventes.data.end_time);
                    const end_hours = time_end_dateObj.getHours();
                    const end_minutes = time_end_dateObj.getMinutes();
                    const end_seconds = time_end_dateObj.getSeconds();
                    const formatted_end_minutes = end_minutes < 10 ? `0${end_minutes}` : `${end_minutes}`;
                    const end_result = `${end_hours}:${formatted_end_minutes}`;

                    setEventDate({
                        date: formattedDate,
                        start_time: start_result,
                        end_time: end_result
                    })
                    
                }
            })
        }

        getEvents();

        return () => ignore = true;
    }, [])

  return (
    <>
        <Container>
            <div className="mt-10 md:px-20 lg:px-32">
                <div className="flex flex-col items-center justify-between lg:flex-row gap-7">
                    <div className="lc">
                        <h2
                            className={`text-[#D90027] font-semibold ${lexend_peta.className} text-md md:text-2xl lg:text-4xl  uppercase`}
                        >
                            EPISODE {events.episode}
                        </h2>
                        <h2 className="my-3 font-bold uppercase text-md md:text-2xl lg:text-4xl md:my-5">
                            {events.title}
                        </h2>
                        <p className="text-sm text-gray-500 md:text-lg">{events.sub_title}</p>
                    </div>
                    <div className="rc">
                        <button onClick={handleJoinEvent} className='px-5 py-4 text-xl text-white rounded bg-primary'>Ikuti Event</button>
                    </div>
                </div>

                <div className="mt-10 lg:mt-20" id="fasilitas-gedung">
                    <h1 className="font-bold text-md md:text-2xl lg:text-4xl">Profil Pembicara</h1>
                    <div className="grid-cols-2 mt-20 lg:grid gap-7">
                        <div className="left-content">
                            <Image
                                alt="image"
                                src={'/static/img/kolaborasi.png'}
                                // src={'http://localhost:8000/public/storage/' + events.speaker_image}
                                width={800}
                                height={800}
                                className="rounded-xl"
                            />
                        </div>
                        <div className="right-content">
                            <h1 className="text-4xl font-bold">{events.speaker_name}</h1>
                            <p className="mt-5 text-lg text-gray-500">{events.speaker_desc}</p>
                            <p className="mt-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut dolorem asperiores, facere iure aliquam sapiente exercitationem totam doloremque quam at porro maiores quos voluptatem animi corporis beatae eos rem est nesciunt dolores explicabo deserunt veritatis? Saepe eveniet nemo, laudantium distinctio ut aperiam quisquam labore incidunt maxime in dolore similique illo ab debitis. Eaque, sed eos debitis iure facilis deleniti culpa rerum, illo omnis a expedita fugit odit, eveniet accusamus pariatur laborum consequatur. Pariatur numquam similique esse harum, optio dolores, quia ullam tenetur magni velit ipsa earum id, vel possimus quis quidem laboriosam labore iusto. Natus ducimus minus dignissimos non ullam accusamus voluptate doloremque provident architecto nobis, laboriosam nam aliquid eius labore expedita veniam! Est accusamus nulla illum, in ab enim.</p>
                        </div>
                    </div>
                </div>

                <div className="mt-10 lg:mt-20" id="fasilitas-gedung">
                    <h1 className="font-bold text-md md:text-2xl lg:text-4xl">Detail Acara</h1>
                    <div className="mt-20">
                        <h3 className="mt-20 text-2xl font-bold text-primary">SEKOLAH BETA {events.event_role?.role} EPS. {events.episode} - {events.event_album?.name}</h3>
                        <p className="mt-5 text-gray-500 text-md">
                            {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam dolores a sequi incidunt rem repellendus molestias ducimus aliquid, autem dolore corrupti laboriosam praesentium ab soluta, nam hic earum consectetur tempore saepe. Consequatur voluptates nisi quidem praesentium dignissimos officia, labore eos culpa vel, beatae accusantium, neque impedit exercitationem. Rem dignissimos itaque non repudiandae consequuntur beatae minus qui aliquid sunt vel neque perspiciatis laudantium veritatis iste, unde voluptates placeat dicta necessitatibus aperiam! Consequatur id sunt ducimus, soluta voluptate iure repellat maiores corporis, amet cumque iusto. Laborum corrupti id necessitatibus nihil molestias. Consequuntur odio, eius voluptate sapiente corporis atque voluptatem praesentium placeat nostrum expedita adipisci facilis ullam dolorum ad laudantium inventore non eos ratione asperiores? Repellat nam qui facilis, labore eum minima deleniti. */}
                            {events.description}
                        </p>
                    </div>
                    <h3 className="mt-10 text-2xl font-bold text-primary">Save The Date</h3>

                    <div className="mt-10">
                        <div className="flex gap-5">
                            <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
                            </svg>
                            <p className="text-md">{eventDate.date}</p>
                        </div>
                    </div>
                    <div className="mt-10">
                        <div className="flex gap-5">
                            <svg class="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
                            </svg>
                            <p className="text-md">{eventDate.start_time} - {eventDate.end_time} WIB</p>
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
                            <p className="text-sm font-light">Dapatkan e-sertificate sebagai tanda partisipasi:</p>
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