"use client"
import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react";

const GoogleSignInBtn = () => {
  const { status } = useSession();
  return (
    <>
      {
        status !== "authenticated" ? (
          <button className='rounded bg-primary text-white py-2 px-4' onClick={() => signIn('google')}>Masuk</button>
        ) : (
          <button className='rounded bg-red-[#D90027] text-white py-2 px-3' onClick={() => signOut()}>Keluar</button>
        )
      }
    </>
  )
}

export default GoogleSignInBtn