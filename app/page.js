import Image from 'next/image'
import Container from './component/Container'
import Hero from './component/home/Hero'
import Marquee from './component/home/Marquee'
import Qoutes from './component/home/Quotes'
import OrderStep from './component/home/OrderStep'

export default function Home() {
  return (
    <div className='bg-white'>
      <div>
        <Hero />
        <Marquee />
        <Qoutes />
        <OrderStep />
      </div>
    </div>

  )
}
