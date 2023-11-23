"use client"
import { SelectDatepicker } from 'react-select-datepicker';
import toast, { Toaster } from 'react-hot-toast';
import React, {useCallback, useEffect, useState} from 'react'
import Calendar from "@ericz1803/react-google-calendar";
import { useRouter } from 'next/navigation';

const CalendarComponent = ({startValue, setStartValue, endValue, setEndValue, setIsDateSet, session}) => {
  const [accessToken, setAccessToken] = useState(null);
  const router = useRouter();

  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
  let calendars = [
    { calendarId: session?.user?.email },
  ];

  const onStartDateChange = useCallback((date) => {
    setStartValue(date);
  }, []);

  const onEndDateChange = useCallback((date) => {
    setEndValue(date);
  }, []);

  const createEvent = async () => {
    if(!startValue || !endValue){
      return;
    }

    const booking = {
      'summary': 'Pemesanan markas',
      'description': 'Melakukan pemesanan markas di ' + localStorage.getItem('markas_place_name') + ', ' + localStorage.getItem('markas_place_regional') + ' dengan ruangan ' + localStorage.getItem('markas_place_room'),
      'start': {
        'dateTime': startValue.toISOString(),
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
      },
      'end': {
        'dateTime': endValue.toISOString(),
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
        alert('Berhasil melakukan pemesanan')
        setIsDateSet(true);
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

  return (
    <>
      <div className="mt-10">
        <h2 className="mb-5 text-2xl font-bold">Pilih Tanggal Booking</h2>
        <div className="flex items-center gap-5">
          <SelectDatepicker
            selectedDate={startValue}
            onDateChange={onStartDateChange}
          />

          <p className="mt-5 text-xl">sampai</p>

          <SelectDatepicker
            selectedDate={endValue}
            onDateChange={onEndDateChange}
          />
        </div>

        <button className='px-3 py-2 mt-5 text-white rounded bg-primary' onClick={createEvent}>Konfirmasi</button>
      </div>

      <div className="mt-20">
        <h2 className="mb-5 text-2xl font-bold text-center">Preview Calendar Google</h2>
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
    </>
  )
}

export default CalendarComponent