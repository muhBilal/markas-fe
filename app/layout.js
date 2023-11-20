import { Lexend_Deca } from 'next/font/google'
import './globals.css'
import Navbar from './component/navbar/Navbar'
import Footer from './component/footer/Footer'

const lexend_deca = Lexend_Deca({ subsets: ['latin'] })

export const metadata = {
  title: 'Markas',
  description: 'A hub for startup founders to grow with the ecosystem.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${lexend_deca.className}`}>
        <div className='flex flex-col min-h-screen'>
          <Navbar />
          <main className='flex-grow'>
            {children}
          </main>
          <Footer />

        </div>
      </body>
    </html>
  )
}
