import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function contact() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      
<h2>Learning Next JS Batch 9</h2>

<div className='mt-5'>
<h1>Contact</h1>

</div>
    </main>
  )
}