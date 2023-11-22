"use client";
import React from "react";
import Calendar from "@ericz1803/react-google-calendar";

const page = () => {
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    let calendars = [
        { calendarId: "aswinarung1@gmail.com" },
    ];

  return (
    <Calendar apiKey={API_KEY} calendars={calendars} />
  )
}

export default page