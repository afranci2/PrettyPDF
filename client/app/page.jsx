import Image from 'next/image'
import Hero from './sections/Hero'


export default function Home() {
  return (
    
    <main>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
      </div>
    </main>
  )
}
