"use client";
import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";
import { useSession } from "next-auth/react";

const page = () => {
  const { data } = useSession();
    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    let calendars = [
        { calendarId: data?.user?.email },
    ];

    let styles = {
        //you can use object styles (no import required)
        calendar: {
          borderWidth: "3px", //make outer edge of calendar thicker
          background: 'white'
        },
      
        //you can also use emotion's string styles
        today: css`
          /* highlight today by making the text red and giving it a red border */
          color: red;
          border: 1px solid red;
        `,
      };

  return (
    <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
  )
}

export default page