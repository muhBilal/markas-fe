"use client";
import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import Container from '../component/Container';
import Calendar from './components/Calendar';
import Form from './components/Form';
import BackToBeranda from './components/BackToBeranda';

const page = () => {
  const [tabs, setTabs] = useState(1);
  
  const nextTabs = () => {
    setTabs((prev) => prev + 1)
  }

  const prevTabs = () => {
    setTabs((prev) => prev - 1)
  }

  const [data, setData] = useState({
    name: 'test',
    gender: '',
    email: '',
    no_telepon: '',
    instansi: '',
    jenis_kegiatan: '',
    nama_kegiatan: '',
    deskripsi: ''
  });

  const addEvent = async () => {
    const event = {
      'summary': 'Test Event',
      'description': 'Test aja',
      'start': {
        'dateTime': new Date().toISOString(),
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      'end': {
        'dateTime': new Date().toISOString(),
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
      }
    }

    const req = await fetch(`https://www.googleapis.com/calendar/v3/calendars/aswinarung1@gmail.com/events`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
      },
      body: JSON.stringify(event)
    })

    const res = req.json();

    console.log(res);
  }

  return (
    <Container>
        <button onClick={addEvent}>Tambah event</button>
        <div className='my-5'>
          <NavTabs tabs={tabs} />
        </div>
        {
          tabs == 1 && (
            <div className="my-5">
              <Calendar />
            </div>
          )
        }
        {
          tabs == 2 && (
            <div className="my-5">
              <Form data={data} />
            </div>
          )
        }
        {
          tabs == 3 && (
            <div className="my-5">
              <BackToBeranda />
            </div>
          )
        }

        <div className="my-3">
          {
            tabs == 1 && (
              <button className='rounded bg-primary text-white py-2 px-3 block ms-auto' onClick={nextTabs}>Selanjutnya</button>
            )
          }
          {
            tabs == 2 && (
              <div className='flex'>
                <button className='rounded text-primary py-2 px-3 ms-auto block' onClick={prevTabs}>Sebelumnya</button>
                <button className='rounded bg-primary text-white py-2 px-3' onClick={nextTabs}>Selanjutnya</button>
              </div>
            )
          }
        </div>
    </Container>
  )
}

export default page