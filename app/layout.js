"use client";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import NextAuthProviders from "@/components/NextAuthProviders";

const lexend_deca = Lexend_Deca({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend_deca.className} max-w-[1920px] mx-auto `}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <ProgressBar
          height="4px"
          color="#D90027"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </body>
    </html>
  );
}
