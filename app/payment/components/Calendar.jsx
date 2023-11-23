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
      'summary': localStorage.getItem('item_title') ?? 'Ini event',
      'description': localStorage.getItem('item_description') ?? 'testing event',
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

      router.replace('http://localhost:3000/payment');
      setIsDateSet(true);

      if(req.ok){
        //
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
        <h2 className="font-bold text-2xl mb-5">Pilih Tanggal Booking</h2>
        <div className="flex gap-5 items-center">
          <SelectDatepicker
            selectedDate={startValue}
            onDateChange={onStartDateChange}
          />

          <p className="text-xl mt-5">sampai</p>

          <SelectDatepicker
            selectedDate={endValue}
            onDateChange={onEndDateChange}
          />
        </div>

        <button className='rounded bg-primary text-white py-2 px-3 mt-5' onClick={createEvent}>Konfirmasi</button>
      </div>

      <div className="mt-20">
        <h2 className="font-bold text-2xl mb-5 text-center">Preview Calendar Google</h2>
        <Calendar apiKey={API_KEY} calendars={calendars} />
      </div>
    </>
  )
}

export default CalendarComponent