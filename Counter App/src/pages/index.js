import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Button from '@/component/button'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [number, setNumber] = useState(0)
  return (
    <main
      className={`bg-white flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >

      <h2 className='text-black'> Learning Next JS Batch 9</h2>

      <div className='mt-5'>
        <Link className='p-2 bg-red-400 m-2 rounded text-white' href={'/login'}>Login</Link>
        <Link className='p-2 bg-red-400 m-2 rounded text-white' href={'/contact'}>Contact</Link>
        <Link className='p-2 bg-red-400 m-2 rounded text-white' href={'/about'}>About</Link>

      </div>

      <h2 className=' text-black text-[40px] font-bold'>Counter App</h2>
      <div className='flex items-center'>
        <Button onClick={() => {
          setNumber(number + 1)
        }}> + </Button>

        <h2 className=' text-black text-[40px] font-bold'>{number}</h2>
        <Button onClick={() => setNumber(number-1)}>-</Button>
      </div>

    </main>
  )
}
