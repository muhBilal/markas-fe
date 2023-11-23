"use client";
import React, { useState } from 'react';
import NavTabs from './components/NavTabs';
import Container from '../component/Container';
import Calendar from './components/Calendar';
import Form from './components/Form';
import BackToBeranda from './components/BackToBeranda';
import { useSession } from "next-auth/react";

const page = () => {
  const [tabs, setTabs] = useState(1);
  const [startValue, setStartValue] = useState(null);
  const [endValue, setEndValue] = useState(null);
  const [isDateSet, setIsDateSet] = useState(false);
  const { data: session } = useSession();
  
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

  return (
    <Container>
        <div className='my-5'>
          <NavTabs tabs={tabs} />
        </div>
        {
          tabs == 1 && (
            <div className="my-5">
              <Calendar startValue={startValue} setStartValue={setStartValue} endValue={endValue} setEndValue={setEndValue} setIsDateSet={setIsDateSet} session={session} />
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
              <button className='block px-3 py-2 text-white rounded bg-primary ms-auto' onClick={nextTabs}>Selanjutnya</button>
            )
          }
          {
            tabs == 2 && (
              <div className='flex'>
                <button className='block px-3 py-2 rounded text-primary ms-auto' onClick={prevTabs}>Sebelumnya</button>
                <button className='px-3 py-2 text-white rounded bg-primary' onClick={nextTabs}>Selanjutnya</button>
              </div>
            )
          }
        </div>
    </Container>
  )
}

export default page