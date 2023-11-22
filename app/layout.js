"use client";
import { Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar/Navbar";
import Footer from "./component/footer/Footer";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import NextAuthProviders from "@/app/component/NextAuthProviders";
import { useEffect, useState } from "react";
import SplashScreen from "./component/SplashScreen";
import { usePathname } from "next/navigation";
import { Fade } from "react-awesome-reveal";

const lexend_deca = Lexend_Deca({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isReady, setIsReady] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 1500);

    return () => setIsReady(false);
  }, [pathname]);
  return (
    <html lang="en">
      <body className={`${lexend_deca.className} max-w-[1920px] mx-auto `}>
        {isReady ? (
          <NextAuthProviders>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </NextAuthProviders>
        ) : (
          <Fade>
            <SplashScreen />
          </Fade>
        )}

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
